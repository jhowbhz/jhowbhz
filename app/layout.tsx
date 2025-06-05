import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import CookieConsent from "@/components/cookie-consent"
import { TypebotScript } from "@/components/typebot-integration"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://apibrasil.com.br"),
  title: {
    default: "APIBrasil - APIs Brasileiras | WhatsApp, CNPJ, CEP",
    template: "%s | APIBrasil",
  },
  description:
    "Plataforma com +120 APIs brasileiras. Integre WhatsApp Business, consulte CNPJ, CEP e CPF. Documentação completa, suporte 24/7.",
  keywords: [
    "API Brasil",
    "WhatsApp API",
    "CNPJ API",
    "CEP API",
    "CPF API",
    "APIs brasileiras",
    "integração WhatsApp",
    "consulta CNPJ",
    "desenvolvedores",
  ],
  authors: [{ name: "APIBrasil" }],
  creator: "APIBrasil",
  publisher: "APIBrasil",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://apibrasil.com.br",
    siteName: "APIBrasil",
    title: "APIBrasil - APIs Brasileiras para Desenvolvedores",
    description:
      "Transforme suas ideias em soluções inteligentes com nossas APIs brasileiras. Plataforma com +120 APIs incluindo WhatsApp, CNPJ, CEP.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1280,
        height: 720,
        alt: "APIBrasil - APIs Brasileiras para Desenvolvedores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@apibrasil_oficial",
    creator: "@apibrasil_oficial",
    title: "APIBrasil - APIs Brasileiras para Desenvolvedores",
    description:
      "Transforme suas ideias em soluções inteligentes com nossas APIs brasileiras. Plataforma completa com mais de 120 APIs incluindo WhatsApp Business, CNPJ, CEP, CPF e muito mais.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://apibrasil.com.br",
  },
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/logo-apibrasil.webp" as="image" type="image/webp" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      </head>
      <body className={cn(inter.className, "antialiased")}>
        <Suspense fallback={null}>
          {children}
          <CookieConsent />
          <TypebotScript />
        </Suspense>
        <Analytics />

        {/* Analytics - Load after interactive */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}
