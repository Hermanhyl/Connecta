import { Component, type ReactNode } from 'react'
import { AnimatedButton } from './AnimatedButton'

type Props = { children: ReactNode }
type State = { hasError: boolean }

/**
 * Catches render errors anywhere in the page tree and shows a friendly
 * fallback instead of a blank white screen.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    // Surface for debugging; in production this could report to a logger.
    console.error('Uncaught UI error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container-content grid min-h-[70vh] place-items-center py-20 text-center">
          <div>
            <h1 className="font-heading text-3xl font-semibold">Noe gikk galt</h1>
            <p className="mt-4 text-clinic-muted">
              Beklager, en uventet feil oppstod. Prøv å laste siden på nytt.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <AnimatedButton onClick={() => window.location.reload()}>
                Last inn på nytt
              </AnimatedButton>
              <AnimatedButton to="/" variant="secondary">
                Til forsiden
              </AnimatedButton>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
