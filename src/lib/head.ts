// Per-route <head> data (title, description, canonical, structured data).
// Single source used both by the build-time prerenderer (scripts/prerender.mjs
// via entry-server) and available to any runtime code that needs the same map.

import { seo, site, posts, faq, type SeoMeta } from '../data/site'
import { faqPageSchema, blogPostingSchema } from './schema'

export type HeadData = {
  title: string
  description: string
  canonical: string
  jsonLd: object[]
  /** True for the 404 page so the prerenderer emits <meta name="robots" content="noindex">. */
  noindex?: boolean
}

/** Resolve the head metadata for a given route pathname. */
export function headFor(pathname: string): HeadData {
  const canonical = `${site.url}${pathname === '/' ? '' : pathname}`

  // Blog article (dynamic route).
  if (pathname.startsWith('/blogg/')) {
    const slug = pathname.slice('/blogg/'.length)
    const post = posts.find((p) => p.slug === slug)
    if (post) {
      return {
        title: `${post.title} – ${site.name}`,
        description: post.excerpt,
        canonical,
        jsonLd: [blogPostingSchema(post)],
      }
    }
  }

  // 404 — prerendered to dist/404.html, kept out of the index.
  if (pathname === '/404') {
    return {
      title: `Siden finnes ikke – ${site.name}`,
      description: 'Siden du leter etter finnes ikke eller er flyttet.',
      canonical: `${site.url}/404`,
      jsonLd: [],
      noindex: true,
    }
  }

  // Static routes: the seo map is keyed by path.
  const meta: SeoMeta = seo[pathname] ?? seo['/']
  const jsonLd = pathname === '/' ? [faqPageSchema(faq)] : []
  return { title: meta.title, description: meta.description, canonical, jsonLd }
}
