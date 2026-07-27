import { useEffect } from 'react'
import { site } from '../data/site'

type SeoProps = {
  title: string
  description: string
  /** Route path (e.g. "/om-oss") used to build the canonical/OG URL. */
  path: string
  /**
   * Optional per-route JSON-LD structured data. One object or several.
   * Injected into <head> and removed when the route changes, so schema from
   * one page never leaks onto another.
   */
  jsonLd?: object | object[]
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-page document metadata. Updates the single title/description/canonical/OG
 * tags imperatively (mutating the static defaults from index.html) so each route
 * gets correct metadata without duplicating head tags.
 */
export function Seo({ title, description, path, jsonLd }: SeoProps) {
  useEffect(() => {
    const url = `${site.url}${path === '/' ? '' : path}`
    document.title = title
    upsertMeta('name', 'description', description)
    upsertCanonical(url)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
  }, [title, description, path])

  // Per-route JSON-LD. This component is authoritative over every managed block
  // (marked data-seo-jsonld), including the copies the prerenderer bakes into the
  // static HTML: on mount it clears any existing ones (prerendered or from a
  // previous route) and injects this route's, so pages never duplicate or carry
  // stale structured data after client-side navigation. The site-wide schema in
  // index.html has no data-seo-jsonld marker and is deliberately left untouched.
  // Keyed on the serialized content so equal-but-freshly-built objects don't churn.
  const serialized = jsonLd
    ? JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])
    : ''
  useEffect(() => {
    document.head
      .querySelectorAll('script[data-seo-jsonld]')
      .forEach((el) => el.remove())
    if (!serialized) return
    const blocks = JSON.parse(serialized) as object[]
    const els = blocks.map((block) => {
      const el = document.createElement('script')
      el.type = 'application/ld+json'
      el.setAttribute('data-seo-jsonld', '')
      el.textContent = JSON.stringify(block)
      document.head.appendChild(el)
      return el
    })
    return () => els.forEach((el) => el.remove())
  }, [serialized])

  return null
}
