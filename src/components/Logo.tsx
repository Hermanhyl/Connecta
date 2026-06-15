type LogoProps = {
  className?: string
}

/** Connecta brand logo (horizontal lockup: gold ring symbol + "CONNECTA"). */
export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/logo_optim.png"
      alt="Connecta"
      className={`h-10 w-auto sm:h-12 ${className}`}
    />
  )
}
