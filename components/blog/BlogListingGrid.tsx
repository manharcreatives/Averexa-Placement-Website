'use client'

import { BlogCard } from '@/components/cards/BlogCard'
import { StaggerContainer } from '@/components/motion/StaggerContainer'
import type { BlogPost } from '@/types/blog'

type BlogListingGridProps = {
  posts: BlogPost[]
}

export function BlogListingGrid({ posts }: BlogListingGridProps) {
  return (
    <StaggerContainer
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      staggerDelay={0.07}
      delayChildren={0.1}
    >
      {posts.map((post) => (
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
  )
}
