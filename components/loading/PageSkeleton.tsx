export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-ink-900 animate-pulse" aria-label="Loading page...">
      {/* Nav skeleton */}
      <div className="h-16 bg-white/5 w-full" />
      {/* Hero skeleton */}
      <div className="h-[60vh] bg-white/3 w-full" />
      {/* Content skeleton */}
      <div className="container-site py-16 space-y-6">
        <div className="h-4 bg-white/5 rounded w-24" />
        <div className="h-10 bg-white/5 rounded w-1/2" />
        <div className="h-4 bg-white/5 rounded w-3/4" />
        <div className="h-4 bg-white/5 rounded w-2/3" />
      </div>
    </div>
  )
}
