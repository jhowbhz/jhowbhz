"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureShowcaseItemProps {
  icon: LucideIcon
  text: string
  className?: string
  animationDelay?: number
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function FeatureShowcaseItem({
  icon: Icon,
  text,
  className,
  animationDelay = 0,
}: FeatureShowcaseItemProps) {
  return (
    <motion.div
      className={cn("feature-showcase-item", className)}
      variants={itemVariants}
      custom={animationDelay} // Not directly used by variants here, but good for stagger
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ transitionDelay: `${animationDelay}s` }} // Manual delay for stagger
    >
      <div className="icon-wrapper">
        <Icon className="w-4 h-4" />
      </div>
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{text}</span>
    </motion.div>
  )
}
