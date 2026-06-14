import { motion } from 'framer-motion'

/** Soft floating gradient blobs used behind heroes. Decorative only. */
export function Blobs({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-clinic-teal/25 blur-3xl"
        animate={{ y: [0, -28, 0], x: [0, 16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-6rem] top-10 h-96 w-96 rounded-full bg-clinic-sage/30 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-5rem] left-1/3 h-72 w-72 rounded-full bg-clinic-gold/15 blur-3xl"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

/** Centered eyebrow + heading + optional lead used at the top of inner pages. */
export function PageHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string
  title: string
  lead?: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-clinic-teal">
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
      {lead && <p className="mt-5 text-lg leading-relaxed text-clinic-muted">{lead}</p>}
    </div>
  )
}

/**
 * Standard top-of-page hero: decorative blobs + centered PageHeading.
 * Shared by every inner page so the markup lives in one place (DRY).
 */
export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string
  title: string
  lead?: string
}) {
  return (
    <section className="relative overflow-hidden pb-6">
      <Blobs />
      <div className="container-content pt-6">
        <PageHeading eyebrow={eyebrow} title={title} lead={lead} />
      </div>
    </section>
  )
}
