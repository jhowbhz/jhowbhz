"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface BrowserMockupProps {
  imageUrl: string
  altText: string
  className?: string
  aspectRatio?: string
}

export default function BrowserMockup({
  imageUrl,
  altText,
  className,
  aspectRatio = "aspect-[16/9]",
}: BrowserMockupProps) {
  return (
    <div className={cn("w-full mx-auto", className)}>
      <div className="bg-gray-800/70 backdrop-blur-md shadow-xl rounded-lg md:rounded-xl overflow-hidden border border-gray-700/50">
        <div className="h-8 md:h-10 bg-gray-700/60 flex items-center px-3 md:px-4 border-b border-gray-600/50">
          <div className="flex space-x-1.5 md:space-x-2" role="presentation">
            <span className="block w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full" aria-label="Fechar"></span>
            <span className="block w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-400 rounded-full" aria-label="Minimizar"></span>
            <span className="block w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full" aria-label="Maximizar"></span>
          </div>
          <div
            className="ml-3 md:ml-4 bg-gray-600/50 h-4 md:h-5 rounded-sm flex-grow max-w-xs md:max-w-sm opacity-50"
            role="presentation"
          ></div>
        </div>
        <div className={cn("overflow-hidden", aspectRatio)}>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={altText}
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            quality={85}
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=1080&width=1920&text=Dashboard+APIBrasil"
            }}
          />
        </div>
      </div>
    </div>
  )
}
