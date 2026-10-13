// Build-time prerenderer. Runs after `vite build` (client) and
// `vite build --ssr` (server). For every route it renders the app to static
// HTML and injects per-route <head> data into the built index.html template,
// writing one HTML file per route so search engines and first paint get real
// content instead of an empty <div id="root">.

import { render, prerenderPaths } from '../dist-server/entry-server.js'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const template = readFileSync(resolve(dist, 'index.html'), 'utf-8')

/** Escape a string for use inside an HTML attribute value. */
const attr = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Escape a string for use as HTML text content. */
const text = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Replace the content of an existing <meta {attrName}="{key}"> tag, or insert one before </head>. */
function setMeta(html, attrName, key, content) {
  const re = new RegExp(`<meta[^>]*\\b${attrName}="${key}"[^>]*>`, 'i')
  const tag = `<meta ${attrName}="${key}" content="${attr(content)}" />`
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `    ${tag}\n  </head>`)
}

/** Insert markup immediately before </head>. */
function injectHead(html, markup) {
  return html.replace('</head>', `    ${markup}\n  </head>`)
}

function buildPage(pathname) {
  const { html: appHtml, head } = render(pathname)
  let page = template

  // Title
  page = page.replace(/<title>[\s\S]*?<\/title>/i, `<title>${text(head.title)}</title>`)

  // Description + social meta
  page = setMeta(page, 'name', 'description', head.description)
  page = setMeta(page, 'property', 'og:title', head.title)
  page = setMeta(page, 'property', 'og:description', head.description)
  page = setMeta(page, 'property', 'og:url', head.canonical)
  page = setMeta(page, 'name', 'twitter:title', head.title)
  page = setMeta(page, 'name', 'twitter:description', head.description)

  // Canonical
  if (/<link[^>]*rel="canonical"[^>]*>/i.test(page)) {
    page = page.replace(/<link[^>]*rel="canonical"[^>]*>/i, `<link rel="canonical" href="${attr(head.canonical)}" />`)
  } else {
    page = injectHead(page, `<link rel="canonical" href="${attr(head.canonical)}" />`)
  }

  // noindex (404 only)
  if (head.noindex) page = injectHead(page, `<meta name="robots" content="noindex" />`)

  // Per-route JSON-LD (in addition to the site-wide MedicalBusiness in the template)
  for (const block of head.jsonLd) {
    const json = JSON.stringify(block).replace(/</g, '\\u003c')
    page = injectHead(page, `<script type="application/ld+json" data-seo-jsonld>${json}</script>`)
  }

  // App markup
  page = page.replace(/<!--app-html-->[\s\S]*?<!--\/app-html-->/, appHtml)

  return page
}

/** Map a route to its output file: '/' -> dist/index.html, '/x' -> dist/x/index.html. */
function outFile(pathname) {
  if (pathname === '/404') return resolve(dist, '404.html')
  if (pathname === '/') return resolve(dist, 'index.html')
  return resolve(dist, `.${pathname}`, 'index.html')
}

const paths = [...prerenderPaths, '/404']
for (const pathname of paths) {
  const file = outFile(pathname)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, buildPage(pathname))
  console.log(`  prerendered ${pathname.padEnd(38)} -> ${file.slice(dist.length + 1)}`)
}
console.log(`\n✓ prerendered ${paths.length} routes`)
