import { useState } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Testimonial } from '../data/site'

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
  const current = items[index]

  const paginate = (d: number) =>
    setState([(index + d + items.length) % items.length, d])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      paginate(-1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      paginate(1)
    }
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -60) paginate(1)
    else if (info.offset.x > 60) paginate(-1)
  }

  return (
    <div
      className="relative mx-auto max-w-3xl"
      role="group"
      aria-roledescription="karusell"
      aria-label="Omtaler fra klienter"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <motion.div
        className="relative cursor-grab overflow-hidden rounded-3xl border border-clinic-line bg-white p-8 shadow-card active:cursor-grabbing sm:p-12"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        dragSnapToOrigin
        onDragEnd={handleDragEnd}
      >
        <Quote className="mb-6 text-clinic-teal/50" size={44} aria-hidden="true" />
        <div className="min-h-[12rem] sm:min-h-[9rem]" aria-live="polite">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              aria-roledescription="lysbilde"
              aria-label={`Omtale ${index + 1} av ${items.length}`}
            >
              <p className="select-none text-lg italic leading-relaxed text-clinic-ink sm:text-xl">
                “{current.quote}”
              </p>
              <footer className="mt-6 font-semibold text-clinic-blue">— {current.author}</footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Forrige omtale"
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-clinic-line bg-white text-clinic-blueDark transition-colors hover:border-clinic-blue hover:text-clinic-blue"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <div className="flex items-center gap-1">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Gå til omtale ${i + 1}`}
              aria-current={i === index}
              onClick={() => setState([i, i > index ? 1 : -1])}
              className="grid h-6 cursor-pointer place-items-center px-1.5"
            >
              <span
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-7 bg-clinic-blue' : 'w-2.5 bg-clinic-line'
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Neste omtale"
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-clinic-line bg-white text-clinic-blueDark transition-colors hover:border-clinic-blue hover:text-clinic-blue"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
