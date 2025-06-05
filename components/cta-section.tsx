"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket } from "lucide-react"
import Link from "next/link"
import ContactButton, { WhatsAppButton } from "./contact-button"

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 dark-theme-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card-modern rounded-xl md:rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden">
          <div className="svg-aurora-effect opacity-40"></div>
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <Rocket className="w-12 h-12 text-primary mx-auto md:mx-0 fade-in-up-slow" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground fade-in-up-slow delay-100">
                Pronto para <span className="animated-gradient-text">tonar o seu Software uma Solução Mais Inteligente?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0 fade-in-up-slow delay-200">
                Junte-se a milhares de desenvolvedores que confiam na APIBrasil para construir aplicações incríveis.
                Comece gratuitamente e explore todo o potencial de nossas APIs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:gap-6 items-center justify-center md:justify-end fade-in-up-slow delay-300">
              <Button
                size="lg"
                className="w-full sm:w-auto md:w-full lg:w-auto min-w-[200px] h-12 bg-primary hover:bg-primary/90 text-primary-foreground px-8 text-base rounded-xl button-glow-effect shadow-lg shadow-primary/30"
                asChild
              >
                <Link href="https://app.apibrasil.io/auth/register">
                  Começar agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <div className="flex gap-3">
                <ContactButton
                  size="lg"
                  className="min-w-[140px] h-12 px-6 text-base rounded-xl border-border hover:bg-secondary hover:text-accent-foreground"
                >
                  Solicitar Contato
                </ContactButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
