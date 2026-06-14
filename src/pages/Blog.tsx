import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { posts, seo } from '../data/site'
import { Section, Reveal } from '../components/Section'
import { PageHero } from '../components/Decor'
import { Seo } from '../components/Seo'

export function Blog() {
  return (
    <>
      <Seo title={seo['/blogg'].title} description={seo['/blogg'].description} path="/blogg" />
      <PageHero
        eyebrow="Blogg"
        title="Blogginnlegg"
        lead="Tanker og refleksjoner om psykisk helse, språk og terapi."
      />

      <Section className="container-content py-14">
        <div className="mx-auto grid max-w-4xl gap-7 md:grid-cols-2">
          {posts.map((post) => (
            <Reveal key={post.slug}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-clinic-line bg-white shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-clinic-blue via-clinic-teal to-clinic-sage">
                  <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,white_0,transparent_45%),radial-gradient(circle_at_80%_70%,white_0,transparent_40%)]" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-clinic-tealText">
                    <CalendarDays size={14} />
                    {post.date}
                  </p>
                  <h2 className="mb-3 font-heading text-xl font-semibold leading-snug">
                    {post.title}
                  </h2>
                  <p className="flex-1 leading-relaxed text-clinic-muted">{post.excerpt}</p>
                  <Link
                    to={`/blogg/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-clinic-blue transition-colors hover:text-clinic-blueDark"
                  >
                    Les mer
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
