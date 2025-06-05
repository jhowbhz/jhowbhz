"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRef, useEffect, useState } from "react"

interface PillarCardV2Props {
  icon: LucideIcon
  title: string
  tagline: string
  className?: string
  animationDelay?: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1], // Smooth cubic bezier
    },
  }),
}

export default function PillarCardV2({ icon: Icon, title, tagline, className, animationDelay = 0 }: PillarCardV2Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: "0px", y: "0px" })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        setMousePosition({
          x: `${event.clientX - rect.left}px`,
          y: `${event.clientY - rect.top}px`,
        })
      }
    }

    const currentCardRef = cardRef.current
    if (currentCardRef) {
      currentCardRef.addEventListener("mousemove", handleMouseMove)
      currentCardRef.addEventListener("mouseenter", () => setIsHovering(true))
      currentCardRef.addEventListener("mouseleave", () => setIsHovering(false))
    }

    return () => {
      if (currentCardRef) {
        currentCardRef.removeEventListener("mousemove", handleMouseMove)
        currentCardRef.removeEventListener("mouseenter", () => setIsHovering(true))
        currentCardRef.removeEventListener("mouseleave", () => setIsHovering(false))
      }
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className={cn("pillar-card-v2", className)}
      variants={cardVariants}
      custom={animationDelay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{
        // @ts-ignore
        "--mouse-x": mousePosition.x,
        "--mouse-y": mousePosition.y,
        "--glow-opacity": isHovering ? 1 : 0,
      }}
    >
      <div className="pillar-card-v2-glow" />
      <div className="relative z-10">
        {" "}
        {/* Content wrapper */}
        <div className="pillar-card-v2-icon-wrapper">
          <Icon />
        </div>
        <h3 className="pillar-card-v2-title">{title}</h3>
        <p className="pillar-card-v2-tagline">{tagline}</p>
      </div>
    </motion.div>
  )
}
