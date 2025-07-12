import { Suspense } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "@/components/product-card"
import AnimationObserver from "@/components/animation-observer"

// Sample product data
const products = [
  {
    id: "custom-name-bracelet",
    name: "Custom Name Bracelet",
    description: "Personalized bracelet with your name or word of choice.",
    price: 24.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "custom",
  },
  {
    id: "friendship-set",
    name: "Friendship Set",
    description: "Set of two matching bracelets to share with a friend.",
    price: 36.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "sets",
  },
  {
    id: "minimalist-sage-cord",
    name: "Minimalist Sage-Green Cord",
    description: "Simple elegance with adjustable sage green cord.",
    price: 18.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "minimalist",
  },
  {
    id: "rainbow-crystal-charm",
    name: "Rainbow Crystal Charm",
    description: "Bracelet with colorful crystal charms for positive energy.",
    price: 29.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "charm",
  },
  {
    id: "beaded-heart-bracelet",
    name: "Beaded Heart Bracelet",
    description: "Delicate beaded bracelet with heart charm.",
    price: 22.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "charm",
  },
  {
    id: "pastel-dream-bracelet",
    name: "Pastel Dream Bracelet",
    description: "Soft pastel beads in a dreamy pattern.",
    price: 19.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "beaded",
  },
  {
    id: "summer-vibes-set",
    name: "Summer Vibes Set",
    description: "Set of three bracelets perfect for summer.",
    price: 42.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "sets",
  },
  {
    id: "initial-charm-bracelet",
    name: "Initial Charm Bracelet",
    description: "Elegant bracelet with your initial charm.",
    price: 26.99,
    image: "/placeholder.svg?height=500&width=500",
    category: "custom",
  },
]

export default function ShopPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h1 className="text-4xl md:text-5xl text-center mb-6">Shop Our Collection</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Browse our handcrafted bracelets, each made with love and attention to detail. Find the perfect piece to
              express your unique style.
            </p>
          </AnimationObserver>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="w-full md:w-auto">
              <Input type="search" placeholder="Search bracelets..." className="max-w-sm" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                  <SelectItem value="sets">Sets</SelectItem>
                  <SelectItem value="charm">Charm</SelectItem>
                  <SelectItem value="beaded">Beaded</SelectItem>
                  <SelectItem value="minimalist">Minimalist</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <Suspense fallback={<p>Loading products...</p>}>
              {products.map((product, index) => (
                <ProductCard key={product.id} {...product} delay={index * 50} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
