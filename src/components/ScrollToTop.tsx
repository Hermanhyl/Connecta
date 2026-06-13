import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to top whenever the route path changes. */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}
