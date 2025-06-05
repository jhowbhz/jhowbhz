"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const integrationLogos = [
  { name: "WhatsApp", src: "/images/integrations/whatsapp.webp" },
  { name: "Evolution API", src: "/images/integrations/evolution-api.webp" },
  { name: "BotConversa", src: "/images/integrations/botconversa.webp" },
  { name: "n8n", src: "/images/integrations/n8n.webp" },
  { name: "Typebot", src: "/images/integrations/typebot.webp" },
  { name: "Webhooks", src: "/images/integrations/webhooks.webp" },
  // Adding a few more common ones as placeholders to fill the marquee
  { name: "Zapier", query: "Zapier logo", src: "/placeholder.svg?height=50&width=150&bgColor=ffffff&textColor=333333" },
  {
    name: "Make.com",
    query: "Make.com logo",
    src: "/placeholder.svg?height=50&width=150&bgColor=ffffff&textColor=333333",
  },
  {
    name: "Google Sheets",
    query: "Google Sheets logo",
    src: "/placeholder.svg?height=50&width=150&bgColor=ffffff&textColor=333333",
  },
  { name: "Slack", query: "Slack logo", src: "/placeholder.svg?height=50&width=150&bgColor=ffffff&textColor=333333" },
]

// Duplicate logos for seamless marquee effect
const duplicatedLogos = [...integrationLogos, ...integrationLogos, ...integrationLogos] // Duplicated more times for smoother long scroll

export default function IntegrationsMarqueeSection() {
  return (
    <section id="integracoes" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Com a APIBRASIL é possível fazer
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-900">
            Mais de <span className="text-green-600">80 integrações</span> com
            <br />
            os melhores softwares do mercado!
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden group">
          {" "}
          {/* Added group for potential hover effects if needed */}
          <div className="flex animate-marquee-slow group-hover:pause-animation whitespace-nowrap">
            {" "}
            {/* Added group-hover:pause-animation */}
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="mx-6 md:mx-8 flex-shrink-0 flex items-center justify-center h-24" // Increased height for logos
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={`${logo.name} logo`}
                  width={160} // Adjusted width
                  height={60} // Adjusted height
                  className="max-h-12 md:max-h-14 w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-105" // Added hover scale
                  unoptimized={logo.src.includes("placeholder.svg")} // Only unoptimize placeholders
                />
              </div>
            ))}
          </div>
          {/* Gradient Fades for edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
