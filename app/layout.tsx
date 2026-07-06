import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import CookieConsent from '@/components/cookie-consent'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ETON Yayıncılık — Kaliteyi Sayfadan Sayfaya Taşıyoruz',
  description:
    'ETON Yayıncılık, edebiyat, roman, tarih ve çocuk kitapları alanlarında özgün ve çeviri eserler yayınlayan Türkiye\'nin prestijli yayınevlerinden biridir.',
  generator: 'v0.app',
  keywords: ['ETON Yayıncılık', 'Türk yayınevi', 'roman', 'kitap', 'edebiyat'],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0d0f1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        <CookieConsent />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
