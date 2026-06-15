type LogoProps = {
  className?: string
}

/** Connecta brand logo (horizontal lockup: gold ring symbol + "CONNECTA"). */
export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/logo_optim.png"
      alt="Connecta"
      className={`h-9 w-auto sm:h-10 ${className}`}
    />
  )
}
