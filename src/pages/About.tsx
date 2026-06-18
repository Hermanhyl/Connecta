import { team, seo } from '../data/site'
import { Section, Reveal } from '../components/Section'
import { PageHero } from '../components/Decor'
import { CallToAction } from '../components/CallToAction'
import { TeamCard } from '../components/TeamCard'
import { Seo } from '../components/Seo'

export function About() {
  return (
    <>
      <Seo title={seo['/om-oss'].title} description={seo['/om-oss'].description} path="/om-oss" />
      <PageHero
        eyebrow="Om oss"
        title="Terapeutene"
        lead="Vi har lang erfaring som terapeut og veileder i offentlig og privat sektor, og bistår gjerne med terapi for enkeltpersoner, familier, par og bedrifter."
      />

      <Section className="container-content py-14">
        <div className="mx-auto grid max-w-4xl items-stretch gap-8 md:grid-cols-2">
          {team.map((t) => (
            <Reveal key={t.name} className="h-full">
              <TeamCard therapist={t} />
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
