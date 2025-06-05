"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, TrendingUp, Users, MessageSquare, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import OptimizedImage from "./optimized-image"
import { motion } from "framer-motion"

const stats = [
  { icon: TrendingUp, value: "98.9%", label: "Uptime Garantido", color: "text-green-400" },
  { icon: Users, value: "38K+", label: "Devs Ativos", color: "text-blue-400" },
  { icon: MessageSquare, value: "15M+", label: "Requisições Diárias", color: "text-purple-400" },
  { icon: Zap, value: "29+", label: "APIs Disponíveis", color: "text-yellow-400" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function HeroSection() {
  return (
    <section
      className="hero-critical relative min-h-screen flex flex-col justify-center items-center text-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Effects - Simplified for performance */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Badge className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 text-primary-foreground text-sm py-2 px-4 mb-8 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
            <span className="font-semibold">Plataforma #1 para Desenvolvedores Brasileiros</span>
          </Badge>
        </motion.div>

        <motion.div className="mb-8 max-w-5xl" variants={itemVariants}>
          <h1 id="hero-heading" className="text-display text-white mb-6">
            Transforme suas ideias em <span className="text-gradient-primary">soluções inteligentes</span>
            <br className="hidden md:block" />
            com nossas <span className="text-gradient-accent">APIs brasileiras</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mais de 29 APIs brasileiras em uma única plataforma.
            <br className="hidden md:block" />
            Integração simples, documentação completa e suporte especializado 24/7.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 w-full max-w-4xl"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover-lift hover-glow-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center mb-2">
                <stat.icon className={`w-6 h-6 ${stat.color} mr-2`} aria-hidden="true" />
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              </div>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-16" variants={itemVariants}>
          <Button
            size="lg"
            className="btn-critical w-full sm:w-auto min-w-[200px] h-12 text-base font-semibold px-8 rounded-xl shadow-2xl"
            asChild
          >
            <Link href="#precos" aria-label="Começar com a APIBrasil">
              Começar agora
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 w-full sm:w-auto min-w-[200px] h-12 text-base font-semibold px-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover-lift"
            asChild
          >
            <Link
              href="https://github.com/APIBrasil/apigratis-exemplos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver exemplos de código no GitHub"
            >
              <Github className="mr-2 w-5 h-5" aria-hidden="true" />
              Ver Exemplos
            </Link>
          </Button>
        </motion.div>

        <motion.div className="w-full max-w-6xl" variants={itemVariants}>
          <div className="relative">
            <div
              className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl blur-3xl"
              aria-hidden="true"
            ></div>
            <div className="relative z-10 bg-gray-800/70 backdrop-blur-md shadow-xl rounded-lg md:rounded-xl overflow-hidden border border-gray-700/50">
              <div className="h-8 md:h-10 bg-gray-700/60 flex items-center px-3 md:px-4 border-b border-gray-600/50">
                <div className="flex space-x-1.5 md:space-x-2" role="presentation">
                  <span className="block w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full" aria-label="Fechar"></span>
                  <span
                    className="block w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-400 rounded-full"
                    aria-label="Minimizar"
                  ></span>
                  <span
                    className="block w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full"
                    aria-label="Maximizar"
                  ></span>
                </div>
                <div
                  className="ml-3 md:ml-4 bg-gray-600/50 h-4 md:h-5 rounded-sm flex-grow max-w-xs md:max-w-sm opacity-50"
                  role="presentation"
                ></div>
              </div>
              <div className="aspect-[16/9] overflow-hidden">
                <OptimizedImage
                  src="/images/screenshots/dashboard-home.png"
                  alt="Dashboard principal da APIBrasil mostrando estatísticas de uso, APIs disponíveis e controles de gerenciamento"
                  width={1920}
                  height={1080}
                  priority={true}
                  className="w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
