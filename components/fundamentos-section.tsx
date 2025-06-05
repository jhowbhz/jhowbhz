"use client"

import { motion } from "framer-motion"
import PillarCardV2 from "./pillar-card-v2"
import { CodeXml, Network, Building2, GaugeCircle, ShieldCheck, Share2 } from "lucide-react"

const pillars = [
  {
    icon: CodeXml,
    title: "Foco no Desenvolvedor",
    tagline: "Criado por devs, para devs. Ferramentas que você ama.",
    animationDelay: 0,
  },
  {
    icon: Network,
    title: "Escalabilidade Sob Demanda",
    tagline: "Limites flexíveis, crescimento ilimitado para seu projeto.",
    animationDelay: 0.1,
  },
  {
    icon: Building2,
    title: "Soluções Versáteis",
    tagline: "Do startup à grande corporação, adaptamos para você.",
    animationDelay: 0.2,
  },
  {
    icon: GaugeCircle,
    title: "Performance Excepcional",
    tagline: "Latência mínima, disponibilidade máxima, sempre.",
    animationDelay: 0.3,
  },
  {
    icon: ShieldCheck,
    title: "Segurança Inviolável",
    tagline: "Seus dados e transações protegidos com rigor.",
    animationDelay: 0.4,
  },
  {
    icon: Share2,
    title: "Ecossistema Integrado",
    tagline: "Mais de 120 APIs, uma só plataforma poderosa.",
    animationDelay: 0.5,
  },
]

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children within the section
      delayChildren: 0.2, // Delay before children start animating
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function FundamentosSection() {
  return (
    <section id="fundamentos" className="fundamentos-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-base font-semibold text-primary uppercase tracking-wider mb-3"
            variants={textVariants}
          >
            Nossos Diferenciais Essenciais
          </motion.h2>
          <motion.p
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5"
            variants={textVariants}
          >
            Construído para <span className="animated-gradient-text">Impulsionar Seu Sucesso</span>
          </motion.p>
          <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto" variants={textVariants}>
            Descubra os pilares que tornam a APIBrasil a escolha inteligente para desenvolvedores e empresas que buscam
            inovação, confiabilidade e uma experiência de integração superior.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={sectionVariants} // Use sectionVariants for staggering PillarCardV2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the grid is visible
        >
          {pillars.map((pillar) => (
            <PillarCardV2
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              tagline={pillar.tagline}
              animationDelay={pillar.animationDelay} // Pass delay to individual cards
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
