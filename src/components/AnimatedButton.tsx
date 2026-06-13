import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'gold' | 'lightOutline'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-clinic-blue text-white hover:bg-clinic-blueDark shadow-soft focus-visible:ring-clinic-blue focus-visible:ring-offset-clinic-bg',
  secondary:
    'bg-white text-clinic-blueDark border border-clinic-line hover:border-clinic-blue hover:text-clinic-blue focus-visible:ring-clinic-blue focus-visible:ring-offset-clinic-bg',
  ghost: 'text-clinic-blueDark hover:text-clinic-blue focus-visible:ring-clinic-blue focus-visible:ring-offset-clinic-bg',
  // Rich metallic gold (see .btn-gold in index.css) — the primary CTA, eye-catching with a shine sweep.
  gold: 'btn-gold text-clinic-ink focus-visible:ring-clinic-gold focus-visible:ring-offset-clinic-blueDark',
  // White outline — secondary action on dark bands.
  lightOutline:
    'border border-white/40 text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-clinic-blueDark',
}

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type Props = CommonProps &
  (
    | { to: string; href?: never; onClick?: never }
    | { href: string; to?: never; onClick?: never }
    | { onClick: () => void; to?: never; href?: never }
  )

export function AnimatedButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: Props) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`
  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 20 },
  }

  if ('to' in rest && rest.to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={rest.to} className={cls}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if ('href' in rest && rest.href) {
    return (
      <motion.a href={rest.href} className={cls} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={'onClick' in rest ? rest.onClick : undefined}
      className={cls}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
