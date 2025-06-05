"use client"

import type { ReactNode } from "react"
import { useLazyLoad } from "@/hooks/use-lazy-load"
import { cn } from "@/lib/utils"

interface LazySectionProps {
  children: ReactNode
  className?: string
  fallback?: ReactNode
  threshold?: number
  rootMargin?: string
}

export default function LazySection({
  children,
  className,
  fallback,
  threshold = 0.1,
  rootMargin = "100px",
}: LazySectionProps) {
  const { ref, isIntersecting } = useLazyLoad({
    threshold,
    rootMargin,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={cn("min-h-[200px]", className)}>
      {isIntersecting ? children : fallback || <div className="animate-pulse bg-gray-200 h-48 rounded-lg" />}
    </div>
  )
}
