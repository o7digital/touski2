import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppEn from './AppEn.jsx'

const isEnglish = window.location.pathname === '/en' || window.location.pathname.startsWith('/en/')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isEnglish ? <AppEn /> : <App />}
  </StrictMode>,
)
