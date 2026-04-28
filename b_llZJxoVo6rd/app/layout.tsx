import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vivere aMare | Casa Vacanze Vista Mare a Castelsardo, Sardegna',
  description: 'Il tuo rifugio vista mare a Castelsardo, Sardegna. Appartamento per 4 ospiti con piscina condominiale, aria condizionata e vista mozzafiato sul mare. Prenota direttamente su WhatsApp.',
  keywords: ['Castelsardo', 'Sardegna', 'casa vacanze', 'appartamento mare', 'vacanze Sardegna', 'vista mare'],
  generator: 'v0.app',
  openGraph: {
    title: 'Vivere aMare | Casa Vacanze a Castelsardo',
    description: 'Il tuo rifugio vista mare a Castelsardo, dove ogni risveglio profuma di vacanza.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a365d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className="bg-background">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
