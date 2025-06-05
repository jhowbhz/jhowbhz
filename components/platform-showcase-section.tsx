"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import BrowserMockup from "./browser-mockup"
import { LayoutDashboard, Smartphone, SlidersHorizontal, CreditCard, Palette, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface PlatformFeature {
  id: string
  icon: LucideIcon
  title: string
  description: string
  screenshotSrc: string
  screenshotAlt: string
}

const platformFeaturesData: PlatformFeature[] = [
  {
    id: "dashboard-home",
    icon: LayoutDashboard,
    title: "Dashboard Principal",
    description: "Visão geral e métricas chave da sua conta e uso de APIs.",
    screenshotSrc: "/images/screenshots/dashboard-home.png",
    screenshotAlt: "Dashboard Principal APIBrasil",
  },
  {
    id: "dashboard-devices",
    icon: Smartphone,
    title: "Gestão de Dispositivos",
    description: "Controle seus dispositivos conectados e suas configurações.",
    screenshotSrc: "/images/screenshots/dashboard-devices.png",
    screenshotAlt: "Gerenciamento de Dispositivos APIBrasil",
  },
  {
    id: "dashboard-my-apis",
    icon: SlidersHorizontal,
    title: "Minhas APIs",
    description: "Ajuste suas APIs e gerencie chaves de acesso.",
    screenshotSrc: "/images/screenshots/dashboard-my-apis.png",
    screenshotAlt: "Controle de APIs APIBrasil",
  },
  {
    id: "dashboard-my-plan",
    icon: CreditCard,
    title: "Meu Plano e Recargas",
    description: "Escolha planos e faça recargas de forma simples.",
    screenshotSrc: "/images/screenshots/dashboard-my-plan.png",
    screenshotAlt: "Gerenciamento de Plano APIBrasil",
  },
  {
    id: "dashboard-recharge-modal",
    icon: Palette, // Usando Palette como exemplo, pode ser outro
    title: "Interface Moderna",
    description: "Desfrute de uma experiência de usuário agradável.",
    screenshotSrc: "/images/screenshots/dashboard-recharge-modal.png",
    screenshotAlt: "Modal de Recarga APIBrasil",
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

const imageVariants = {
  initial: { opacity: 0, scale: 0.95, x: 20 },
  animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, scale: 0.95, x: -20, transition: { duration: 0.3, ease: "easeInOut" } },
}

export default function PlatformShowcaseSection() {
  const [selectedFeature, setSelectedFeature] = useState<PlatformFeature>(platformFeaturesData[0])

  return (
    <section id="platform-showcase" className="py-20 md:py-28 platform-showcase-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5"
          >
            Explore Nossa <span className="animated-gradient-text">Plataforma Poderosa</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Navegue pelas principais telas e funcionalidades da APIBrasil. Descubra uma interface projetada para
            eficiência, controle e uma experiência de desenvolvimento superior.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Feature Selectors */}
          <motion.div
            className="lg:col-span-4 space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          >
            {platformFeaturesData.map((feature, index) => (
              <motion.button
                key={feature.id}
                variants={itemVariants}
                custom={index}
                onClick={() => setSelectedFeature(feature)}
                className={cn(
                  "interactive-feature-button flex items-center",
                  selectedFeature.id === feature.id && "active",
                )}
              >
                <div className="feature-icon-wrapper">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-md font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground/80 hidden sm:block">{feature.description}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Image Display */}
          <div className="lg:col-span-8 relative min-h-[300px] md:min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature.id}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full" // O BrowserMockup já tem aspect ratio
              >
                <BrowserMockup
                  imageUrl={selectedFeature.screenshotSrc}
                  altText={selectedFeature.screenshotAlt}
                  className="shadow-2xl shadow-primary/10 transition-all duration-500 hover:shadow-primary/20"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
