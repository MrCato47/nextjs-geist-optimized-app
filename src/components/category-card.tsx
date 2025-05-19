"use client"

import { Card } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  image?: string
  onClick?: () => void
}

export function CategoryCard({ title, image, onClick }: CategoryCardProps) {
  return (
    <Card 
      className="p-4 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
      onClick={onClick}
    >
      {image ? (
        <img src={image} alt={title} className="h-16 w-16 object-contain mb-3" />
      ) : (
        <div className="h-16 w-16 bg-black/5 flex items-center justify-center rounded-full mb-3 group-hover:bg-black/10 transition-colors">
          <span className="text-xl font-semibold text-black/70 group-hover:text-black transition-colors">
            {title.charAt(0)}
          </span>
        </div>
      )}
      <span className="font-medium text-sm text-center mt-2 group-hover:text-black transition-colors">
        {title}
      </span>
    </Card>
  )
}
