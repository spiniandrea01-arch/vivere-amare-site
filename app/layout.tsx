import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vivere aMare - Castelsardo',
  description: 'Appartamento vista mare a Castelsardo. Prenotazioni dirette via WhatsApp o tramite Airbnb.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="it"><body>{children}</body></html>
}
