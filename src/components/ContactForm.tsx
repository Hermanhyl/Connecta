import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { site } from '../data/site'

type Errors = { navn?: string; email?: string; melding?: string }

export function ContactForm() {
  const [values, setValues] = useState({ navn: '', email: '', melding: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function validate(): Errors {
    const e: Errors = {}
    if (!values.navn.trim()) e.navn = 'Vennligst skriv inn navnet ditt.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = 'Vennligst skriv inn en gyldig e-postadresse.'
    if (!values.melding.trim()) e.melding = 'Vennligst skriv en melding.'
    return e
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return

    // No backend — open the visitor's mail client with the message prefilled.
    const subject = encodeURIComponent(`Henvendelse fra ${values.navn}`)
    const body = encodeURIComponent(`${values.melding}\n\n— ${values.navn} (${values.email})`)
    window.location.href = `mailto:${site.emails.kjersti}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const field =
    'w-full rounded-xl border border-clinic-line bg-white px-4 py-3 text-clinic-ink outline-none transition-colors placeholder:text-clinic-muted/60 focus:border-clinic-blue focus:ring-2 focus:ring-clinic-blue/20'

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-3xl border border-clinic-line bg-white p-10 text-center shadow-soft"
      >
        <CheckCircle2 className="text-clinic-teal" size={48} />
        <h3 className="text-xl font-semibold">Takk for din henvendelse!</h3>
        <p className="text-clinic-muted">
          E-postprogrammet ditt skal ha åpnet med meldingen klar til å sendes. Vi tar kontakt så
          snart vi kan.
        </p>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-3xl border border-clinic-line bg-white p-6 shadow-soft sm:p-8"
    >
      <p className="text-sm text-clinic-muted">
        Felt merket med <span className="text-base font-bold text-red-600">*</span> er påkrevd.
      </p>
      <div>
        <label htmlFor="navn" className="mb-1.5 block text-sm font-medium text-clinic-ink">
          Navn <span className="align-middle text-lg font-bold leading-none text-red-600" aria-hidden="true">*</span>
        </label>
        <input
          id="navn"
          type="text"
          placeholder="Ola Nordmann"
          className={field}
          value={values.navn}
          onChange={(e) => setValues({ ...values, navn: e.target.value })}
          aria-required="true"
          aria-invalid={!!errors.navn}
          aria-describedby={errors.navn ? 'navn-error' : undefined}
        />
        {errors.navn && (
          <p id="navn-error" role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.navn}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-clinic-ink">
          E-post <span className="align-middle text-lg font-bold leading-none text-red-600" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="navn@epost.no"
          className={field}
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="melding" className="mb-1.5 block text-sm font-medium text-clinic-ink">
          Melding <span className="align-middle text-lg font-bold leading-none text-red-600" aria-hidden="true">*</span>
        </label>
        <textarea
          id="melding"
          rows={5}
          placeholder="Skriv noen ord om hva du ønsker hjelp med …"
          className={`${field} resize-y`}
          value={values.melding}
          onChange={(e) => setValues({ ...values, melding: e.target.value })}
          aria-required="true"
          aria-invalid={!!errors.melding}
          aria-describedby={errors.melding ? 'melding-error' : undefined}
        />
        {errors.melding && (
          <p id="melding-error" role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.melding}
          </p>
        )}
      </div>

      <motion.button
        type="submit"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-clinic-blue px-7 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-clinic-blueDark"
      >
        <Send size={16} />
        Send
      </motion.button>
    </form>
  )
}
