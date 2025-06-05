"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Loader2 } from "lucide-react"
import { useTypebot } from "./typebot-integration"
import { cn } from "@/lib/utils"

interface ContactButtonProps {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  className?: string
  children?: React.ReactNode
  showIcon?: boolean
}

export default function ContactButton({
  variant = "outline",
  size = "default",
  className,
  children,
  showIcon = true,
}: ContactButtonProps) {
  const { openTypebot } = useTypebot()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      await openTypebot()
    } catch (error) {
      console.error("Erro ao abrir chat:", error)
    } finally {
      // Reset loading state after a short delay
      setTimeout(() => setIsLoading(false), 1000)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      disabled={isLoading}
      className={cn(
        "transition-all duration-300 hover:scale-105 focus:scale-105",
        variant === "outline" &&
          "border-accent/30 hover:border-accent/50 text-accent hover:text-accent hover:bg-accent/10",
        isLoading && "opacity-70 cursor-not-allowed",
        className,
      )}
      aria-label="Solicitar contato através do chat"
    >
      {isLoading ? (
        <Loader2 className="mr-2 w-4 h-4 animate-spin" aria-hidden="true" />
      ) : (
        showIcon && <MessageCircle className="mr-2 w-4 h-4" aria-hidden="true" />
      )}
      {isLoading ? "Abrindo chat..." : children || "Solicitar um Contato"}
    </Button>
  )
}

// Componente específico para WhatsApp (fallback)
export function WhatsAppButton({
  variant = "outline",
  size = "default",
  className,
  children,
  showIcon = true,
}: ContactButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "transition-all duration-300 hover:scale-105 focus:scale-105",
        "border-green-500/30 hover:border-green-500/50 text-green-500 hover:text-green-500 hover:bg-green-500/10",
        className,
      )}
      asChild
    >
      <a
        href="https://wa.me/5531994359434"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato via WhatsApp"
      >
        {showIcon && <Phone className="mr-2 w-4 h-4" aria-hidden="true" />}
        {children || "WhatsApp"}
      </a>
    </Button>
  )
}
