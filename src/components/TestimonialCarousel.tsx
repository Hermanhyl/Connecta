import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Testimonial } from '../data/site'

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
  const current = items[index]

  const paginate = (d: number) =>
    setState([(index + d + items.length) % items.length, d])

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-3xl border border-clinic-line bg-white p-8 shadow-card sm:p-12">
        <Quote className="mb-6 text-clinic-teal/50" size={44} />
        <div className="min-h-[12rem] sm:min-h-[9rem]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-lg italic leading-relaxed text-clinic-ink sm:text-xl">
                “{current.quote}”
              </p>
              <footer className="mt-6 font-semibold text-clinic-blue">
                — {current.author}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Forrige"
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-clinic-line bg-white text-clinic-blueDark transition-colors hover:border-clinic-blue hover:text-clinic-blue"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Gå til omtale ${i + 1}`}
              onClick={() => setState([i, i > index ? 1 : -1])}
              className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                i === index ? 'w-7 bg-clinic-blue' : 'w-2.5 bg-clinic-line hover:bg-clinic-sage'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Neste"
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-clinic-line bg-white text-clinic-blueDark transition-colors hover:border-clinic-blue hover:text-clinic-blue"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
