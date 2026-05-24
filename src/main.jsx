import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const isEnglish = window.location.pathname === '/en' || window.location.pathname.startsWith('/en/')
const isSpanish = window.location.pathname === '/es' || window.location.pathname.startsWith('/es/')
const isGerman = window.location.pathname === '/de' || window.location.pathname.startsWith('/de/')

const siteUrl = 'https://touski.online'
const path = window.location.pathname
const locale = isGerman ? 'de-CA' : isSpanish ? 'es-CA' : isEnglish ? 'en-CA' : 'fr-CA'
const canonicalPath = isGerman ? '/de' : isSpanish ? '/es' : isEnglish ? '/en' : '/'
const canonicalUrl = `${siteUrl}${canonicalPath}`

document.documentElement.lang = locale.startsWith('de') ? 'de' : locale.startsWith('es') ? 'es' : locale.startsWith('en') ? 'en' : 'fr'
document.title = isGerman
  ? 'TOUSKI - Bergausrustung, Trekking und Outdoor-Sicherheit'
  : isSpanish
  ? 'TOUSKI - Equipamiento de montaña, trekking y seguridad outdoor'
  : isEnglish
    ? 'TOUSKI - Mountain equipment, trekking and outdoor safety'
    : 'TOUSKI - Équipement montagne, trekking et sécurité outdoor'

const ensureLink = (rel, href, hreflang) => {
  let el = document.head.querySelector(`link[rel="${rel}"]${hreflang ? `[hreflang="${hreflang}"]` : ''}`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

ensureLink('canonical', canonicalUrl)
ensureLink('alternate', `${siteUrl}/`, 'fr-CA')
ensureLink('alternate', `${siteUrl}/en`, 'en-CA')
ensureLink('alternate', `${siteUrl}/es`, 'es-CA')
ensureLink('alternate', `${siteUrl}/de`, 'de-CA')
ensureLink('alternate', `${siteUrl}/`, 'x-default')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App locale={isGerman ? 'de' : isSpanish ? 'es' : isEnglish ? 'en' : 'fr'} />
  </StrictMode>,
)
