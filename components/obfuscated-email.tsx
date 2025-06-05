"use client"

import { useState } from "react"
import { Mail } from "lucide-react"

interface ObfuscatedEmailProps {
  email: string
  className?: string
}

export default function ObfuscatedEmail({ email, className = "" }: ObfuscatedEmailProps) {
  const [revealed, setRevealed] = useState(false)

  // Obfuscate the email
  const obfuscatedEmail = email.replace(/(.)(.*?)(.@)/g, "$1•••$3")

  const handleClick = () => {
    setRevealed(true)

    // Copy to clipboard
    navigator.clipboard.writeText(email).catch((err) => {
      console.error("Could not copy email: ", err)
    })
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-1 hover:text-primary transition-colors ${className}`}
      aria-label={revealed ? `Email copiado: ${email}` : "Revelar e copiar email"}
    >
      <Mail className="w-4 h-4" />
      <span>{revealed ? `${email} (copiado!)` : obfuscatedEmail}</span>
    </button>
  )
}
