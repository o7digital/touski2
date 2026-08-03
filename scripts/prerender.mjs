import { spawn } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import puppeteer from 'puppeteer'

const port = 4179
const origin = `http://127.0.0.1:${port}`
const seoRoutes = {
  '/equipement-montagne-quebec-mont-iberville': {
    title: "Équipement montagne Québec Mont d'Iberville – TOUSKI",
    description: "TOUSKI rassemble des essentiels pour préparer la montagne, les sentiers québécois et l'univers du Mont d'Iberville: sécurité, autonomie, orientation et matériel utile.",
    body: "Équipement montagne Québec Mont d'Iberville. Équipement outdoor Québec Mont d'Iberville. Équipement alpinisme Québec Mont d'Iberville. GPS haute montagne Québec Mont d'Iberville.",
  },
  '/gps-haute-montagne-quebec-mont-iberville': {
    title: "GPS haute montagne Québec Mont d'Iberville – TOUSKI",
    description: "Solutions GPS, traceurs, balises, orientation et sécurité outdoor pour les sorties haute montagne Québec Mont d'Iberville.",
    body: "GPS haute montagne Québec Mont d'Iberville. GPS randonnée Québec Mont d'Iberville. Sécurité outdoor Québec Mont d'Iberville. Autonomie outdoor Québec Mont d'Iberville.",
  },
  '/trekking-randonnee-quebec-mont-iberville': {
    title: "Trekking randonnée Québec Mont d'Iberville – TOUSKI",
    description: "Matériel de trekking et randonnée au Québec lié au Mont d'Iberville: sacs, lampes, filtration, orientation, sécurité et autonomie.",
    body: "Trekking Québec Mont d'Iberville. Randonnée Québec Mont d'Iberville. Matériel trekking Québec Mont d'Iberville. Matériel randonnée Québec Mont d'Iberville.",
  },
}

const routes = ['/', '/contact', '/en', '/es', '/de', ...Object.keys(seoRoutes)]

// Vercel's build image does not include the shared libraries required by the
// Chromium bundled with Puppeteer. Keep full browser prerendering locally, and
// generate crawlable, locale-correct entry documents in the cloud build.
if (process.env.VERCEL) {
  const source = await readFile('dist/index.html', 'utf8')
  const writeStaticRoute = async (route, seo, body, lang = 'fr') => {
    const canonical = `https://touski.online${route === '/' ? '' : route}`
    const html = source
      .replace('<html lang="fr">', `<html lang="${lang}">`)
      .replace(/<title>[^<]*<\/title>/, `<title>${seo.title}</title>`)
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${seo.description}" />`)
      .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${seo.title}" />`)
      .replace(/<meta property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${seo.description}" />`)
      .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${seo.title}" />`)
      .replace(/<meta\s+name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${seo.description}" />`)
      .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
      .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
      .replace('<div id="root"></div>', `<div id="root"><main><section><h1>${seo.title}</h1><p>${seo.description}</p><p>${body}</p></section></main></div>`)
    const directory = route === '/' ? 'dist' : `dist${route}`
    await mkdir(directory, { recursive: true })
    await writeFile(`${directory}/index.html`, html)
  }

  await writeStaticRoute(
    '/',
    {
      title: "TOUSKI - Équipement montagne, trekking, GPS et sécurité outdoor au Québec",
      description: "TOUSKI propose au Québec des indispensables premium pour montagne, Mont d'Iberville, trekking, randonnée, GPS haute altitude, drones de sécurité outdoor, chalet et maison.",
    },
    "Équipement montagne Québec Mont d'Iberville. Trekking Québec Mont d'Iberville. Randonnée Québec Mont d'Iberville. GPS haute montagne Québec Mont d'Iberville. Sécurité outdoor Québec Mont d'Iberville.",
  )

  await writeStaticRoute(
    '/contact',
    {
      title: "Contactez TOUSKI – Service client au Québec et au Canada",
      description: "Contactez TOUSKI Canada: adresse à Saint-Élie-de-Caxton, email, téléphone, horaires, service client, livraison, retours et équipement Mont d'Iberville.",
    },
    "Contact TOUSKI Québec Mont d'Iberville. Service client TOUSKI Québec Mont d'Iberville. 1030, Avenue Muguette, Saint-Élie-de-Caxton QC G0X 2N0. contact@touski.online. +1 819-701-0378.",
  )

  for (const [route, seo] of Object.entries(seoRoutes)) {
    await writeStaticRoute(route, seo, seo.body)
  }

  const locales = {
    en: {
      lang: 'en',
      title: 'TOUSKI – Mountain gear, trekking, GPS and outdoor safety',
      description: 'TOUSKI offers premium essentials for mountain adventures, Mount Iberville, trekking, hiking, high-altitude GPS, outdoor safety drones, cabins and the home in Canada.',
    },
    es: {
      lang: 'es',
      title: 'TOUSKI – Equipamiento de montaña, trekking, GPS y seguridad outdoor',
      description: 'TOUSKI ofrece equipamiento premium para montana, Monte Iberville, trekking, GPS de altura, drones de seguridad outdoor, cabana y esenciales practicos en Canada.',
    },
    de: {
      lang: 'de',
      title: 'TOUSKI – Bergausrüstung, Trekking, GPS und Outdoor-Sicherheit',
      description: 'TOUSKI bietet hochwertige Ausrüstung für Berge, Mount Iberville, Trekking, Höhen-GPS, Outdoor-Sicherheit, Drohnen, Chalet und praktische Essentials in Kanada.',
    },
  }

  for (const [route, seo] of Object.entries(locales)) {
    await writeStaticRoute(`/${route}`, seo, seo.description, seo.lang)
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
