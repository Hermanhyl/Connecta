import { Info } from 'lucide-react'
import { pricing, seo } from '../data/site'
import { Section, Reveal } from '../components/Section'
import { PageHero } from '../components/Decor'
import { CallToAction } from '../components/CallToAction'
import { Seo } from '../components/Seo'

// Parse a Norwegian price/label string ("3.300,-", "4 avtaler") to a number.
const num = (s: string) => parseInt(s.replace(/\D/g, ''), 10) || 0
// Format a number as Norwegian kroner ("300,-", "1.350,-"); empty if not positive.
const kr = (n: number) => (n > 0 ? `${n.toLocaleString('nb-NO').replace(/\s/g, '.')},-` : '')

export function Pricing() {
  return (
    <>
      <Seo title={seo['/priser'].title} description={seo['/priser'].description} path="/priser" />
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

        <div className="mx-auto grid max-w-4xl items-start gap-6 md:grid-cols-2">
          {pricing.packages.map((p) => (
            <Reveal key={p.name}>
              <div className="h-full rounded-3xl border border-clinic-line bg-white p-7 shadow-soft">
                <h3 className="mb-5 font-heading text-2xl font-semibold text-clinic-blueDark">
                  {p.name}
                </h3>
                <div className="space-y-6">
                  {p.tiers.map((tier) => (
                    <div key={tier.duration}>
                      <p className="mb-1 flex items-center gap-2 font-heading text-base font-semibold text-clinic-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-clinic-gold" />
                        {tier.duration}
                      </p>
                      <ul className="divide-y divide-clinic-line">
                        {tier.rows.map((r) => {
                          const saved = kr(num(tier.single) * num(r.label) - num(r.price))
                          return (
                            <li key={r.label} className="flex items-center justify-between py-2.5">
                              <span className="text-sm text-clinic-muted">{r.label}</span>
                              <span className="text-right">
                                <span className="block font-heading text-lg font-semibold text-clinic-ink">
                                  {r.price}
                                </span>
                                {saved && (
                                  <span className="block text-xs font-medium text-clinic-tealText">
                                    Spar {saved}
                                  </span>
                                )}
                              </span>
                            </li>
                          )
                        })}
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
