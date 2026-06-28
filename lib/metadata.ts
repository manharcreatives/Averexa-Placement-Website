import type { Metadata } from 'next'
import { site } from '@/config/site'

type PageMetadataOptions = {
  title: string
  description?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  ogImage = '/og-image.jpg',
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const resolvedTitle = `${title} | ${site.name}`
  const resolvedDescription = description ?? site.description

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: site.url,
      siteName: site.name,
      type: 'website',
      locale: 'en_GB',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
      images: [ogImage],
    },
  }
}
