import { Blobs } from '../components/Decor'
import { AnimatedButton } from '../components/AnimatedButton'

export function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <Blobs />
      <div className="container-content flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-heading text-7xl font-semibold text-clinic-blue">404</p>
        <h1 className="mt-4 font-heading text-3xl font-semibold">Denne siden eksisterer ikke</h1>
        <p className="mt-4 max-w-md text-clinic-muted">
          Det ser ut som linken som peker hit ikke fungerer. Gå tilbake til forsiden, så hjelper vi
          deg videre.
        </p>
        <div className="mt-8">
          <AnimatedButton to="/">Til forsiden</AnimatedButton>
        </div>
      </div>
    </section>
  )
}
