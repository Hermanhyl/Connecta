import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Globe, HeartHandshake } from 'lucide-react'
import { home, serviceTeasers, testimonials, faq } from '../data/site'
import { Section, Reveal } from '../components/Section'
import { Blobs } from '../components/Decor'
import { AnimatedButton } from '../components/AnimatedButton'
import { ServiceIcon } from '../components/ServiceIcon'
import { TestimonialCarousel } from '../components/TestimonialCarousel'
import { FAQAccordion } from '../components/FAQAccordion'
import { CallToAction } from '../components/CallToAction'
import { fadeUp, stagger } from '../lib/motion'

const titleWords = home.heroTitle.split(' ')

const highlights = [
  { icon: Globe, title: 'Online & fleksibelt', text: 'Delta hvor som helst — du sparer reise og velger fagperson fritt.' },
  { icon: ShieldCheck, title: 'Trygt & sikkert', text: 'Alle timer foregår på en sikker plattform i tråd med GDPR.' },
  { icon: HeartHandshake, title: 'Erfarne terapeuter', text: 'Lang erfaring som terapeut og veileder i offentlig og privat sektor.' },
]

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Blobs />
        <div className="container-content pb-20 pt-10 sm:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-block rounded-full border border-clinic-line bg-white/70 px-4 py-1.5 text-sm font-medium text-clinic-blue backdrop-blur"
            >
              Connecta — terapi og veiledning
            </motion.p>

            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="show"
              className="font-heading text-5xl font-semibold leading-[1.08] text-clinic-ink sm:text-6xl"
            >
              {titleWords.map((word, i) => (
                <motion.span key={i} variants={fadeUp} className="inline-block">
                  {word}
                  {i < titleWords.length - 1 && ' '}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-clinic-muted"
            >
              {home.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-3"
            >
              <AnimatedButton to="/kontakt">Kontakt oss</AnimatedButton>
              <AnimatedButton to="/tjenester" variant="secondary">
                Se våre tjenester
              </AnimatedButton>
            </motion.div>
          </div>

          {/* Highlights */}
          <Section className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
            {highlights.map((h) => (
              <Reveal
                key={h.title}
                className="rounded-2xl border border-clinic-line bg-white/80 p-6 text-center shadow-soft backdrop-blur"
              >
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl bg-clinic-surface text-clinic-blue">
                  <h.icon size={22} strokeWidth={1.7} />
                </div>
                <h3 className="font-heading text-lg font-semibold">{h.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-clinic-muted">{h.text}</p>
              </Reveal>
            ))}
          </Section>
        </div>
      </section>

      {/* Services */}
      <Section className="container-content py-16">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-clinic-teal">
            Tjenester
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Hvordan vi kan hjelpe deg</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {serviceTeasers.map((s) => (
            <Reveal key={s.title}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col rounded-3xl border border-clinic-line bg-white p-7 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-clinic-surface text-clinic-blue transition-colors group-hover:bg-clinic-blue group-hover:text-white">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-semibold">{s.title}</h3>
                <p className="flex-1 leading-relaxed text-clinic-muted">{s.text}</p>
                <Link
                  to="/tjenester"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-clinic-blue transition-colors hover:text-clinic-blueDark"
                >
                  Les mer
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Method band */}
      <Section className="container-content py-12">
        <Reveal className="overflow-hidden rounded-3xl bg-clinic-blueDark px-8 py-14 text-center text-white sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            Kognitiv atferdsterapi — dokumentert og skreddersydd
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/80">
            Terapien tilpasses dine behov med grundig kartlegging, analyse, behandling og
            oppfølging. Målet er ikke en kortsiktig løsning, men varig forandring og forbedring i
            livskvaliteten.
          </p>
          <div className="mt-8">
            <AnimatedButton to="/behandlingsmetode" variant="secondary">
              Om behandlingsmetoden
            </AnimatedButton>
          </div>
        </Reveal>
      </Section>

      {/* Testimonials */}
      <Section className="container-content py-16">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-clinic-teal">
            Hva sier andre om oss?
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Ord fra dem vi har hjulpet</h2>
        </Reveal>
        <Reveal>
          <TestimonialCarousel items={testimonials} />
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section className="container-content py-16">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-clinic-teal">
            Ofte stilte spørsmål
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Spørsmål og svar</h2>
          <p className="mx-auto mt-4 max-w-xl text-clinic-muted">
            Har du et spørsmål som ikke besvares her, kan du sende det gjennom kontaktskjemaet.
          </p>
        </Reveal>
        <Reveal>
          <FAQAccordion items={faq} />
        </Reveal>
      </Section>

      {/* Closing CTA */}
      <Section className="container-content pb-8">
        <CallToAction />
      </Section>
    </>
  )
}
