import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

const root = document.getElementById('root')!

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production HTML is prerendered (scripts/prerender.mjs), so hydrate the existing
// markup. In dev there is no server markup — clear the loading spinner and mount.
if (import.meta.env.DEV) {
  root.innerHTML = ''
  createRoot(root).render(app)
} else {
  hydrateRoot(root, app, {
    // Hydration mismatches are silent in production React; surface them so a
    // regression in the prerender/hydrate parity is visible in the console.
    onRecoverableError: (error) => console.error('[hydration]', error),
  })
}
