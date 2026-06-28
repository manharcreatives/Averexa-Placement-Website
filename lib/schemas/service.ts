import { site } from '@/config/site'

type ServiceSchemaInput = {
  name: string
  description: string
  url: string
}

export function buildServiceSchema({ name, description, url }: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${site.url}${url}`,
    provider: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
  }
}
