"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simular progresso de carregamento
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500) // Delay para transição suave
          return 100
        }
        return prev + Math.random() * 15 + 5 // Incremento variável para parecer mais natural
      })
    }, 100)

    // Garantir que o loading termine em no máximo 3 segundos
    const timeout = setTimeout(() => {
      setProgress(100)
      setTimeout(() => setIsLoading(false), 500)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-all duration-700 ease-out",
        !isLoading && "opacity-0 pointer-events-none",
      )}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="relative">
          <img
            src="/logo-apibrasil.webp"
            alt="APIBrasil"
            className="h-16 w-auto animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl animate-pulse" />
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground animate-pulse">Carregando APIs...</p>
          <p className="text-xs text-muted-foreground/60">{Math.round(progress)}%</p>
        </div>

        {/* Animated Dots */}
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
