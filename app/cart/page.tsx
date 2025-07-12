"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, ChevronLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import AnimationObserver from "@/components/animation-observer"

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = () => {
    setIsCheckingOut(true)
    // Simulate checkout process
    setTimeout(() => {
      clearCart()
      setIsCheckingOut(false)
      // In a real app, you would redirect to checkout or confirmation page
    }, 2000)
  }

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-16 min-h-[70vh] flex flex-col items-center justify-center">
        <AnimationObserver className="fade-in">
          <div className="text-center">
            <ShoppingBag className="h-16 w-16 mx-auto mb-6 text-gray-300" />
            <h1 className="text-3xl md:text-4xl mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8 max-w-md">
              Looks like you haven't added any items to your cart yet. Browse our collection to find something you'll
              love.
            </p>
            <Button asChild size="lg">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </AnimationObserver>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <AnimationObserver className="fade-in">
          <h1 className="text-3xl md:text-4xl mb-8">Your Cart</h1>
        </AnimationObserver>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimationObserver className="fade-in">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 text-sm font-medium">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                <Separator />

                {items.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-6 flex items-center">
                        <div className="w-20 h-20 relative rounded-md overflow-hidden flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium">{item.name}</h3>
                          {item.options && (
                            <div className="text-sm text-gray-500 mt-1">
                              {Object.entries(item.options).map(([key, value]) => (
                                <div key={key}>
                                  {key}: {value}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="md:col-span-2 flex md:justify-center">
                        <div className="md:hidden text-sm text-gray-500 mr-2">Price:</div>
                        <div>${item.price.toFixed(2)}</div>
                      </div>

                      <div className="md:col-span-2 flex md:justify-center items-center">
                        <div className="md:hidden text-sm text-gray-500 mr-2">Quantity:</div>
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            -
                          </Button>
                          <span className="mx-2 w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>

                      <div className="md:col-span-2 flex justify-between md:justify-end items-center">
                        <div className="md:hidden text-sm text-gray-500 mr-2">Total:</div>
                        <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-red-500 ml-4"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center">
                <Button asChild variant="outline">
                  <Link href="/shop" className="flex items-center">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>

                <Button variant="ghost" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </AnimationObserver>
          </div>

          <div className="lg:col-span-1">
            <AnimationObserver className="fade-in">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{subtotal >= 50 ? "Free" : "$5.00"}</span>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${(subtotal + (subtotal >= 50 ? 0 : 5)).toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="coupon" className="block text-sm font-medium">
                      Coupon Code
                    </label>
                    <div className="flex">
                      <Input id="coupon" placeholder="Enter code" className="rounded-r-none" />
                      <Button variant="outline" className="rounded-l-none">
                        Apply
                      </Button>
                    </div>
                  </div>

                  <Button className="w-full" size="lg" onClick={handleCheckout} disabled={isCheckingOut}>
                    {isCheckingOut ? "Processing..." : "Checkout"}
                  </Button>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </div>
    </div>
  )
}
