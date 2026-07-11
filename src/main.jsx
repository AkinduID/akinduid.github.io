import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// GitHub Pages 404.html stores the originally requested path in
// sessionStorage before redirecting to index.html (since GitHub Pages has
// no server-side routing). Restore that path here so React Router can pick
// up the correct route on load.
const redirect = sessionStorage.getItem('redirect')

if (redirect) {
  sessionStorage.removeItem('redirect')
  window.history.replaceState(null, '', redirect)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
