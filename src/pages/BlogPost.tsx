import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays, Clock, List } from 'lucide-react'
import { posts, site } from '../data/site'
import { Section, Reveal } from '../components/Section'
import { Blobs } from '../components/Decor'
import { AnimatedButton } from '../components/AnimatedButton'
import { Seo } from '../components/Seo'

/** Build a URL-safe id from a Norwegian heading for in-page anchors. */
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'o')
    .replace(/å/g, 'a')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="container-content py-24 text-center">
        <h1 className="font-heading text-3xl font-semibold">Innlegget finnes ikke</h1>
        <p className="mt-4 text-clinic-muted">Vi fant dessverre ikke blogginnlegget du leter etter.</p>
        <div className="mt-8">
          <AnimatedButton to="/blogg">Tilbake til bloggen</AnimatedButton>
        </div>
      </div>
    )
  }

  // Reading time (~200 words per minute) and section list for the overview.
  const wordCount = post.body.reduce((n, b) => n + b.text.trim().split(/\s+/).length, 0)
  const minutes = Math.max(1, Math.round(wordCount / 200))
  const headings = post.body
    .filter((b) => b.type === 'h2')
    .map((b) => ({ text: b.text, id: slugify(b.text) }))

  // Use the first paragraph as a styled lead (ingress).
  const hasLead = post.body[0]?.type === 'p'
  const leadText = hasLead ? post.body[0].text : null
  const bodyBlocks = hasLead ? post.body.slice(1) : post.body

  return (
    <>
      <Seo
        title={`${post.title} – ${site.name}`}
        description={post.excerpt}
        path={`/blogg/${post.slug}`}
      />
      <section className="relative overflow-hidden pb-4">
        <Blobs />
        <div className="container-content pt-4">
          <div className="mx-auto max-w-2xl">
            <Link
              to="/blogg"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-clinic-blue transition-colors hover:text-clinic-blueDark"
            >
              <ArrowLeft size={16} />
              Tilbake til bloggen
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-clinic-teal">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={15} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={15} />
                {minutes} min lesing
              </span>
            </div>
            <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              {post.title}
            </h1>
            {leadText && (
              <p className="mt-6 border-l-2 border-clinic-gold pl-5 font-heading text-xl leading-relaxed text-clinic-ink">
                {leadText}
              </p>
            )}
          </div>
        </div>
      </section>

      <Section className="container-content py-10">
        {/* Innhold — overview / jump links for long reads */}
        {headings.length > 1 && (
          <Reveal className="mx-auto mb-10 max-w-2xl rounded-2xl border border-clinic-line bg-clinic-surface/60 p-6">
            <h2 className="mb-4 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-[0.14em] text-clinic-blueDark">
              <List size={16} />
              Innhold
            </h2>
            <ol className="space-y-2">
              {headings.map((h, i) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="flex gap-3 text-clinic-muted transition-colors hover:text-clinic-blue"
                  >
                    <span className="font-heading font-semibold text-clinic-teal">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{h.text}</span>
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        )}

        <Reveal className="prose-clinic mx-auto max-w-2xl">
          {bodyBlocks.map((block, i) =>
            block.type === 'h2' ? (
              <h2 key={i} id={slugify(block.text)} className="scroll-mt-28">
                {block.text}
              </h2>
            ) : (
              <p key={i}>{block.text}</p>
            ),
          )}
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-2xl rounded-3xl bg-clinic-surface px-8 py-10 text-center">
          <h3 className="font-heading text-xl font-semibold">Trenger du noen å snakke med?</h3>
          <p className="mt-3 text-clinic-muted">Ta kontakt, så finner vi en løsning sammen.</p>
          <div className="mt-6">
            <AnimatedButton to="/kontakt">Kontakt oss</AnimatedButton>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
