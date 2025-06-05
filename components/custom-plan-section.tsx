"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Cpu, Database, ShieldCheck, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import ContactButton from "./contact-button"

const benefits = [
  { icon: CheckCircle, text: "Pague apenas pelo que realmente precisa" },
  { icon: CheckCircle, text: "Escalabilidade ilimitada para seu crescimento" },
  { icon: CheckCircle, text: "Recursos otimizados para sua demanda" },
  { icon: CheckCircle, text: "Suporte prioritário e SLAs personalizadas" },
]

const pillars = [
  {
    icon: Zap,
    title: "Volume Extremo",
    description:
      "Infraestrutura robusta para milhões de requisições, com latência mínima e picos de tráfego gerenciados.",
  },
  {
    icon: Cpu,
    title: "APIs Dedicadas",
    description: "Desenvolvimento de endpoints customizados ou acesso exclusivo a APIs para suas necessidades únicas.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Avançada",
    description:
      "Controles de segurança sob medida, VPNs dedicadas, e conformidade com padrões específicos do seu setor.",
  },
  {
    icon: Database,
    title: "Recursos Exclusivos",
    description:
      "Servidores dedicados, limites de taxa personalizados, e acesso a funcionalidades beta ou experimentais.",
  },
]

export default function CustomPlanSection() {
  return (
    <section id="plano-personalizado" className="py-20 md:py-28 dark-theme-bg">
      {/* Background effects */}
      <div className="custom-plan-aurora"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            <Zap className="w-4 h-4" />
            <span>Potencial Ilimitado</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6"
          >
            Desbloqueie o <span className="animated-gradient-text">Máximo Desempenho</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Para demandas que transcendem o padrão, a APIBrasil oferece soluções totalmente personalizadas. Construa a
            infraestrutura de API perfeita para seu negócio, sem limites.
          </motion.p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left column: Text content & CTA */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Benefícios Exclusivos</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="benefit-item group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    <benefit.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {benefit.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Comece Agora</h3>
              <p className="text-muted-foreground mb-6">
                Cadastre-se gratuitamente e escale para uma solução personalizada quando precisar. Nossa equipe de
                especialistas está pronta para ajudar.
              </p>

              <Button
                size="lg"
                className={cn(
                  "bg-primary hover:bg-primary/90 text-primary-foreground w-full",
                  "px-6 py-3 text-base font-medium rounded-lg shadow-lg shadow-primary/20",
                  "transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:translate-y-[-2px]",
                )}
                asChild
              >
                <Link href="https://app.apibrasil.io/auth/register" target="_blank" rel="noopener noreferrer">
                  Cadastre-se Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right column: Feature pillars in grid */}
          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-5">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  className={cn(
                    "bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-6",
                    "hover:border-primary/30 hover:bg-card/60 transition-all duration-300",
                    "hover:shadow-lg hover:shadow-primary/10 hover:translate-y-[-4px]",
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <pillar.icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h4>
                      <p className="text-sm text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-5 bg-accent/5 backdrop-blur-sm border border-accent/20 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 text-accent p-3 rounded-lg">
                  <Zap className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Consultoria Especializada</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Nossa equipe de especialistas irá analisar suas necessidades e criar uma solução sob medida para o
                    seu negócio.
                  </p>

                  <ContactButton
                    variant="outline"
                    className="border-accent/30 hover:border-accent/50 text-accent hover:text-accent hover:bg-accent/10"
                  >
                    Solicitar um Contato
                  </ContactButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
