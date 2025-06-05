import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import LazySection from "@/components/lazy-section"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import { Suspense, lazy } from "react"
import type { Metadata } from "next"

// Lazy load components that are below the fold
const PlatformShowcaseSection = lazy(() => import("@/components/platform-showcase-section"))
const FeaturesHighlightSection = lazy(() => import("@/components/features-highlight-section"))
const CustomPlanSection = lazy(() => import("@/components/custom-plan-section"))
const CodeExamplesSection = lazy(() => import("@/components/code-examples-section"))
const TestimonialsSection = lazy(() => import("@/components/testimonials-section"))
const CtaSection = lazy(() => import("@/components/cta-section"))
const FundamentosSection = lazy(() => import("@/components/fundamentos-section"))
const IntegrationsMarqueeSection = lazy(() => import("@/components/integrations-marquee-section"))

export const metadata: Metadata = {
  title: "APIBrasil - APIs Brasileiras | WhatsApp, CNPJ, CEP",
  description:
    "Plataforma com +120 APIs brasileiras. Integre WhatsApp Business, consulte CNPJ, CEP e CPF. Documentação completa, suporte 24/7.",
  openGraph: {
    title: "APIBrasil - APIs Brasileiras para Desenvolvedores",
    description:
      "Transforme suas ideias em soluções inteligentes com nossas APIs brasileiras. Plataforma com +120 APIs incluindo WhatsApp, CNPJ, CEP.",
    url: "https://apibrasil.com.br",
    images: [
      {
        url: "/images/og-image.png",
        width: 1280,
        height: 720,
        alt: "APIBrasil - APIs Brasileiras para Desenvolvedores",
      },
    ],
  },
  alternates: {
    canonical: "https://apibrasil.com.br",
  },
}

// Loading fallback component
function SectionSkeleton() {
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <div className="bg-hero-dark-bg min-h-screen">
        <Header />
        <main>
          {/* Above the fold - Load immediately */}
          <HeroSection />

          {/* Below the fold - Lazy load */}
          <LazySection fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <FundamentosSection />
            </Suspense>
          </LazySection>

          <section id="solucoes" aria-labelledby="solucoes-heading">
            <h2 id="solucoes-heading" className="sr-only">
              Nossas Soluções e APIs
            </h2>
            <LazySection fallback={<SectionSkeleton />}>
              <Suspense fallback={<SectionSkeleton />}>
                <FeaturesHighlightSection />
              </Suspense>
            </LazySection>
            <LazySection fallback={<SectionSkeleton />}>
              <Suspense fallback={<SectionSkeleton />}>
                <PlatformShowcaseSection />
              </Suspense>
            </LazySection>
          </section>

          <section id="precos" aria-labelledby="precos-heading">
            <h2 id="precos-heading" className="sr-only">
              Planos e Preços
            </h2>
            <LazySection fallback={<SectionSkeleton />}>
              <Suspense fallback={<SectionSkeleton />}>
                <CustomPlanSection />
              </Suspense>
            </LazySection>
          </section>

          <LazySection fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <CodeExamplesSection />
            </Suspense>
          </LazySection>

          <LazySection fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <TestimonialsSection />
            </Suspense>
          </LazySection>

          <LazySection fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <IntegrationsMarqueeSection />
            </Suspense>
          </LazySection>

          <LazySection fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <CtaSection />
            </Suspense>
          </LazySection>
        </main>

        <LazySection fallback={<div className="h-96 bg-gray-900"></div>}>
          <Suspense fallback={<div className="h-96 bg-gray-900"></div>}>
            <Footer />
          </Suspense>
        </LazySection>

        <ScrollToTopButton />
      </div>
    </>
  )
}
