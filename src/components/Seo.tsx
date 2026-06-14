import { useEffect } from 'react'
import { site } from '../data/site'

type SeoProps = {
  title: string
  description: string
  /** Route path (e.g. "/om-oss") used to build the canonical/OG URL. */
  path: string
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
export function Seo({ title, description, path }: SeoProps) {
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

  return null
}
