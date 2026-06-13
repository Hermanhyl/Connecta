import { motion } from 'framer-motion'
import { Brain, Heart, Activity, RefreshCw } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { stagger, fadeUp } from '../lib/motion'

type Node = { label: string; desc: string }
type Props = {
  caption: string
  note: string
  nodes: Node[]
}

const icons: LucideIcon[] = [Brain, Heart, Activity]

/** Visual model of the core CBT idea: thoughts ⟷ feelings ⟷ actions. */
export function CbtTriad({ caption, note, nodes }: Props) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="rounded-3xl border border-clinic-line bg-white p-7 shadow-soft sm:p-9"
    >
      <motion.p
        variants={fadeUp}
        className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-clinic-teal"
      >
        {caption}
      </motion.p>

      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
        {nodes.map((node, i) => {
          const Icon = icons[i] ?? Brain
          return (
            <div key={node.label} className="contents">
              <motion.div
                variants={fadeUp}
                className="flex flex-1 flex-col items-center rounded-2xl bg-clinic-surface/70 px-4 py-6 text-center"
              >
                <span className="mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-clinic-blue text-white">
                  <Icon size={26} strokeWidth={1.7} />
                </span>
                <span className="font-heading text-lg font-semibold text-clinic-ink">
                  {node.label}
                </span>
                <span className="mt-1 text-sm leading-snug text-clinic-muted">{node.desc}</span>
              </motion.div>

              {i < nodes.length - 1 && (
                <motion.span
                  variants={fadeUp}
                  aria-hidden="true"
                  className="mx-auto grid h-9 w-9 shrink-0 rotate-90 place-items-center rounded-full bg-clinic-sage/30 text-clinic-blue sm:rotate-0"
                >
                  <RefreshCw size={16} />
                </motion.span>
              )}
            </div>
          )
        })}
      </div>

      <motion.p variants={fadeUp} className="mt-6 text-center text-sm italic text-clinic-muted">
        {note}
      </motion.p>
    </motion.div>
  )
}
