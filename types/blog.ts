export type BlogPost = {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  author: string
  category: string
  tags: string[]
  readingTime: number
  featured?: boolean
  coverImage?: string
  coverImageAlt?: string
}

export type BlogPostWithContent = BlogPost & {
  content: string
}
