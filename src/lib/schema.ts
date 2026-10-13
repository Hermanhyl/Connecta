// Builders for JSON-LD structured data (schema.org).
// Injected per-route via <Seo jsonLd={...} />. Keeping the shapes here (rather
// than inline in pages) keeps pages tidy and the schema in one reviewable place.

import { site, type Faq, type BlogPost } from '../data/site'

/** Norwegian month names → 2-digit number, for parsing display dates like "31. mars 2024". */
const NB_MONTHS: Record<string, string> = {
  januar: '01', februar: '02', mars: '03', april: '04', mai: '05', juni: '06',
  juli: '07', august: '08', september: '09', oktober: '10', november: '11', desember: '12',
}

/** Convert a Norwegian display date ("31. mars 2024") to ISO "2024-03-31". Returns '' if unparseable. */
export function nbDateToIso(display: string): string {
  const m = display.trim().match(/^(\d{1,2})\.?\s+([a-zæøå]+)\s+(\d{4})$/i)
  if (!m) return ''
  const [, day, monthName, year] = m
  const month = NB_MONTHS[monthName.toLowerCase()]
  if (!month) return ''
  return `${year}-${month}-${day.padStart(2, '0')}`
}

/**
 * FAQPage schema — makes the home page eligible for expandable FAQ rich results.
 * Answers must be plain text (no markup), which our `faq` data already is.
 */
export function faqPageSchema(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

/** BlogPosting schema for a single article — eligibility for article rich results. */
export function blogPostingSchema(post: BlogPost) {
  const url = `${site.url}/blogg/${post.slug}`
  const iso = nbDateToIso(post.date)
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    inLanguage: 'nb-NO',
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(iso ? { datePublished: iso, dateModified: iso } : {}),
    author: { '@type': 'Organization', name: site.name, url: site.url },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      logo: { '@type': 'ImageObject', url: `${site.url}/icon-512.png` },
    },
  }
}
