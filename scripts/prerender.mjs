import { spawn } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import puppeteer from 'puppeteer'

const port = 4179
const origin = `http://127.0.0.1:${port}`
const routes = ['/', '/contact', '/en', '/es', '/de']

// Vercel's build image does not include the shared libraries required by the
// Chromium bundled with Puppeteer. Keep full browser prerendering locally, and
// generate crawlable, locale-correct entry documents in the cloud build.
if (process.env.VERCEL) {
  const source = await readFile('dist/index.html', 'utf8')
  const locales = {
    en: {
      lang: 'en',
      title: 'TOUSKI – Mountain gear, trekking, GPS and outdoor safety',
      description: 'TOUSKI offers premium essentials for mountain adventures, trekking, hiking, high-altitude GPS, outdoor safety drones, cabins and the home in Canada.',
    },
    es: {
      lang: 'es',
      title: 'TOUSKI – Equipamiento de montaña, trekking, GPS y seguridad outdoor',
      description: 'TOUSKI ofrece equipamiento premium para montaña, trekking, GPS de altura, drones de seguridad outdoor, cabana y esenciales practicos en Canada.',
    },
    de: {
      lang: 'de',
      title: 'TOUSKI – Bergausrüstung, Trekking, GPS und Outdoor-Sicherheit',
      description: 'TOUSKI bietet hochwertige Ausrüstung für Berge, Trekking, Höhen-GPS, Outdoor-Sicherheit, Drohnen, Chalet und praktische Essentials in Kanada.',
    },
  }

  for (const [route, seo] of Object.entries(locales)) {
    const canonical = `https://touski.online/${route}`
    const html = source
      .replace('<html lang="fr">', `<html lang="${seo.lang}">`)
      .replace(/<title>[^<]*<\/title>/, `<title>${seo.title}</title>`)
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${seo.description}" />`)
      .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
      .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    await mkdir(`dist/${route}`, { recursive: true })
    await writeFile(`dist/${route}/index.html`, html)
  }
  process.exit(0)
}

const server = spawn(
  process.execPath,
  ['./node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', String(port)],
  { stdio: 'ignore' },
)

const waitForServer = async () => {
  for (let attempt = 0; attempt < 150; attempt += 1) {
    try {
      const response = await fetch(origin)
      if (response.ok) return
    } catch {
      // The preview server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
  throw new Error('Vite preview server did not start')
}

let browser
try {
  await waitForServer()
  browser = await puppeteer.launch({ headless: true })

  for (const route of routes) {
    const page = await browser.newPage()
    await page.setRequestInterception(true)
    page.on('request', (request) => {
      if (request.url().includes('googletagmanager.com') || request.url().includes('consent.cookiebot.com')) request.abort()
      else request.continue()
    })
    await page.goto(`${origin}${route}`, { waitUntil: 'domcontentloaded' })
    await page.evaluate(() => {
      document.querySelectorAll('script[src*="googletagmanager"]').forEach((node) => node.remove())
      document.querySelectorAll('script[src*="consent.cookiebot.com"]').forEach((node) => node.remove())
    })

    const html = `<!doctype html>\n${await page.evaluate(() => document.documentElement.outerHTML)}`
    const directory = route === '/' ? 'dist' : `dist${route}`
    await mkdir(directory, { recursive: true })
    await writeFile(`${directory}/index.html`, html)
    await page.close()
  }
} finally {
  if (browser) await browser.close()
  server.kill()
}
