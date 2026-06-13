import { motion } from 'framer-motion'
import { Mail, Languages } from 'lucide-react'
import { team } from '../data/site'
import { Section, Reveal } from '../components/Section'
import { Blobs, PageHeading } from '../components/Decor'
import { CallToAction } from '../components/CallToAction'

export function About() {
  return (
    <>
      <section className="relative overflow-hidden pb-6">
        <Blobs />
        <div className="container-content pt-6">
          <PageHeading
            eyebrow="Om oss"
            title="Terapeutene"
            lead="Vi har lang erfaring som terapeut og veileder i offentlig og privat sektor, og bistår gjerne med terapi for enkeltpersoner, familier, par og bedrifter."
          />
        </div>
      </section>

      <Section className="container-content py-14">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {team.map((t) => (
            <Reveal key={t.name}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="flex h-full flex-col rounded-3xl border border-clinic-line bg-white p-8 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-clinic-blue to-clinic-teal font-heading text-xl font-semibold text-white">
                    {t.initials}
                  </div>
                  <h2 className="font-heading text-2xl font-semibold">{t.name}</h2>
                </div>

                <div className="flex-1 space-y-4">
                  {t.paragraphs.map((p, i) => (
                    <p key={i} className="leading-relaxed text-clinic-muted">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mt-6 space-y-2.5 border-t border-clinic-line pt-5 text-sm">
                  <a
                    href={`mailto:${t.email}`}
                    className="flex items-center gap-2.5 text-clinic-blue transition-colors hover:text-clinic-blueDark"
                  >
                    <Mail size={16} />
                    {t.email}
                  </a>
                  <p className="flex items-center gap-2.5 text-clinic-muted">
                    <Languages size={16} className="text-clinic-teal" />
                    Språk: {t.languages}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

      </Section>

      <Section className="container-content pb-8">
        <CallToAction
          title="Ta kontakt med oss"
          text="Lurer du på om vi er rett match for deg? Send oss en melding, så svarer vi så snart vi kan."
          ctaLabel="Ta kontakt"
        />
      </Section>
    </>
  )
}
