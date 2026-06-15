type LogoProps = {
  className?: string
}

/**
 * Connecta brand logo — the gold ring symbol + "CONNECTA" wordmark laid out
 * horizontally. Both are the real brand SVGs (cropped from connecta-logo.svg).
 */
export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/connecta-symbol.svg"
        alt=""
        aria-hidden="true"
        className="h-9 w-auto sm:h-10"
      />
      <img src="/connecta-wordmark.svg" alt="Connecta" className="h-[18px] w-auto sm:h-5" />
    </span>
  )
}
