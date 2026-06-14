import { motion } from 'framer-motion'
import { Check, Quote } from 'lucide-react'
import { method, seo } from '../data/site'
import { Section, Reveal } from '../components/Section'
import { PageHero } from '../components/Decor'
import { CbtTriad } from '../components/CbtTriad'
import { CallToAction } from '../components/CallToAction'
import { Seo } from '../components/Seo'
import { fadeUp } from '../lib/motion'

export function Method() {
  return (
    <>
      <Seo
        title={seo['/behandlingsmetode'].title}
        description={seo['/behandlingsmetode'].description}
        path="/behandlingsmetode"
      />
      <PageHero eyebrow="Behandlingsmetode" title="Kognitiv atferdsterapi" lead={method.lead} />

      {/* Kort fortalt — quick takeaways */}
      <Section className="container-content py-10">
        <Reveal className="mx-auto max-w-3xl rounded-3xl border border-clinic-line bg-clinic-surface/60 p-7 sm:p-8">
          <h2 className="mb-5 font-heading text-lg font-semibold text-clinic-blueDark">
            Kort fortalt
          </h2>
          <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {method.summary.map((point) => (
              <li key={point} className="flex gap-2.5 leading-snug text-clinic-ink">
                <Check size={18} className="mt-0.5 shrink-0 text-clinic-teal" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Visual model */}
      <Section className="container-content pb-6">
        <div className="mx-auto max-w-3xl">
          <CbtTriad
            caption={method.triad.caption}
            note={method.triad.note}
            nodes={method.triad.nodes}
          />
        </div>
      </Section>

      {/* Explanation — split into short titled sections */}
      <Section className="container-content py-8">
        <div className="mx-auto max-w-2xl space-y-10">
          {method.sections.map((s) => (
            <Reveal key={s.heading}>
              <article>
                <h2 className="mb-3 flex items-baseline gap-3 font-heading text-xl font-semibold text-clinic-ink sm:text-2xl">
                  <span className="h-1.5 w-1.5 shrink-0 translate-y-[-0.35em] rounded-full bg-clinic-gold" />
                  {s.heading}
                </h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="leading-[1.8] text-clinic-muted">
                    {p}
                  </p>
                ))}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pull quote */}
      <Section className="container-content py-6">
        <Reveal className="mx-auto max-w-3xl">
          <figure className="relative overflow-hidden rounded-3xl bg-clinic-blueDark px-8 py-12 text-center sm:px-14">
            <Quote className="mx-auto mb-5 text-clinic-gold" size={40} />
            <blockquote className="font-heading text-xl leading-relaxed text-white sm:text-2xl">
              {method.pullQuote}
            </blockquote>
          </figure>
        </Reveal>
      </Section>

      {/* Process timeline */}
      <Section className="container-content pb-2 pt-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">{method.processTitle}</h2>
          <p className="mt-5 leading-relaxed text-clinic-muted">{method.processLead}</p>
        </Reveal>

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {method.phases.map((phase, i) => (
            <motion.div
              key={phase.name}
              variants={fadeUp}
              className="relative rounded-3xl border border-clinic-line bg-white p-7 shadow-soft"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-clinic-blue font-heading text-lg font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="font-heading text-xl font-semibold">{phase.name}</h3>
              </div>
              <p className="leading-relaxed text-clinic-muted">{phase.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="container-content py-12">
        <Reveal className="mx-auto max-w-3xl rounded-3xl bg-clinic-surface px-8 py-12 text-center">
          <p className="font-heading text-xl leading-relaxed text-clinic-ink sm:text-2xl">
            {method.outro}
          </p>
        </Reveal>
      </Section>

      <Section className="container-content pb-8">
        <CallToAction
          title="Lurer du på om dette er noe for deg?"
          text="Vi svarer gjerne på spørsmål om metoden og hvordan et forløp kan se ut for nettopp deg."
          ctaLabel="Ta kontakt"
        />
      </Section>
    </>
  )
}
