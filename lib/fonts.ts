import { JetBrains_Mono, Syne, DM_Sans, Cormorant_Garamond, Bebas_Neue } from 'next/font/google'

export const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-editorial',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-condensed',
  display: 'swap',
  weight: ['400'],
})

export const fontVariables = `${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${cormorant.variable} ${bebasNeue.variable}`
