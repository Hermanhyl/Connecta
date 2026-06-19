import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Brain, MonitorSmartphone, Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Group = { heading: string; items: string[] }

// Icons mapped by order to the three preparation groups.
const icons: LucideIcon[] = [MapPin, Brain, MonitorSmartphone]

/**
 * Tabbed view for the "Onlineterapi" preparation groups. Implements the WAI-ARIA
 * tabs pattern: roving tabindex, arrow/Home/End keys, and aria-controls wiring.
 */
export function ServiceGroupTabs({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const group = groups[active]
  const panelId = 'service-tabpanel'

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    let next: number | null = null
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % groups.length
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + groups.length) % groups.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = groups.length - 1
    if (next !== null) {
      e.preventDefault()
      setActive(next)
      tabRefs.current[next]?.focus()
    }
  }

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-clinic-line bg-clinic-surface/50">
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Forberedelser til onlineterapi"
        className="flex flex-col gap-2 border-b border-clinic-line p-3 sm:flex-row"
      >
        {groups.map((g, i) => {
          const Icon = icons[i] ?? Check
          const isActive = i === active
          return (
            <button
              key={g.heading}
              id={`service-tab-${i}`}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`relative flex flex-1 cursor-pointer items-center gap-3 rounded-2xl px-4 py-3 text-left text-base font-medium transition-colors duration-200 ${
                isActive ? 'text-clinic-blueDark' : 'text-clinic-muted hover:text-clinic-blueDark'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="service-tab-active"
                  className="absolute inset-0 -z-0 rounded-2xl bg-white shadow-soft"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors duration-200 ${
                  isActive ? 'bg-clinic-blue text-white' : 'bg-white text-clinic-blue'
                }`}
              >
                <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="relative z-10 leading-snug">{g.heading}</span>
            </button>
          )
        })}
      </div>

      {/* Panel */}
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`service-tab-${active}`}
        tabIndex={0}
        className="p-6 sm:p-8"
      >
        <AnimatePresence mode="wait">
          <motion.ul
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {group.items.map((item, i) => {
              // First sentence (up to the colon) reads as a mini-heading.
              const [lead, ...rest] = item.split(/:\s(.+)/s)
              const body = rest.join('')
              return (
                <li key={i} className="flex gap-3 rounded-2xl bg-white p-4 shadow-soft">
                  <Check size={18} className="mt-0.5 shrink-0 text-clinic-teal" aria-hidden="true" />
                  <p className="text-base leading-relaxed text-clinic-muted">
                    {body ? (
                      <>
                        <span className="font-semibold text-clinic-ink">{lead}: </span>
                        {body}
                      </>
                    ) : (
                      item
                    )}
                  </p>
                </li>
              )
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  )
}
