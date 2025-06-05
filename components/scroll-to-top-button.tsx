"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // O scroll-smooth no HTML já ajuda, mas isso reforça para JS-driven scroll
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <Button
      variant="default"
      size="icon"
      className={cn(
        "fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 rounded-full p-3 shadow-xl transition-all duration-300 ease-in-out",
        "bg-primary/80 hover:bg-primary text-primary-foreground backdrop-blur-sm button-glow-effect-primary", // Usa cor primária
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
      )}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
    </Button>
  )
}
