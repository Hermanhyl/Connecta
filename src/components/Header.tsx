import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, site } from '../data/site'
import { Logo } from './Logo'
import { AnimatedButton } from './AnimatedButton'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const wasOpen = useRef(false)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock body scroll when the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Drawer keyboard handling: focus first item, Escape to close, trap Tab inside.
  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const focusables = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
      )
    focusables()[0]?.focus()

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key === 'Tab') {
        const f = focusables()
        if (f.length === 0) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // Return focus to the menu button after the drawer closes.
  useEffect(() => {
    if (wasOpen.current && !open) menuBtnRef.current?.focus()
    wasOpen.current = open
  }, [open])

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-transparent' : 'bg-clinic-blueDark'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`relative z-50 mx-auto flex max-w-content items-center justify-between gap-4 px-5 text-white transition-all duration-300 sm:px-8 ${
          scrolled
            ? 'my-2 rounded-full border border-white/10 bg-clinic-blueDark py-2.5 shadow-card'
            : 'my-0 border border-transparent py-5 sm:py-6'
        }`}
      >
        <Link to="/" aria-label="Connecta forside" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Hovedmeny">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative rounded-full px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-white/70 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-clinic-gold"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:block">
          <AnimatedButton to="/kontakt" variant="gold">
            Bestill time
          </AnimatedButton>
        </div>

        <button
          ref={menuBtnRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 xl:hidden"
          aria-label={open ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={open}
          aria-haspopup="dialog"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-0 z-40 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-clinic-ink/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Meny"
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-1 bg-white p-6 pt-24 shadow-lift"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            >
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-clinic-surface text-clinic-blue'
                        : 'text-clinic-ink hover:bg-clinic-surface'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-4">
                <AnimatedButton to="/kontakt" className="w-full">
                  Bestill time
                </AnimatedButton>
              </div>
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="mt-4 text-center text-base text-clinic-muted"
              >
                Telefon: {site.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
