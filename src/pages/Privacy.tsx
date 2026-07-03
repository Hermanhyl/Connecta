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
            <p className="mb-10 text-sm text-clinic-muted">{privacy.updated}</p>
          </Reveal>

          <div className="prose-clinic">
            {privacy.sections.map((s) => (
              <Reveal key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
