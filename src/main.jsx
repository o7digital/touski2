import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppEn from './AppEn.jsx'
import AppEs from './AppEs.jsx'
import AppDe from './AppDe.jsx'
import Contact from './Contact.jsx'

const isContact = window.location.pathname === '/contact' || window.location.pathname.startsWith('/contact/')
const isEnglish = window.location.pathname === '/en' || window.location.pathname.startsWith('/en/')
const isSpanish = window.location.pathname === '/es' || window.location.pathname.startsWith('/es/')
const isGerman = window.location.pathname === '/de' || window.location.pathname.startsWith('/de/')

const siteUrl = 'https://touski.online'
const locale = isGerman ? 'de-CA' : isSpanish ? 'es-CA' : isEnglish ? 'en-CA' : 'fr-CA'
const canonicalPath = isContact ? '/contact' : isGerman ? '/de' : isSpanish ? '/es' : isEnglish ? '/en' : '/'
const canonicalUrl = `${siteUrl}${canonicalPath}`
const seo = isContact
  ? {
      title: 'Contactez TOUSKI – Service client au Québec et au Canada',
      description: "Contactez TOUSKI Canada: adresse à Saint-Élie-de-Caxton, email, téléphone, horaires, service client, livraison, retours et équipement Mont d'Iberville.",
      locale: 'fr_CA',
    }
  : isGerman
  ? {
      title: 'TOUSKI – Bergausrüstung, Trekking, GPS und Outdoor-Sicherheit',
      description: 'TOUSKI bietet hochwertige Ausrüstung für Berge, Mount Iberville, Trekking, Höhen-GPS, Outdoor-Sicherheit, Drohnen, Chalet und praktische Essentials in Kanada.',
      locale: 'de_CA',
    }
  : isSpanish
    ? {
        title: 'TOUSKI – Equipamiento de montaña, trekking, GPS y seguridad outdoor',
        description: 'TOUSKI ofrece equipamiento premium para montana, Monte Iberville, trekking, GPS de altura, drones de seguridad outdoor, cabana y esenciales practicos en Canada.',
        locale: 'es_CA',
      }
    : isEnglish
      ? {
          title: 'TOUSKI – Mountain gear, trekking, GPS and outdoor safety',
          description: 'TOUSKI offers premium essentials for mountain adventures, Mount Iberville, trekking, hiking, high-altitude GPS, outdoor safety drones, cabins and the home in Canada.',
          locale: 'en_CA',
        }
      : {
          title: 'TOUSKI – Équipement montagne, trekking, GPS et sécurité outdoor au Québec',
          description: "TOUSKI propose au Québec des indispensables premium pour montagne, Mont d'Iberville, trekking, randonnée, GPS haute altitude, drones de sécurité outdoor, chalet et maison.",
          locale: 'fr_CA',
        }

document.documentElement.lang = locale.startsWith('de') ? 'de' : locale.startsWith('es') ? 'es' : locale.startsWith('en') ? 'en' : 'fr'
document.title = seo.title

const setMeta = (selector, attribute, value) => {
  const element = document.head.querySelector(selector)
  if (element) element.setAttribute(attribute, value)
}

setMeta('meta[name="description"]', 'content', seo.description)
setMeta('meta[property="og:title"]', 'content', seo.title)
setMeta('meta[property="og:description"]', 'content', seo.description)
setMeta('meta[property="og:url"]', 'content', canonicalUrl)
setMeta('meta[property="og:locale"]', 'content', seo.locale)
setMeta('meta[name="twitter:title"]', 'content', seo.title)
setMeta('meta[name="twitter:description"]', 'content', seo.description)

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
    {isContact ? <Contact /> : isGerman ? <AppDe /> : isSpanish ? <AppEs /> : isEnglish ? <AppEn /> : <App />}
  </StrictMode>,
)
