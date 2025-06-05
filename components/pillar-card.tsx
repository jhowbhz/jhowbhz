"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRef, useEffect, useState } from "react"

interface PillarCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  animationDelay?: number
  onHoverChange?: (isHovering: boolean) => void
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function PillarCard({
  icon: Icon,
  title,
  description,
  className,
  animationDelay = 0,
  onHoverChange,
}: PillarCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "100%" }) // Default glow at bottom center

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        setMousePosition({
          x: `${((event.clientX - rect.left) / rect.width) * 100}%`,
          y: `${((event.clientY - rect.top) / rect.height) * 100}%`,
        })
      }
    }

    const currentCardRef = cardRef.current
    currentCardRef?.addEventListener("mousemove", handleMouseMove)
    // Reset glow position when mouse leaves
    currentCardRef?.addEventListener("mouseleave", () => setMousePosition({ x: "50%", y: "100%" }))

    return () => {
      currentCardRef?.removeEventListener("mousemove", handleMouseMove)
      currentCardRef?.removeEventListener("mouseleave", () => setMousePosition({ x: "50%", y: "100%" }))
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className={cn("pillar-card", className)}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{
        transitionDelay: `${animationDelay}s`,
        // @ts-ignore
        "--glow-x": mousePosition.x,
        "--glow-y": mousePosition.y,
      }}
      onHoverStart={() => onHoverChange?.(true)}
      onHoverEnd={() => onHoverChange?.(false)}
    >
      <div className="pillar-card-glow" />
      <div className="relative z-10">
        {" "}
        {/* Content above glow */}
        <div className="icon-container">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
