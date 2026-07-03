import type { Metadata, Viewport } from 'next'
import Footer from '@/components/Footer'
import TopNavBar from '@/components/TopNavBar'
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-hanken-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KINETIC CORE | MM Printing & Mobile',
  description: 'High-speed industrial printing solutions designed for technical mastery and maximum output. We bridge the gap between digital intent and physical reality.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#121416',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-[#121416] text-[#e2e2e5] selection:bg-[#f26419] selection:text-[#4e1900] font-body-md overflow-x-hidden">
        <TopNavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
