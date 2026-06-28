import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import '@/styles/animations.css'
import '@/styles/typography.css'
import { defaultMetadata } from '@/config/seo'
import { fontVariables } from '@/lib/fonts'
import { Providers } from '@/providers/Providers'
import { SkipNavLink } from '@/components/navigation/SkipNavLink'
import { GlobalFloatingUI } from '@/components/global/GlobalFloatingUI'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildOrganizationSchema } from '@/lib/schemas/organization'
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from '@/features/analytics/GoogleTagManager'

export const metadata: Metadata = defaultMetadata

export const viewport: Viewport = {
  themeColor: '#001413',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <head>
        <GoogleTagManager />
        <JsonLd schema={buildOrganizationSchema()} />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        <SkipNavLink />
        <Providers>
          {children}
          <GlobalFloatingUI />
        </Providers>
      </body>
    </html>
  )
}
