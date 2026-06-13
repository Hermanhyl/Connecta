type LogoProps = {
  className?: string
  variant?: 'dark' | 'light'
}

/** Connecta wordmark with a soft ring "C" glyph. */
export function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const text = variant === 'light' ? 'text-white' : 'text-clinic-blueDark'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="32" cy="32" r="22" stroke="#7FB6AE" strokeWidth="2.5" opacity="0.6" />
        <path
          d="M46 22a17 17 0 1 0 0 20"
          stroke="#C8A35B"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>
      <span className={`font-heading text-xl font-semibold tracking-wide ${text}`}>
        CONNECTA
      </span>
    </span>
  )
}
