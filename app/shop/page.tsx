import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Suspense } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "@/components/product-card"
import AnimationObserver from "@/components/animation-observer"

// Expanded product data reflecting the comprehensive range
const products = [
  // Custom Collection
  {
    id: "custom-name-bracelet",
    name: "Custom Name Bracelet",
    description: "Personalized with your chosen name or meaningful word.",
    price: 24.99,
    image: "/placeholder.svg?height=500&width=500&text=Custom+Name",
    category: "custom",
  },
  {
    id: "initial-charm-bracelet",
    name: "Initial Charm Bracelet",
    description: "Elegant bracelet featuring your personal initial.",
    price: 26.99,
    image: "/placeholder.svg?height=500&width=500&text=Initial+Charm",
    category: "custom",
  },
  {
    id: "custom-date-bracelet",
    name: "Custom Date Bracelet",
    description: "Commemorate special dates with elegant number charms.",
    price: 28.99,
    image: "/placeholder.svg?height=500&width=500&text=Date+Bracelet",
    category: "custom",
  },

  // Birthstone Collection
  {
    id: "birthstone-january",
    name: "January Birthstone - Garnet",
    description: "Deep red garnet stones in an elegant setting.",
    price: 32.99,
    image: "/placeholder.svg?height=500&width=500&text=Garnet",
    category: "birthstone",
  },
  {
    id: "birthstone-april",
    name: "April Birthstone - Diamond",
    description: "Sparkling diamond accents for April babies.",
    price: 45.99,
    image: "/placeholder.svg?height=500&width=500&text=Diamond",
    category: "birthstone",
  },
  {
    id: "birthstone-september",
    name: "September Birthstone - Sapphire",
    description: "Beautiful blue sapphire in a delicate setting.",
    price: 38.99,
    image: "/placeholder.svg?height=500&width=500&text=Sapphire",
    category: "birthstone",
  },

  // Friendship Collection
  {
    id: "friendship-infinity-set",
    name: "Friendship Infinity Set",
    description: "Matching infinity symbol bracelets for best friends.",
    price: 42.99,
    image: "/placeholder.svg?height=500&width=500&text=Infinity+Set",
    category: "friendship",
  },
  {
    id: "friendship-heart-set",
    name: "Friendship Heart Set",
    description: "Two halves of a heart that complete each other.",
    price: 39.99,
    image: "/placeholder.svg?height=500&width=500&text=Heart+Set",
    category: "friendship",
  },
  {
    id: "friendship-coordinates",
    name: "Friendship Coordinates",
    description: "Matching bracelets with meaningful location coordinates.",
    price: 46.99,
    image: "/placeholder.svg?height=500&width=500&text=Coordinates",
    category: "friendship",
  },

  // Charm Collection
  {
    id: "charm-bracelet-starter",
    name: "Charm Bracelet Starter",
    description: "Begin your charm collection with this elegant base.",
    price: 28.99,
    image: "/placeholder.svg?height=500&width=500&text=Charm+Starter",
    category: "charm",
  },
  {
    id: "travel-charm-set",
    name: "Travel Charm Set",
    description: "Collection of travel-themed charms for adventurers.",
    price: 35.99,
    image: "/placeholder.svg?height=500&width=500&text=Travel+Charms",
    category: "charm",
  },
  {
    id: "hobby-charm-collection",
    name: "Hobby Charm Collection",
    description: "Express your passions with hobby-themed charms.",
    price: 33.99,
    image: "/placeholder.svg?height=500&width=500&text=Hobby+Charms",
    category: "charm",
  },

  // Minimalist Collection
  {
    id: "minimalist-sage-cord",
    name: "Minimalist Sage Cord",
    description: "Simple elegance with our signature sage green cord.",
    price: 18.99,
    image: "/placeholder.svg?height=500&width=500&text=Sage+Cord",
    category: "minimalist",
  },
  {
    id: "delicate-chain-bracelet",
    name: "Delicate Chain Bracelet",
    description: "Ultra-fine chain for understated elegance.",
    price: 22.99,
    image: "/placeholder.svg?height=500&width=500&text=Delicate+Chain",
    category: "minimalist",
  },

  // Special Occasions
  {
    id: "graduation-celebration",
    name: "Graduation Celebration",
    description: "Mark this milestone with a special commemorative piece.",
    price: 34.99,
    image: "/placeholder.svg?height=500&width=500&text=Graduation",
    category: "occasions",
  },
  {
    id: "sweet-sixteen-special",
    name: "Sweet Sixteen Special",
    description: "A beautiful piece to celebrate turning sixteen.",
    price: 41.99,
    image: "/placeholder.svg?height=500&width=500&text=Sweet+16",
    category: "occasions",
  },
]

