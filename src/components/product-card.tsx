"use client"

import { Card } from "@/components/ui/card"

interface ProductCardProps {
  name: string
  description: string
  image?: string
  price?: string
  category?: string
}

export function ProductCard({ name, description, image, price, category }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl">
      <div className="aspect-square relative bg-gray-50">
        {image ? (
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-black/5">
            <span className="text-black/40">Imagen del Producto</span>
          </div>
        )}
        {category && (
          <div className="absolute top-3 left-3">
            <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
        )}
      </div>
      <div className="p-4 space-y-2 bg-white">
        <div className="min-h-[2.5rem]">
          <h3 className="font-semibold text-lg group-hover:text-black/70 transition-colors line-clamp-2">
            {name}
          </h3>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 min-h-[2.5rem]">
          {description}
        </p>
        {price && (
          <div className="pt-2 flex items-center justify-between">
            <span className="font-bold text-lg">{price}</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800">
              Ver Detalles
            </button>
          </div>
        )}
      </div>
    </Card>
  )
}
