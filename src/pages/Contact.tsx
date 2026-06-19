import { Link } from 'react-router-dom'
import { Mail, Phone, Clock } from 'lucide-react'
import { contact, site, seo } from '../data/site'
import { Section, Reveal } from '../components/Section'
import { PageHero } from '../components/Decor'
import { ContactForm } from '../components/ContactForm'
import { Seo } from '../components/Seo'

export function Contact() {
  return (
    <>
      <Seo title={seo['/kontakt'].title} description={seo['/kontakt'].description} path="/kontakt" />
      <PageHero eyebrow="Kontakt" title="Ta kontakt" lead={contact.blurb} />

      <Section className="container-content py-14">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info column */}
          <Reveal className="space-y-6">
            <div className="rounded-3xl border border-clinic-line bg-white p-7 shadow-soft">
              <h2 className="mb-5 flex items-center gap-2.5 font-heading text-xl font-semibold">
                <Clock size={20} className="text-clinic-teal" />
                Åpningstider
              </h2>
              <ul className="divide-y divide-clinic-line">
                {contact.openingHours.map((o) => (
                  <li key={o.day} className="flex items-center justify-between py-2.5 text-base">
                    <span className="text-clinic-muted">{o.day}</span>
                    <span className="font-medium text-clinic-ink">{o.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-clinic-line bg-clinic-blueDark p-7 text-white">
              <h2 className="mb-5 font-heading text-xl font-semibold text-white">
                Kontaktinformasjon
              </h2>
              <ul className="space-y-4 text-base">
                <li>
                  <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 transition-opacity hover:opacity-80">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                      <Phone size={17} />
                    </span>
                    <span>
                      <span className="block text-white/60">Telefon</span>
                      {site.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.emails.kjersti}`} className="flex items-center gap-3 transition-opacity hover:opacity-80">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                      <Mail size={17} />
                    </span>
                    <span>
                      <span className="block text-white/60">E-post</span>
                      {site.emails.kjersti}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.emails.amalie}`} className="flex items-center gap-3 transition-opacity hover:opacity-80">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                      <Mail size={17} />
                    </span>
                    <span>
                      <span className="block text-white/60">E-post</span>
                      {site.emails.amalie}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal>
            <h2 className="mb-5 font-heading text-2xl font-semibold">Skriv til oss!</h2>
            <ContactForm />
            <p className="mt-4 text-sm text-clinic-muted">
              Når du sender inn skjemaet, behandler vi opplysningene i tråd med vår{' '}
              <Link to="/personvern" className="underline transition-colors hover:text-clinic-blue">
                personvernerklæring
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