export default function ShopPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h1 className="text-4xl md:text-5xl text-center mb-6">Our Jewelry Collection</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Discover handcrafted pieces designed specifically for kids, teens, and young adults. Each piece is
              personally created by Grace with love, attention to detail, and a commitment to quality.
            </p>
          </AnimationObserver>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <AnimationObserver className="fade-in" delay={0}>
              <Link href="/shop?category=custom" className="group">
                <div className="bg-sage/10 rounded-lg p-4 text-center hover:bg-sage/20 transition-colors">
                  <div className="text-2xl mb-2">✨</div>
                  <h3 className="font-medium text-sm">Custom</h3>
                </div>
              </Link>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <Link href="/shop?category=birthstone" className="group">
                <div className="bg-sage/10 rounded-lg p-4 text-center hover:bg-sage/20 transition-colors">
                  <div className="text-2xl mb-2">💎</div>
                  <h3 className="font-medium text-sm">Birthstones</h3>
                </div>
              </Link>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <Link href="/shop?category=friendship" className="group">
                <div className="bg-sage/10 rounded-lg p-4 text-center hover:bg-sage/20 transition-colors">
                  <div className="text-2xl mb-2">👭</div>
                  <h3 className="font-medium text-sm">Friendship</h3>
                </div>
              </Link>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={300}>
              <Link href="/shop?category=charm" className="group">
                <div className="bg-sage/10 rounded-lg p-4 text-center hover:bg-sage/20 transition-colors">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-medium text-sm">Charms</h3>
                </div>
              </Link>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={400}>
              <Link href="/shop?category=occasions" className="group">
                <div className="bg-sage/10 rounded-lg p-4 text-center hover:bg-sage/20 transition-colors">
                  <div className="text-2xl mb-2">🎉</div>
                  <h3 className="font-medium text-sm">Occasions</h3>
                </div>
              </Link>
            </AnimationObserver>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="w-full md:w-auto">
              <Input type="search" placeholder="Search for the perfect piece..." className="max-w-sm" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="custom">Custom Pieces</SelectItem>
                  <SelectItem value="birthstone">Birthstones</SelectItem>
                  <SelectItem value="friendship">Friendship Sets</SelectItem>
                  <SelectItem value="charm">Charm Bracelets</SelectItem>
                  <SelectItem value="minimalist">Minimalist</SelectItem>
                  <SelectItem value="occasions">Special Occasions</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <Suspense fallback={<p>Loading beautiful pieces...</p>}>
              {products.map((product, index) => (
                <ProductCard key={product.id} {...product} delay={index * 50} />
              ))}
            </Suspense>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <AnimationObserver className="fade-in">
              <h3 className="text-2xl mb-4">Don't see exactly what you're looking for?</h3>
              <p className="text-gray-600 mb-6">
                Grace loves creating custom pieces! Share your vision and let's bring it to life together.
              </p>
              <Button asChild size="lg">
                <Link href="/custom">Create Custom Piece</Link>
              </Button>
            </AnimationObserver>
          </div>
        </div>
      </section>
    </>
  )
}
