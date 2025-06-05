"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Settings, Cookie } from "lucide-react"
import { cn } from "@/lib/utils"

interface CookieConsentProps {
  className?: string
}

export default function CookieConsent({ className }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Sempre true, não pode ser desabilitado
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    // Verificar se o usuário já deu consentimento
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Mostrar banner após 1 segundo
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const handleAcceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString(),
    }

    localStorage.setItem("cookie-consent", JSON.stringify(consentData))

    // Ativar Google Analytics se aceito
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        functionality_storage: "granted",
        personalization_storage: "granted",
      })
    }

    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString(),
    }

    localStorage.setItem("cookie-consent", JSON.stringify(consentData))

    // Negar cookies não essenciais
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
      })
    }

    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    const consentData = {
      ...preferences,
      timestamp: new Date().toISOString(),
    }

    localStorage.setItem("cookie-consent", JSON.stringify(consentData))

    // Aplicar preferências
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: preferences.analytics ? "granted" : "denied",
        ad_storage: preferences.marketing ? "granted" : "denied",
        functionality_storage: preferences.functional ? "granted" : "denied",
        personalization_storage: preferences.functional ? "granted" : "denied",
      })
    }

    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg",
        className,
      )}
    >
      <Card className="max-w-6xl mx-auto p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Cookie className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-semibold">Valorizamos sua privacidade</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {!showDetails ? (
          <>
            <p className="text-sm text-muted-foreground mb-6 max-w-4xl">
              Utilizamos cookies para aprimorar sua experiência de navegação, exibir anúncios ou conteúdo personalizado
              e analisar nosso tráfego. Ao clicar em "Aceitar todos", você concorda com nosso uso de cookies. Você pode
              gerenciar suas preferências a qualquer momento.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90">
                Aceitar todos
              </Button>
              <Button variant="outline" onClick={handleRejectAll}>
                Rejeitar
              </Button>
              <Button
                variant="ghost"
                onClick={() => setShowDetails(true)}
                className="text-white"
              >
                <Settings className="w-4 h-4 mr-2" />
                Personalizar
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Cookies Necessários</h4>
                      <p className="text-xs text-muted-foreground">Essenciais para o funcionamento do site</p>
                    </div>
                    <div className="text-sm text-muted-foreground">Sempre ativo</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Cookies de Análise</h4>
                      <p className="text-xs text-muted-foreground">Nos ajudam a entender como você usa o site</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Cookies de Marketing</h4>
                      <p className="text-xs text-muted-foreground">Para personalizar anúncios e conteúdo</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Cookies Funcionais</h4>
                      <p className="text-xs text-muted-foreground">Para funcionalidades avançadas do site</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={handleSavePreferences} className="bg-primary hover:bg-primary/90">
                Salvar preferências
              </Button>
              <Button variant="outline" onClick={() => setShowDetails(false)}>
                Voltar
              </Button>
            </div>
          </>
        )}

        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Para mais informações, consulte nossa{" "}
            <a href="/politica-de-privacidade" className="text-primary hover:underline">
              Política de Privacidade
            </a>
            . Você pode alterar suas preferências a qualquer momento.
          </p>
        </div>
      </Card>
    </div>
  )
}
