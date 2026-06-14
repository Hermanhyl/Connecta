import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, stagger } from '../lib/motion'

type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
}

/** Scroll-reveal wrapper: children animate in once when scrolled into view. */
export function Section({ children, className = '', id }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.section>
  )
}

/** A single revealing item (use inside <Section>). */
export function Reveal({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}

/**
 * Centered section header (eyebrow + title + optional lead).
 * Use inside a <Section> so it reveals on scroll. Keeps the repeated
 * eyebrow/heading markup in one place (DRY).
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  className = 'mb-12',
}: {
  eyebrow?: string
  title: string
  lead?: string
  className?: string
}) {
  return (
    <Reveal className={`text-center ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-clinic-tealText">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {lead && <p className="mx-auto mt-4 max-w-xl text-clinic-muted">{lead}</p>}
    </Reveal>
  )
}
