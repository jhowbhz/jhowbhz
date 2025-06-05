"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, FileText, ShieldCheck, MapPin, Zap, BarChart3, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: MessageSquare,
    title: "API WhatsApp Business",
    description:
      "Automatize comunicações e engaje clientes diretamente pelo WhatsApp com mais de 72 funções avançadas.",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    hoverColor: "hover:border-green-500/50",
    stats: "72+ funções",
    keywords: "whatsapp api, automação whatsapp, chatbot whatsapp",
  },
  {
    icon: FileText,
    title: "Consulta de CNPJ",
    description:
      "Acesse dados atualizados de empresas brasileiras instantaneamente com informações completas da Receita Federal.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-500/50",
    stats: "Dados em tempo real",
    keywords: "cnpj api, consulta cnpj, dados empresa",
  },
  {
    icon: ShieldCheck,
    title: "Verificação Antifraude",
    description:
      "Proteja suas transações e usuários com análises de risco avançadas e machine learning para detecção de fraudes.",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    hoverColor: "hover:border-red-500/50",
    stats: "99.8% precisão",
    keywords: "antifraude api, verificação fraude, segurança transação",
  },
  {
    icon: MapPin,
    title: "Geolocalização e CEP",
    description: "Enriqueça seus dados com informações precisas de localização e endereços brasileiros completos.",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    hoverColor: "hover:border-orange-500/50",
    stats: "Cobertura nacional",
    keywords: "cep api, geolocalização brasil, endereço api",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description:
      "Transforme dados brutos em insights valiosos para o seu negócio com relatórios detalhados e analytics.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    hoverColor: "hover:border-purple-500/50",
    stats: "Relatórios avançados",
    keywords: "analytics api, análise dados, business intelligence",
  },
  {
    icon: Zap,
    title: "E Muito Mais",
    description:
      "Explore nosso catálogo completo com mais de 120 APIs para diversas finalidades e setores empresariais.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    hoverColor: "hover:border-yellow-500/50",
    stats: "120+ APIs",
    keywords: "apis brasil, plataforma api, integração api",
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

export default function FeaturesHighlightSection() {
  return (
    <section id="apis" className="py-24 md:py-32 dark-theme-bg relative overflow-hidden" aria-labelledby="apis-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="text-center mb-16 md:mb-24" variants={itemVariants}>
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            <Zap className="w-4 h-4 mr-2" aria-hidden="true" />
            Nossas Principais APIs
          </div>
          <h2 id="apis-heading" className="text-heading text-foreground mb-6">
            Soluções <span className="text-gradient-primary">Poderosas</span> ao Seu Alcance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra como nossas APIs podem impulsionar a eficiência e a inovação em seus projetos, oferecendo dados
            precisos e funcionalidades robustas para o mercado brasileiro.
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12" variants={containerVariants}>
          {features.map((feature, index) => (
            <motion.article key={index} variants={itemVariants}>
              <Card
                className={cn(
                  "h-full bg-card/50 backdrop-blur-sm border transition-all duration-300 hover-lift group cursor-pointer",
                  feature.borderColor,
                  feature.hoverColor,
                )}
              >
                <CardHeader className="pb-4">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110",
                      feature.bgColor,
                    )}
                  >
                    <feature.icon
                      className={cn("w-7 h-7 transition-all duration-300", feature.color)}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                    <span
                      className={cn("text-xs font-semibold px-2 py-1 rounded-full", feature.bgColor, feature.color)}
                    >
                      {feature.stats}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Saiba mais
                    <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                  </div>
                  <div className="sr-only">Palavras-chave: {feature.keywords}</div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="text-center mt-12" variants={itemVariants}>
          <Button size="lg" className="btn-primary-enhanced h-12 px-8 text-base font-semibold rounded-xl" asChild>
            <Link
              href="https://doc.apibrasil.io/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explorar documentação completa de todas as APIs"
            >
              Explorar Todas as APIs
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
