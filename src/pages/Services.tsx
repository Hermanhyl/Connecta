import { Check, HeartHandshake, Users } from 'lucide-react'
import { services, seo } from '../data/site'
import { Section, Reveal } from '../components/Section'
import { PageHero } from '../components/Decor'
import { ServiceGroupTabs } from '../components/ServiceGroupTabs'
import { CallToAction } from '../components/CallToAction'
import { Seo } from '../components/Seo'

const topicIcons = [HeartHandshake, Users]

export function Services() {
  return (
    <>
      <Seo title={seo['/tjenester'].title} description={seo['/tjenester'].description} path="/tjenester" />
      <PageHero
        eyebrow="Tjenester"
        title="Våre tjenester"
        lead="Hos oss kan du få hjelp til å finne løsninger, enten alene eller sammen med andre."
      />

      <Section className="container-content py-14">
        <div className="mx-auto max-w-3xl space-y-8">
          {services.map((s, idx) => (
            <Reveal key={s.title}>
              <article className="rounded-3xl border border-clinic-line bg-white p-8 shadow-soft sm:p-10">
                <div className="mb-5 flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-clinic-surface font-heading font-semibold text-clinic-blue">
                    {idx + 1}
                  </span>
                  <h2 className="font-heading text-2xl font-semibold sm:text-3xl">{s.title}</h2>
                </div>

                <div className="space-y-4">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="leading-relaxed text-clinic-muted">
                      {p}
                    </p>
                  ))}
                </div>

                {s.groups && <ServiceGroupTabs groups={s.groups} />}

                {/* "Passer for deg som" checklist */}
                {s.forWhom && (
                  <div className="mt-7 rounded-2xl border border-clinic-line bg-clinic-surface/60 p-6">
                    <h3 className="mb-4 font-heading text-base font-semibold text-clinic-blueDark">
                      {s.forWhom.title}
                    </h3>
                    <ul className="space-y-3">
                      {s.forWhom.items.map((item, i) => (
                        <li key={i} className="flex gap-3 leading-snug text-clinic-ink">
                          <Check size={18} className="mt-0.5 shrink-0 text-clinic-teal" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Competence note */}
                {s.note && (
                  <p className="mt-6 border-l-2 border-clinic-sage pl-4 leading-relaxed text-clinic-muted">
                    {s.note}
                  </p>
                )}

                {/* Specific situations */}
                {s.topics && (
                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    {s.topics.map((t, i) => {
                      const Icon = topicIcons[i] ?? HeartHandshake
                      return (
                        <div
                          key={t.heading}
                          className="rounded-2xl border border-clinic-line bg-clinic-bg p-6"
                        >
                          <div className="mb-3 flex items-center gap-3">
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-clinic-surface text-clinic-blue">
                              <Icon size={20} strokeWidth={1.7} />
                            </span>
                            <h3 className="font-heading text-lg font-semibold text-clinic-ink">
                              {t.heading}
                            </h3>
                          </div>
                          <p className="text-sm leading-relaxed text-clinic-muted">{t.text}</p>
                        </div>
                      )
                    })}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>

      </Section>

      <Section className="container-content pb-8 pt-6">
        <CallToAction
          title="Finn ut hvilken tjeneste som passer for deg"
          text="Usikker på hvor du skal begynne? Ta kontakt, så finner vi den rette løsningen sammen."
        />
      </Section>
    </>
  )
}
