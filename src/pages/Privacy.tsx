import { Info } from 'lucide-react'
import { privacy, seo } from '../data/site'
import { Section, Reveal } from '../components/Section'
import { PageHero } from '../components/Decor'
import { Seo } from '../components/Seo'

export function Privacy() {
  return (
    <>
      <Seo
        title={seo['/personvern'].title}
        description={seo['/personvern'].description}
        path="/personvern"
      />
      <PageHero eyebrow="Personvern" title={privacy.title} lead={privacy.intro} />

      <Section className="container-content py-12">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="mb-8 text-sm text-clinic-muted">{privacy.updated}</p>
          </Reveal>

          {/* Draft notice — remove once the policy is reviewed/approved */}
          <Reveal className="mb-10 flex items-start gap-3 rounded-2xl border border-clinic-line bg-clinic-surface/60 px-5 py-4">
            <Info size={18} className="mt-0.5 shrink-0 text-clinic-blue" aria-hidden="true" />
            <p className="text-sm text-clinic-muted">{privacy.draftNote}</p>
          </Reveal>

          <div className="prose-clinic">
            {privacy.sections.map((s) => (
              <Reveal key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
