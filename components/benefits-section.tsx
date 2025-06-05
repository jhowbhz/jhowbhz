"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Code, Users, ShieldCheck, Rocket, Headphones } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Performance Imbatível",
    description: "Nossas APIs são otimizadas para baixa latência e alta disponibilidade, garantindo respostas rápidas.",
  },
  {
    icon: Code,
    title: "Integração Simplificada",
    description: "SDKs em diversas linguagens e documentação clara para você começar em minutos.",
  },
  {
    icon: Users,
    title: "Feito para Desenvolvedores",
    description: "Criado por devs, para devs. Entendemos suas necessidades e desafios.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança de Ponta",
    description: "Protegemos seus dados e requisições com os mais altos padrões de segurança.",
  },
  {
    icon: Rocket,
    title: "Escalabilidade Garantida",
    description: "Nossa infraestrutura robusta acompanha o crescimento do seu negócio sem preocupações.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Conte com nossa equipe de especialistas para te ajudar em cada etapa.",
  },
]

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 dark-section-bg">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-20 animate-fade-in-slow">
          <h2 className="text-sm font-semibold text-green-500 uppercase tracking-wider mb-3">
            Por que escolher APIBrasil?
          </h2>
          <p className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            A plataforma de APIs que <span className="text-gradient-neon">transforma</span> seus projetos
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um conjunto de ferramentas e serviços pensados para maximizar sua produtividade e inovação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="glass-card-dark neon-border-accent overflow-hidden animate-fade-in-slow h-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
