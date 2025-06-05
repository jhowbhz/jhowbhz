"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    Typebot?: {
      initStandard: (config: { typebot: string; apiHost: string }) => void
      initPopup: (config: { typebot: string; apiHost: string }) => void
      initBubble: (config: {
        typebot: string
        apiHost: string
        theme?: {
          button?: {
            backgroundColor?: string
            iconColor?: string
          }
          chatWindow?: {
            backgroundColor?: string
            maxWidth?: string
          }
        }
        previewMessage?: {
          message?: string
          autoShowDelay?: number
          avatarUrl?: string
        }
      }) => void
      open: () => void
      close: () => void
      toggle: () => void
      showPreviewMessage: () => void
      hidePreviewMessage: () => void
    }
  }
}

interface TypebotIntegrationProps {
  mode?: "standard" | "popup" | "bubble"
  typebot?: string
  apiHost?: string
  theme?: {
    button?: {
      backgroundColor?: string
      iconColor?: string
    }
    chatWindow?: {
      backgroundColor?: string
      maxWidth?: string
    }
  }
  previewMessage?: {
    message?: string
    autoShowDelay?: number
    avatarUrl?: string
  }
}

export default function TypebotIntegration({
  mode = "bubble",
  typebot = "apibrasil",
  apiHost = "https://bot.jhon.io",
  theme,
  previewMessage,
}: TypebotIntegrationProps) {
  return null
}

// Hook melhorado para controlar o Typebot bubble
export function useTypebot() {
  const openTypebot = () => {
    if (typeof window !== "undefined" && window.Typebot) {
      window.Typebot.open()
    } else {
      // Fallback para link direto
      window.open("https://bot.jhon.io/apibrasil", "_blank", "noopener,noreferrer")
    }
  }

  return { openTypebot }
}

export function TypebotScript() {
  useEffect(() => {
    // Primeiro, carregamos o script do Typebot
    const loadTypebotScript = () => {
      // Verificar se o script já existe para evitar duplicação
      if (document.querySelector('script[src*="@typebot.io/js"]')) {
        return
      }

      // Criar e adicionar o script externo
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3.29/dist/web.js"
      script.type = "module"
      script.onload = initTypebot
      document.head.appendChild(script)
    }

    // Depois que o script for carregado, inicializamos o Typebot
    const initTypebot = () => {
      // Verificar se o Typebot já foi inicializado
      if (window.Typebot) {
        window.Typebot.initBubble({
          typebot: "apibrasil",
          apiHost: "https://bot.jhon.io",
          theme: { button: { backgroundColor: "#4A8BB2" } },
        })
      } else {
        console.warn("Typebot não está disponível")
      }
    }

    // Aguardar um pouco para garantir que a página carregou completamente
    const timer = setTimeout(loadTypebotScript, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return null
}
