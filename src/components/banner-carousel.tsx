"use client"

import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface BannerCarouselProps {
  banners: string[]
}

export function BannerCarousel({ banners }: BannerCarouselProps) {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <div className="aspect-[16/5] relative bg-gray-100 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/50 to-black/25">
                  <h2 className="text-2xl md:text-3xl font-bold text-white p-4 text-center max-w-3xl">
                    {banner}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black cursor-pointer z-10" />
        <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black cursor-pointer z-10" />
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              current === index ? "bg-black w-4" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
