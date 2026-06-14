import { Info } from 'lucide-react'
import { pricing } from '../data/site'
import { Section, Reveal } from '../components/Section'
import { PageHero } from '../components/Decor'
import { CallToAction } from '../components/CallToAction'

export function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Priser"
        title="Priser"
        lead="Oversikt over priser for individualterapi, familieveiledning og terapipakker."
      />

      {/* Single sessions */}
      <Section className="container-content py-12">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {pricing.sessions.map((tbl) => (
            <Reveal key={tbl.name}>
              <div className="h-full rounded-3xl border border-clinic-line bg-white p-7 shadow-soft">
                <h2 className="mb-5 font-heading text-2xl font-semibold text-clinic-blueDark">
                  {tbl.name}
                </h2>
                <ul className="divide-y divide-clinic-line">
                  {tbl.rows.map((r) => (
                    <li key={r.label} className="flex items-center justify-between gap-4 py-3">
                      <span className="text-clinic-muted">{r.label}</span>
                      <span className="shrink-0 font-heading text-lg font-semibold text-clinic-ink">
                        {r.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-6 flex max-w-4xl items-start gap-3 rounded-2xl bg-clinic-surface px-5 py-4 text-sm text-clinic-muted">
          <Info size={18} className="mt-0.5 shrink-0 text-clinic-blue" />
          <p>{pricing.travelNote}</p>
        </Reveal>
      </Section>

      {/* Packages */}
      <Section className="container-content py-12">
        <Reveal className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Terapipakker</h2>
        </Reveal>

        <div className="mx-auto max-w-4xl space-y-8">
          {pricing.packages.map((p) => (
            <Reveal key={p.name}>
              <div>
                <h3 className="mb-4 font-heading text-xl font-semibold text-clinic-blueDark">
                  {p.name}
                </h3>
                <div className="grid gap-5 sm:grid-cols-3">
                  {p.tiers.map((tier) => (
                    <div
                      key={tier.duration}
                      className="rounded-3xl border border-clinic-line bg-white p-6 shadow-soft"
                    >
                      <p className="mb-4 font-heading text-lg font-semibold">{tier.duration}</p>
                      <ul className="space-y-3">
                        {tier.rows.map((r) => (
                          <li key={r.label} className="flex items-center justify-between gap-3">
                            <span className="text-sm text-clinic-muted">{r.label}</span>
                            <span className="font-semibold text-clinic-ink">{r.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Explainer + cancellation */}
      <Section className="container-content py-12">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-clinic-line bg-clinic-surface/60 p-7">
            <h3 className="mb-3 font-heading text-xl font-semibold">
              {pricing.packageExplainerTitle}
            </h3>
            <p className="leading-relaxed text-clinic-muted">{pricing.packageExplainer}</p>
          </Reveal>
          <Reveal className="rounded-3xl border border-clinic-line bg-clinic-surface/60 p-7">
            <h3 className="mb-3 font-heading text-xl font-semibold">{pricing.cancellationTitle}</h3>
            <p className="leading-relaxed text-clinic-muted">{pricing.cancellation}</p>
          </Reveal>
        </div>

      </Section>

      <Section className="container-content pb-8 pt-4">
        <CallToAction
          title="Klar til å booke din første time?"
          text="Velg en enkelttime eller et pakkeforløp. Ta kontakt, så hjelper vi deg i gang."
        />
      </Section>
    </>
  )
}
