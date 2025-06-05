"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

interface Screenshot {
  src: string
  alt: string
}

const screenshots: Screenshot[] = [
  { src: "/images/screenshots/dashboard-home.png", alt: "Dashboard Principal APIBrasil" },
  { src: "/images/screenshots/dashboard-devices.png", alt: "Gerenciamento de Dispositivos APIBrasil" },
  { src: "/images/screenshots/dashboard-my-apis.png", alt: "Controle de APIs APIBrasil" },
  { src: "/images/screenshots/dashboard-my-plan.png", alt: "Gerenciamento de Plano APIBrasil" },
  { src: "/images/screenshots/dashboard-recharge-modal.png", alt: "Modal de Recarga APIBrasil" },
]

export default function ScreenshotCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const plugin = React.useRef(Autoplay({ delay: 3800, stopOnInteraction: true }))

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
    api.on("reinit", () => {
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full relative group">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full overflow-hidden"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
          {screenshots.map((screenshot, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "pl-1 sm:pl-2 md:pl-4 basis-full sm:basis-5/6 md:basis-4/5 lg:basis-3/4 xl:basis-2/3",
                "transition-all duration-500 ease-out",
                index === current ? "opacity-100 scale-100" : "opacity-60 scale-90 sm:scale-85 md:scale-80",
              )}
            >
              <div
                className={cn(
                  "aspect-[16/9] overflow-hidden rounded-lg md:rounded-xl shadow-2xl bg-background/70 backdrop-blur-sm",
                  "border border-border/30",
                  index === current ? "shadow-primary/20" : "shadow-black/30",
                )}
              >
                <Image
                  src={screenshot.src || "/placeholder.svg"}
                  alt={screenshot.alt}
                  width={1200}
                  height={675}
                  className={cn(
                    "object-contain w-full h-full transition-transform duration-700 ease-in-out",
                    index === current ? "scale-100" : "scale-100",
                  )}
                  priority={index === 0 || index === current}
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = "/placeholder.svg?height=675&width=1200&text=Dashboard+APIBrasil"
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="absolute left-0 sm:left-1 md:left-2 top-1/2 -translate-y-1/2 z-20
                     bg-background/50 hover:bg-background/80 text-foreground
                     opacity-0 group-hover:opacity-100 transition-all duration-300
                     disabled:opacity-0 scale-75 sm:scale-85 md:scale-90 hover:scale-100 p-1.5 sm:p-2 rounded-full"
        />
        <CarouselNext
          className="absolute right-0 sm:right-1 md:right-2 top-1/2 -translate-y-1/2 z-20
                     bg-background/50 hover:bg-background/80 text-foreground
                     opacity-0 group-hover:opacity-100 transition-all duration-300
                     disabled:opacity-0 scale-75 sm:scale-85 md:scale-90 hover:scale-100 p-1.5 sm:p-2 rounded-full"
        />
      </Carousel>
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {Array.from({ length: count }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => api?.scrollTo(idx)}
            className={cn(
              "h-1.5 w-1.5 rounded-full transition-all duration-300 ease-out",
              idx === current
                ? "w-4 sm:w-5 bg-primary scale-110"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60",
            )}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
