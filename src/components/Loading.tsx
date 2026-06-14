/** Branded loading state used as the Suspense fallback for lazy routes. */
export function Loading() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-clinic-line border-t-clinic-blue" />
      <span className="sr-only">Laster …</span>
    </div>
  )
}
