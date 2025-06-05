"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, FileText, Mail, MapPin, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react"

const apis = [
  {
    icon: MessageSquare,
    title: "API WhatsApp",
    description: "Requests ilimitados com mais de 72 funções para envio e recebimento",
    color: "text-green-600",
  },
  {
    icon: FileText,
    title: "API CNPJ",
    description: "Consulte dados completos de empresas brasileiras",
    color: "text-blue-600",
  },
  {
    icon: Mail,
    title: "API SMS Short",
    description: "Envio de SMS com números curtos para alta conversão",
    color: "text-purple-600",
  },
  {
    icon: MapPin,
    title: "API Correios",
    description: "Rastreamento e consulta de CEPs com dados completos",
    color: "text-orange-600",
  },
  {
    icon: Shield,
    title: "API Antifraude",
    description: "Proteja seu negócio com verificações avançadas",
    color: "text-red-600",
  },
  {
    icon: Zap,
    title: "E mais de 120 APIs",
    description: "Acesso a um ecossistema completo de serviços",
    color: "text-yellow-600",
  },
]

const benefits = [
  "Feito de desenvolvedores para desenvolvedores",
  "Documentação Postman completa",
  "SDK de integração em 5 linguagens",
  "Exemplos de códigos e softwares grátis",
  "Suporte técnico especializado",
  "Uptime de 99.9% garantido",
]

export default function FeaturesSection() {
  return (
    <section id="apis" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            DIVERSAS INTEGRAÇÕES DE API EM 1 ÚNICO LOCAL
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Monte seu plano de acordo com a sua demanda <span className="text-green-600">à partir de R$ 19</span> por
            mês
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Requests ilimitados para a API do WhatsApp, com mais de 72 funções para envio e recebimento de textos,
            arquivos e botões em listas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {apis.map((api, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 animate-scale-in border-0 shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors ${api.color}`}>
                    <api.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{api.title}</h3>
                    <p className="text-gray-600 text-sm">{api.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Torne seu software mais inteligente agora mesmo!
              </h3>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                E mais de 120 API's
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Comece AGORA!</h4>
                <p className="mb-6">Aproveite nossos serviços de API Rest para dar vida aos seus projetos</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">120+</div>
                    <div className="text-sm opacity-90">APIs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm opacity-90">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Suporte</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
