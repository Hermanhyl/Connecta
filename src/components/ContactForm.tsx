import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { site } from '../data/site'

type Errors = { navn?: string; email?: string; melding?: string }
type Status = 'idle' | 'sending' | 'sent' | 'error'

// Must match the hidden static form in index.html that Netlify detects at build.
const FORM_NAME = 'kontakt'

export function ContactForm() {
  const [values, setValues] = useState({ navn: '', email: '', melding: '' })
  const [botField, setBotField] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  function validate(): Errors {
    const e: Errors = {}
    if (!values.navn.trim()) e.navn = 'Vennligst skriv inn navnet ditt.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = 'Vennligst skriv inn en gyldig e-postadresse.'
    if (!values.melding.trim()) e.melding = 'Vennligst skriv en melding.'
    return e
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return

    setStatus('sending')
    try {
      const body = new URLSearchParams({
        'form-name': FORM_NAME,
        'bot-field': botField,
        navn: values.navn,
        email: values.email,
        melding: values.melding,
      }).toString()
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!res.ok) throw new Error(`Uventet status ${res.status}`)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full rounded-xl border border-clinic-line bg-white px-4 py-3 text-clinic-ink outline-none transition-colors placeholder:text-clinic-muted/60 focus:border-clinic-blue focus:ring-2 focus:ring-clinic-blue/20'

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        role="status"
        className="flex flex-col items-center gap-4 rounded-3xl border border-clinic-line bg-white p-10 text-center shadow-soft"
      >
        <CheckCircle2 className="text-clinic-teal" size={48} aria-hidden="true" />
        <h3 className="text-xl font-semibold">Takk for din henvendelse!</h3>
        <p className="text-clinic-muted">
          Vi har mottatt meldingen din og tar kontakt så snart vi kan.
        </p>
      </motion.div>
    )
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-3xl border border-clinic-line bg-white p-6 shadow-soft sm:p-8"
    >
      {/* Netlify form identifier + honeypot (hidden from real users) */}
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Ikke fyll ut dette feltet:
          <input
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
          />
        </label>
      </p>

      <p className="text-sm text-clinic-muted">
        Felt merket med <span className="text-base font-bold text-red-600">*</span> er påkrevd.
      </p>
      <div>
        <label htmlFor="navn" className="mb-1.5 block text-sm font-medium text-clinic-ink">
          Navn <span className="align-middle text-lg font-bold leading-none text-red-600" aria-hidden="true">*</span>
        </label>
        <input
          id="navn"
          name="navn"
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
          name="email"
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
          name="melding"
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

      {status === 'error' && (
        <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>
            Noe gikk galt under sendingen. Prøv igjen, eller send oss en e-post direkte på{' '}
            <a href={`mailto:${site.emails.kjersti}`} className="font-semibold underline">
              {site.emails.kjersti}
            </a>
            .
          </span>
        </p>
      )}

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ y: status === 'sending' ? 0 : -2 }}
        whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-clinic-blue px-7 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-clinic-blueDark disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send size={16} aria-hidden="true" />
        {status === 'sending' ? 'Sender …' : 'Send'}
      </motion.button>
    </form>
  )
}
