import { site } from '@/config/site'

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    areaServed: ['United States', 'Canada'],
    priceRange: '$$',
    description: site.description,
  }
}
