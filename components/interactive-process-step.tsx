"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRef, useEffect, useState } from "react"

interface InteractiveProcessStepProps {
  stepNumber: string
  icon: LucideIcon
  title: string
  description: string
  className?: string
  animationDelay?: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
}

export default function InteractiveProcessStep({
  stepNumber,
  icon: Icon,
  title,
  description,
  className,
  animationDelay = 0,
}: InteractiveProcessStepProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: "0px", y: "0px" })

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
    currentCardRef?.addEventListener("mousemove", handleMouseMove)

    return () => {
      currentCardRef?.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className={cn("process-step-card", className)}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{
        transitionDelay: `${animationDelay}s`,
        // @ts-ignore
        "--mouse-x": mousePosition.x,
        "--mouse-y": mousePosition.y,
      }}
    >
      <div className="spotlight" />
      <div className="process-step-content">
        <div className="process-step-number">{stepNumber}</div>
        <div className="pl-6 pt-8">
          {" "}
          {/* Adjust padding to account for number */}
          <div className="mb-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
