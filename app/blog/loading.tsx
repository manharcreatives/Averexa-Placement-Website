import { BlogCardSkeleton } from '@/components/loading/BlogCardSkeleton'

export default function BlogLoading() {
  return (
    <main id="main-content">
      <section className="section-padding pt-32 bg-ink-900">
        <div className="container-site">
          <div className="mb-14 flex flex-col gap-4 max-w-2xl">
            <div className="h-4 w-24 animate-pulse rounded bg-white/5" />
            <div className="h-12 w-3/4 animate-pulse rounded bg-white/5" />
            <div className="h-5 w-full animate-pulse rounded bg-white/5" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
