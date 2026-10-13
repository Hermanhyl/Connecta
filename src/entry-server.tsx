// Server entry used only at build time by scripts/prerender.mjs.
// Renders the app to a static HTML string for a given route and returns the
// per-route <head> data to inject. Uses react-router's StaticRouter (v7 core),
// so no extra dependency is needed.

import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { seo, posts } from './data/site'
import { headFor, type HeadData } from './lib/head'

export function render(pathname: string): { html: string; head: HeadData } {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={pathname}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  return { html, head: headFor(pathname) }
}

/**
 * Every route to emit as static HTML. Static routes come from the seo map
 * (keyed by path); blog articles come from the posts list. '/404' is rendered
 * separately to dist/404.html by the prerenderer.
 */
export const prerenderPaths: string[] = [
  ...Object.keys(seo),
  ...posts.map((p) => `/blogg/${p.slug}`),
]
