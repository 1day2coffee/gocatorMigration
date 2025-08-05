import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gocator Migration',
  description: 'Modern web application with Next.js 15.3, React 18.2, TypeScript 5, and Supabase',
  keywords: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
  authors: [{ name: 'Gocator Migration Team' }],
  creator: 'Gocator Migration Team',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://gocator-migration.vercel.app',
    title: 'Gocator Migration',
    description: 'Modern web application with Next.js 15.3, React 18.2, TypeScript 5, and Supabase',
    siteName: 'Gocator Migration',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gocator Migration',
    description: 'Modern web application with Next.js 15.3, React 18.2, TypeScript 5, and Supabase',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
} 