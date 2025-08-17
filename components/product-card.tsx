import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimationObserver from "@/components/animation-observer"

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
  delay?: number
}

export default function ProductCard({ id, name, description, price, image, delay = 0 }: ProductCardProps) {
  return (
    <AnimationObserver className="fade-in" delay={delay}>
      <div className="group bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <Link href={`/shop/${id}`} className="block relative overflow-hidden aspect-square">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </Link>
        <div className="p-4">
          <Link href={`/shop/${id}`}>
            <h3 className="text-base mb-2 font-medium transition-colors hover:text-sage leading-tight">{name}</h3>
          </Link>
          <p className="text-gray-600 text-xs mb-3 line-clamp-2 leading-relaxed">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-base font-medium">${price.toFixed(2)}</span>
            <Button size="sm" variant="outline" className="rounded-full h-8 w-8 p-0 bg-transparent">
              <ShoppingBag className="h-3 w-3" />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
        </div>
      </div>
    </AnimationObserver>
  )
}
