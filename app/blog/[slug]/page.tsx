import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/config/seo'
import { getAllSlugs, getPostBySlug } from '@/services/blog.service'
import { BlogArticleLayout } from '@/components/blog/BlogArticleLayout'
import { BlogReadingProgress } from '@/components/blog/BlogReadingProgress'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildArticleSchema } from '@/lib/schemas/article'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return pageMetadata({ title: 'Article Not Found' })
  }

  return pageMetadata({
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      authors: [post.author],
      ...(post.coverImage && { images: [{ url: post.coverImage, alt: post.title }] }),
    },
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main id="main-content">
      <JsonLd
        schema={buildArticleSchema({
          title: post.title,
          description: post.description,
          url: `/blog/${post.slug}`,
          publishedAt: post.publishedAt,
          ...(post.updatedAt && { updatedAt: post.updatedAt }),
          author: post.author,
          ...(post.coverImage && { imageUrl: post.coverImage }),
        })}
      />
      <BlogReadingProgress />
      <BlogArticleLayout post={post} />
    </main>
  )
}
