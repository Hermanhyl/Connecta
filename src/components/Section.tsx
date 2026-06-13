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
