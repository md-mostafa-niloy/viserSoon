import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: '#10b981',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://visernic.com'),
  title: {
    default: 'Visernic Limited - Professional Web Solutions & Software Development',
    template: '%s | Visernic Limited'
  },
  description: 'Visernic Limited offers cutting-edge web development, software solutions, and IT services. We are launching soon to revolutionize your digital experience.',
  keywords: [
    'Visernic', 
    'Visernic Limited', 
    'Web Development', 
    'Software Company', 
    'IT Services', 
    'App Development', 
    'Digital Marketing', 
    'SEO Expert', 
    'Bangladesh', 
    'UK', 
    'Nazipur', 
    'Naogaon'
  ],
  authors: [{ name: 'Visernic Limited', url: 'https://visernic.com' }],
  creator: 'Visernic Limited',
  publisher: 'Visernic Limited',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://visernic.com',
    title: 'Visernic Limited - Coming Soon',
    description: 'Something amazing is coming. Visernic Limited is getting ready to launch innovative web and software solutions.',
    siteName: 'Visernic Limited',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Visernic Limited Coming Soon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visernic Limited - Coming Soon',
    description: 'Innovation and excellence in web solutions. Stay tuned for Visernic Limited.',
    images: ['/og-image.png'],
    creator: '@visernic',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://visernic.com',
  },
  other: {
    "DC.title": "Visernic Limited - Professional Web Solutions & Software Development",
    "DC.creator": "Visernic Limited",
    "DC.description": "Visernic Limited offers cutting-edge web development, software solutions, and IT services.",
    "DC.publisher": "Visernic Limited",
    "DC.date": "2024-02-05",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.identifier": "https://visernic.com",
    "DC.language": "en",
    "DC.coverage": "World",
    "DC.rights": "© 2024 Visernic Limited",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Visernic Limited",
    "url": "https://visernic.com",
    "logo": "https://visernic.com/visernic-logo.png",
    "description": "Professional Web Solutions & Software Development Company",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nazipur",
      "addressRegion": "Naogaon",
      "postalCode": "6540",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+447366493955",
      "contactType": "customer service",
      "email": "support@visernic.com"
    },
    "sameAs": [
      "https://twitter.com/visernic",
      "https://facebook.com/visernic",
      "https://linkedin.com/company/visernic"
    ]
  }

  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
