import { User, Brain, Users } from 'lucide-react'
import type { ServiceTeaser } from '../data/site'

const map = {
  user: User,
  brain: Brain,
  family: Users,
} as const

export function ServiceIcon({ name, size = 26 }: { name: ServiceTeaser['icon']; size?: number }) {
  const Icon = map[name]
  return <Icon size={size} strokeWidth={1.6} />
}
