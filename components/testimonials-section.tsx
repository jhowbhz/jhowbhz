"use client"

import Image from "next/image"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "A APIBrasil transformou nossa capacidade de integração. As APIs são incrivelmente robustas e a documentação é impecável. Suporte nota 10!",
    name: "Juliana Silva",
    role: "CTO, InovaTech Soluções",
    avatar: "/placeholder.svg?width=80&height=80&text=JS",
    stars: 5,
    company: "InovaTech",
    highlight: "Documentação impecável",
  },
  {
    quote:
      "Nunca foi tão fácil integrar com tantos serviços diferentes. A plataforma da APIBrasil economizou meses de desenvolvimento para nossa equipe.",
    name: "Ricardo Oliveira",
    role: "Desenvolvedor Sênior, DevExperts",
    avatar: "/placeholder.svg?width=80&height=80&text=RO",
    stars: 5,
    company: "DevExperts",
    highlight: "Economizou meses de desenvolvimento",
  },
  {
    quote:
      "O custo-benefício é excelente. Conseguimos acesso a um leque enorme de APIs por um preço justo, o que foi crucial para nossa startup.",
    name: "Fernanda Costa",
    role: "CEO, StartAí",
    avatar: "/placeholder.svg?width=80&height=80&text=FC",
    stars: 5,
    company: "StartAí",
    highlight: "Custo-benefício excelente",
  },
  {
    quote:
      "A API de consulta de CNPJ é a mais completa e rápida que já utilizamos. Essencial para nossas operações diárias de verificação.",
    name: "Lucas Martins",
    role: "Gerente de Operações, ValidaBR",
    avatar: "/placeholder.svg?width=80&height=80&text=LM",
    stars: 5,
    company: "ValidaBR",
    highlight: "API mais completa e rápida",
  },
  {
    quote:
      "Com a API WhatsApp, automatizamos nosso atendimento e melhoramos significativamente a satisfação dos nossos clientes. Recomendo!",
    name: "Beatriz Almeida",
    role: "Coordenadora de Sucesso do Cliente, AtendeMais",
    avatar: "/placeholder.svg?width=80&height=80&text=BA",
    stars: 5,
    company: "AtendeMais",
    highlight: "Melhorou satisfação dos clientes",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section id="depoimentos" className="py-24 md:py-32 dark-theme-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/5 to-transparent"></div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="text-center mb-16 md:mb-24" variants={itemVariants}>
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/20">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Avaliações dos Clientes
          </div>
          <h2 className="text-heading text-foreground mb-6">
            Confiança e Resultados <span className="text-gradient-accent">Comprovados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Veja como a APIBrasil está ajudando empresas e desenvolvedores a alcançarem seus objetivos com soluções
            inovadoras e confiáveis.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 6000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full max-w-7xl mx-auto"
            onSelect={(api) => {
              if (api) {
                setCurrentSlide(api.selectedScrollSnap())
              }
            }}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className="p-1 h-full"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden group">
                      <div className="p-6 md:p-8 h-full flex flex-col">
                        {/* Quote Icon */}
                        <div className="flex items-center justify-between mb-6">
                          <Quote className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                          <div className="flex items-center">
                            {Array(testimonial.stars)
                              .fill(0)
                              .map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              ))}
                          </div>
                        </div>

                        {/* Quote Text */}
                        <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow text-sm md:text-base">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Highlight */}
                        <div className="mb-6">
                          <span className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                            {testimonial.highlight}
                          </span>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center space-x-4 mt-auto">
                          <div className="relative">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={56}
                              height={56}
                              className="rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors"
                              onError={(e) => {
                                e.currentTarget.src =
                                  "/placeholder.svg?width=56&height=56&text=" +
                                  testimonial.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                              }}
                            />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card"></div>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                              {testimonial.name}
                            </p>
                            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                            <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <CarouselPrevious className="relative static translate-y-0 bg-card/80 hover:bg-card border-border/50 hover:border-primary/50 transition-all duration-300 w-10 h-10">
                <ArrowLeft className="w-4 h-4" />
              </CarouselPrevious>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === currentSlide ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/60",
                    )}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <CarouselNext className="relative static translate-y-0 bg-card/80 hover:bg-card border-border/50 hover:border-primary/50 transition-all duration-300 w-10 h-10">
                <ArrowRight className="w-4 h-4" />
              </CarouselNext>
            </div>
          </Carousel>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-card/30 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/30 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">2.5K+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/30 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/30 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
