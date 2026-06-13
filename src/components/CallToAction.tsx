import { motion } from 'framer-motion'
import { Phone, CalendarCheck } from 'lucide-react'
import { site } from '../data/site'
import { AnimatedButton } from './AnimatedButton'

type Props = {
  title?: string
  text?: string
  ctaLabel?: string
}

/**
 * Prominent, attention-grabbing call-to-action band. Used at the bottom of
 * content pages to clearly invite visitors to book a session or get in touch.
 */
export function CallToAction({
  title = 'Klar til å ta neste steg?',
  text = 'Ta kontakt, så finner vi en løsning sammen — trygt, fleksibelt og tilpasset deg.',
  ctaLabel = 'Bestill time',
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-clinic-blueDark via-clinic-blue to-clinic-blueDark px-6 py-14 text-center shadow-lift sm:px-12 sm:py-16"
    >
      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
      >
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-clinic-teal/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-clinic-gold/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur">
          <CalendarCheck size={16} />
          Terapi og veiledning online
        </span>
        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          {text}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AnimatedButton to="/kontakt" variant="gold" size="lg" className="w-full sm:w-auto">
            <CalendarCheck size={18} />
            {ctaLabel}
          </AnimatedButton>
          <AnimatedButton
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            variant="lightOutline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Phone size={17} />
            Ring {site.phone}
          </AnimatedButton>
        </div>
      </div>
    </motion.div>
  )
}
