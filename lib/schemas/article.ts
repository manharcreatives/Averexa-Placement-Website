import { site } from '@/config/site'

type ArticleSchemaInput = {
  title: string
  description: string
  url: string
  publishedAt: string
  updatedAt?: string
  author: string
  imageUrl?: string
}

export function buildArticleSchema({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  author,
  imageUrl,
}: ArticleSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${site.url}${url}`,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    ...(imageUrl
      ? {
          image: {
            '@type': 'ImageObject',
            url: imageUrl,
          },
        }
      : {}),
  }
}
