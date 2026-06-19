import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Languages, ChevronDown } from 'lucide-react'
import type { Therapist } from '../data/site'

export function TeamCard({ therapist: t }: { therapist: Therapist }) {
  const [open, setOpen] = useState(false)
  const firstName = t.name.split(' ')[0]
  const [lead, ...rest] = t.paragraphs

  return (
    <article className="flex h-full flex-col rounded-3xl border border-clinic-line bg-white p-8 shadow-soft">
      {/* Header: photo/initials + name + role */}
      <div className="flex items-center gap-4">
        {t.photo ? (
          <img
            src={t.photo}
            alt={`Portrett av ${t.name}`}
            loading="lazy"
            className="h-20 w-20 shrink-0 rounded-2xl object-cover"
          />
        ) : (
          <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-clinic-blue to-clinic-teal font-heading text-2xl font-semibold text-white">
            {t.initials}
          </div>
        )}
        <div>
          <h2 className="font-heading text-2xl font-semibold leading-tight">{t.name}</h2>
          <p className="mt-1 text-base font-medium text-clinic-tealText">{t.role}</p>
        </div>
      </div>

      {/* Specialty tags — scannable overview */}
      <ul className="mt-5 flex flex-wrap gap-2">
        {t.focus.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-clinic-surface px-3 py-1 text-sm font-medium text-clinic-blueDark"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* Lead paragraph + expandable rest */}
      <div className="mt-6 flex-1">
        <p className="leading-relaxed text-clinic-muted">{lead}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pt-4">
                {rest.map((p, i) => (
                  <p key={i} className="leading-relaxed text-clinic-muted">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {rest.length > 0 && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-4 inline-flex cursor-pointer items-center gap-1.5 text-base font-semibold text-clinic-blue transition-colors hover:text-clinic-blueDark"
          >
            {open ? 'Vis mindre' : `Les mer om ${firstName}`}
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={16} aria-hidden="true" />
            </motion.span>
          </button>
        )}
      </div>

      {/* Footer: contact + languages */}
      <div className="mt-6 space-y-2.5 border-t border-clinic-line pt-5 text-base">
        <a
          href={`mailto:${t.email}`}
          className="flex items-center gap-2.5 text-clinic-blue transition-colors hover:text-clinic-blueDark"
        >
          <Mail size={16} aria-hidden="true" />
          {t.email}
        </a>
        <p className="flex items-center gap-2.5 text-clinic-muted">
          <Languages size={16} className="text-clinic-teal" aria-hidden="true" />
          Språk: {t.languages}
        </p>
      </div>
    </article>
  )
}
