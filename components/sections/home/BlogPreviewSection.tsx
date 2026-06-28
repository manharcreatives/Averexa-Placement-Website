import { BlogCard } from '@/components/cards/BlogCard'
import { CTAButton } from '@/components/ui/CTAButton'
import { StaggerContainer } from '@/components/motion/StaggerContainer'
import { getAllPosts } from '@/services/blog.service'

export function BlogPreviewSection() {
  const placeholderPosts = getAllPosts().slice(0, 3)

  return (
    <section id="blog" className="section-padding bg-ink-900">
      <div className="container-site">
        <div className="mb-14 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <span className="eyebrow">Latest Insights</span>
            <h2 className="text-balance max-w-md">
              Resources to{' '}
              <span className="text-gradient">Accelerate Your Search.</span>
            </h2>
          </div>
          <div className="hidden sm:block">
            <CTAButton label="View All Articles" href="/blog" />
          </div>
        </div>

        <StaggerContainer
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.09}
          delayChildren={0.1}
        >
          {placeholderPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.description}
              category={post.category}
              readTime={post.readingTime}
              publishedAt={post.publishedAt}
              {...(post.coverImage && { coverImage: post.coverImage })}
            />
          ))}
        </StaggerContainer>

        <div className="mt-10 flex justify-center sm:hidden">
          <CTAButton label="View All Articles" href="/blog" />
        </div>
      </div>
    </section>
  )
}
