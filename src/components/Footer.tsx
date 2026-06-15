import { Link } from 'react-router-dom'
import { Mail, Phone, Clock, Code2, ArrowUpRight } from 'lucide-react'
import { nav, site, contact } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="mt-24 bg-clinic-ink text-white/70">
      <div className="container-content grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Terapi og veiledning online. Ta kontakt, så finner vi en løsning sammen.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Sider
          </h3>
          <ul className="space-y-2.5">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Kontakt
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-clinic-teal" aria-hidden="true" />
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-clinic-teal" aria-hidden="true" />
              <a href={`mailto:${site.emails.kjersti}`} className="transition-colors hover:text-white">
                {site.emails.kjersti}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-clinic-teal" aria-hidden="true" />
              <a href={`mailto:${site.emails.amalie}`} className="transition-colors hover:text-white">
                {site.emails.amalie}
              </a>
            </li>
            <li className="flex items-start gap-2.5 pt-1">
              <Clock size={16} className="mt-0.5 text-clinic-teal" aria-hidden="true" />
              <span>
                {contact.openingHours[0].day}–{contact.openingHours[4].day}: 09–19
                <br />
                Helg: stengt
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>© {new Date().getFullYear()} {site.name}. Med enerett.</p>
            <Link to="/personvern" className="transition-colors hover:text-white">
              Personvern
            </Link>
          </div>
          {/* Developer credit — TEMPORARY URL, swap when the real domain is ready */}
          <a
            href="https://hyllanddesignogutvikling.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Utbedret av Hylland Design & Utvikling (åpnes i ny fane)"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            <Code2 size={14} className="text-clinic-teal" aria-hidden="true" />
            <span>
              Utbedret av{' '}
              <span className="font-semibold text-white">Hylland Design &amp; Utvikling</span>
            </span>
            <ArrowUpRight
              size={13}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
