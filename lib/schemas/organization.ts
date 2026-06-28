import { site } from '@/config/site'

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/logo.svg`,
    description: site.description,
    foundingDate: String(site.foundedYear),
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone,
      email: site.email,
      contactType: 'customer support',
    },
    sameAs: [site.social.linkedin, site.social.twitter],
  }
}
