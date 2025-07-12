"use client"

import { useState } from "react"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart-provider"

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    price: number
    image: string
  }
  className?: string
}

export default function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate a slight delay for better UX
    setTimeout(() => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      })

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
        duration: 3000,
      })

      setIsAdding(false)
    }, 600)
  }

  return (
    <Button onClick={handleAddToCart} disabled={isAdding} className={className}>
      {isAdding ? (
        "Adding..."
      ) : (
        <>
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Cart
        </>
      )}
    </Button>
  )
}
