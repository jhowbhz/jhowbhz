"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Smartphone, Zap } from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: "Dashboard de controle",
    description: "Controle todo seu consumo de APIs, dados, servidores, dispositivos, requisições em um único local",
  },
  {
    icon: Smartphone,
    title: "Gestão de dispositivos",
    description:
      "Área exclusiva para gestão de todos os dispositivos conectados em suas APIs com bloqueio de firewall incluso",
  },
  {
    icon: Zap,
    title: "Integração simples",
    description:
      "Com a APIBRASIL, você pode ter acesso a mais de 120 serviços de APIs em um único local de forma simples",
  },
]

export default function ControlSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Tenha controle total</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mais de <span className="text-green-600">120 serviços de API</span>
            <br />
            em uma única plataforma
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Com uma <span className="font-semibold text-gray-900">única integração simples</span> você tem acesso a
            vários serviços de APIs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg animate-scale-in h-full"
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors">
                  <feature.icon className="w-8 h-8 text-gray-600 group-hover:text-green-600 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex-shrink-0">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
