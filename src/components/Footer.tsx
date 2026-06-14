import { Link } from 'react-router-dom'
import { Mail, Phone, Clock } from 'lucide-react'
import { nav, site, contact } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-clinic-line bg-clinic-surface">
      <div className="container-content grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-clinic-muted">
            Terapi og veiledning online. Ta kontakt, så finner vi en løsning sammen.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-clinic-blueDark">
            Sider
          </h3>
          <ul className="space-y-2.5">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-clinic-muted transition-colors hover:text-clinic-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-clinic-blueDark">
            Kontakt
          </h3>
          <ul className="space-y-3 text-sm text-clinic-muted">
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-clinic-teal" />
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-clinic-blue">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-clinic-teal" />
              <a href={`mailto:${site.emails.kjersti}`} className="hover:text-clinic-blue">
                {site.emails.kjersti}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-clinic-teal" />
              <a href={`mailto:${site.emails.amalie}`} className="hover:text-clinic-blue">
                {site.emails.amalie}
              </a>
            </li>
            <li className="flex items-start gap-2.5 pt-1">
              <Clock size={16} className="mt-0.5 text-clinic-teal" />
              <span>
                {contact.openingHours[0].day}–{contact.openingHours[4].day}: 09–19
                <br />
                Helg: stengt
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-clinic-line">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-6 text-xs text-clinic-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Med enerett.</p>
          <p>Terapi og veiledning online</p>
        </div>
      </div>
    </footer>
  )
}
