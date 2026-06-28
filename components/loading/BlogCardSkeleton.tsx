export function BlogCardSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden glass border border-white/8 animate-pulse">
      <div className="h-48 bg-white/5" />
      <div className="p-6 space-y-3">
        <div className="h-5 bg-white/5 rounded w-20" />
        <div className="h-6 bg-white/5 rounded w-3/4" />
        <div className="h-4 bg-white/5 rounded w-full" />
        <div className="h-4 bg-white/5 rounded w-2/3" />
      </div>
    </div>
  )
}
