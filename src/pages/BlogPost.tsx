import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import { posts } from '../data/site'
import { Section, Reveal } from '../components/Section'
import { Blobs } from '../components/Decor'
import { AnimatedButton } from '../components/AnimatedButton'

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

  return (
    <>
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
            <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-clinic-teal">
              <CalendarDays size={15} />
              {post.date}
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <Section className="container-content py-12">
        <Reveal className="prose-clinic mx-auto max-w-2xl">
          {post.body.map((block, i) =>
            block.type === 'h2' ? (
              <h2 key={i}>{block.text}</h2>
            ) : (
              <p key={i}>{block.text}</p>
            ),
          )}
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-2xl rounded-3xl bg-clinic-surface px-8 py-10 text-center">
          <h3 className="font-heading text-xl font-semibold">Trenger du noen å snakke med?</h3>
          <p className="mt-3 text-clinic-muted">
            Ta kontakt, så finner vi en løsning sammen.
          </p>
          <div className="mt-6">
            <AnimatedButton to="/kontakt">Kontakt oss</AnimatedButton>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
