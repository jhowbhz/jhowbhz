"use client"

import { Facebook, Twitter, Linkedin, Mail, Link } from "lucide-react"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

interface SocialShareProps {
  url?: string
  title?: string
  description?: string
  className?: string
}

export default function SocialShare({
  url = typeof window !== "undefined" ? window.location.href : "https://apibrasil.com.br",
  title = "APIBrasil - APIs Brasileiras para Desenvolvedores",
  description = "Transforme suas ideias em soluções inteligentes com nossas APIs brasileiras",
  className = "",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2]",
      rel: "noopener noreferrer",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2]",
      rel: "noopener noreferrer",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2]",
      rel: "noopener noreferrer",
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: "bg-gray-100 hover:bg-gray-200 text-gray-700",
      rel: "",
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      toast({
        title: "Link copiado!",
        description: "O link foi copiado para a área de transferência.",
        duration: 3000,
      })
      setTimeout(() => setCopied(false), 3000)
    })
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-muted-foreground mr-1"></span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel={link.rel ? link.rel : undefined}
          className={`p-2 rounded-full ${link.color} transition-all duration-300 hover:scale-110`}
          aria-label={`Compartilhar no ${link.name}`}
        >
          <link.icon className="w-4 h-4" />
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300 hover:scale-110"
        aria-label="Copiar link"
      >
        <Link className="w-4 h-4" />
      </button>
    </div>
  )
}
