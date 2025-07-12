import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, ChevronRight, Truck, RotateCcw, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AnimationObserver from "@/components/animation-observer"
import AddToCartButton from "@/components/add-to-cart-button"

// Sample product data - expanded to include all products from shop page
const products = [
  {
    id: "custom-name-bracelet",
    name: "Custom Name Bracelet",
    description: "Personalized bracelet with your name or word of choice.",
    fullDescription:
      "This beautiful personalized bracelet is handcrafted with care and attention to detail. Choose your favorite color combination and add your name, a special word, or a meaningful date. Each letter is carefully placed to create a unique piece that tells your story. Perfect for everyday wear or as a thoughtful gift.",
    price: 24.99,
    image: "/placeholder.svg?height=800&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=800&text=Image+1",
      "/placeholder.svg?height=800&width=800&text=Image+2",
      "/placeholder.svg?height=800&width=800&text=Image+3",
      "/placeholder.svg?height=800&width=800&text=Image+4",
    ],
    options: {
      colors: ["Sage Green", "Pastel Pink", "Sky Blue", "Lavender", "Natural"],
      sizes: ['Child (5-8")', 'Youth (6-9")', 'Adult (7-10")'],
    },
    category: "custom",
    reviews: {
      average: 4.8,
      count: 124,
    },
  },
  {
    id: "friendship-set",
    name: "Friendship Set",
    description: "Set of two matching bracelets to share with a friend.",
    fullDescription:
      "Celebrate your special bond with our Friendship Set. This set includes two matching bracelets, perfect for sharing with your bestie. Each bracelet is carefully handcrafted with high-quality materials and can be customized with your choice of colors. A beautiful way to keep your friendship close, even when you're apart.",
    price: 36.99,
    image: "/placeholder.svg?height=800&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=800&text=Image+1",
      "/placeholder.svg?height=800&width=800&text=Image+3",
    ],
    options: {
      colors: ["Matching", "Complementary"],
      styles: ["Classic", "Heart Charm", "Infinity Symbol"],
    },
    category: "sets",
    reviews: {
      average: 4.9,
      count: 86,
    },
  },
  {
    id: "minimalist-sage-cord",
    name: "Minimalist Sage-Green Cord",
    description: "Simple elegance with adjustable sage green cord.",
    fullDescription:
      "Embrace minimalist beauty with our signature sage-green cord bracelet. This understated piece features a soft, adjustable cord in our signature sage green color. Perfect for everyday wear, it pairs beautifully with any outfit while adding a subtle touch of natural elegance. The adjustable design ensures a comfortable fit for any wrist size.",
    price: 18.99,
    image: "/placeholder.svg?height=800&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=800&text=Image+1",
      "/placeholder.svg?height=800&width=800&text=Image+2",
      "/placeholder.svg?height=800&width=800&text=Image+3",
    ],
    options: {
      sizes: ['Child (5-8")', 'Youth (6-9")', 'Adult (7-10")'],
      styles: ["Simple Cord", "With Small Charm"],
    },
    category: "minimalist",
    reviews: {
      average: 4.7,
      count: 92,
    },
  },
  {
    id: "rainbow-crystal-charm",
    name: "Rainbow Crystal Charm",
    description: "Bracelet with colorful crystal charms for positive energy.",
    fullDescription:
      "Brighten your day with our Rainbow Crystal Charm bracelet. Featuring carefully selected colorful crystal beads, this bracelet is designed to bring positive energy and joy to your daily life. Each crystal is chosen for its vibrant color and believed metaphysical properties, creating a beautiful and meaningful accessory.",
    price: 29.99,
    image: "/placeholder.svg?height=800&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=800&text=Image+1",
      "/placeholder.svg?height=800&width=800&text=Image+2",
      "/placeholder.svg?height=800&width=800&text=Image+3",
    ],
    options: {
      colors: ["Full Rainbow", "Pastel Rainbow", "Warm Tones", "Cool Tones"],
      sizes: ['Child (5-8")', 'Youth (6-9")', 'Adult (7-10")'],
    },
    category: "charm",
    reviews: {
      average: 4.6,
      count: 78,
    },
  },
  {
    id: "beaded-heart-bracelet",
    name: "Beaded Heart Bracelet",
    description: "Delicate beaded bracelet with heart charm.",
    fullDescription:
      "Express your love with our delicate Beaded Heart Bracelet. This charming piece features carefully selected beads in soft, romantic colors, finished with a beautiful heart charm. Perfect for gifting to someone special or treating yourself to a reminder of self-love and positivity.",
    price: 22.99,
    image: "/placeholder.svg?height=800&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=800&text=Image+1",
      "/placeholder.svg?height=800&width=800&text=Image+2",
      "/placeholder.svg?height=800&width=800&text=Image+3",
    ],
    options: {
      colors: ["Rose Pink", "Lavender", "Pearl White", "Sage Green"],
      sizes: ['Child (5-8")', 'Youth (6-9")', 'Adult (7-10")'],
    },
    category: "charm",
    reviews: {
      average: 4.8,
      count: 156,
    },
  },
  {
    id: "pastel-dream-bracelet",
    name: "Pastel Dream Bracelet",
    description: "Soft pastel beads in a dreamy pattern.",
    fullDescription:
      "Drift into a pastel dream with this enchanting bracelet featuring soft, dreamy colors. Each bead is carefully selected for its gentle hue and smooth finish, creating a piece that feels like wearing a cloud. Perfect for adding a touch of whimsy and softness to any outfit.",
    price: 19.99,
    image: "/placeholder.svg?height=800&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=800&text=Image+1",
      "/placeholder.svg?height=800&width=800&text=Image+2",
      "/placeholder.svg?height=800&width=800&text=Image+3",
    ],
    options: {
      colors: ["Mixed Pastels", "Pink Tones", "Blue Tones", "Purple Tones"],
      sizes: ['Child (5-8")', 'Youth (6-9")', 'Adult (7-10")'],
    },
    category: "beaded",
    reviews: {
      average: 4.5,
      count: 67,
    },
  },
  {
    id: "summer-vibes-set",
    name: "Summer Vibes Set",
    description: "Set of three bracelets perfect for summer.",
    fullDescription:
      "Capture the essence of summer with this vibrant set of three coordinating bracelets. Each piece in the set complements the others while standing beautifully on its own. Mix and match or wear all three together for the ultimate summer statement. Perfect for beach days, festivals, or any sunny adventure.",
    price: 42.99,
    image: "/placeholder.svg?height=800&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=800&text=Image+1",
      "/placeholder.svg?height=800&width=800&text=Image+2",
      "/placeholder.svg?height=800&width=800&text=Image+3",
    ],
    options: {
      colors: ["Tropical", "Ocean Blues", "Sunset", "Garden Party"],
      sizes: ['Child (5-8")', 'Youth (6-9")', 'Adult (7-10")'],
    },
    category: "sets",
    reviews: {
      average: 4.7,
      count: 89,
    },
  },
  {
    id: "initial-charm-bracelet",
    name: "Initial Charm Bracelet",
    description: "Elegant bracelet with your initial charm.",
    fullDescription:
      "Make it personal with our elegant Initial Charm Bracelet. Choose your initial or that of someone special to create a meaningful piece that's uniquely yours. The charm is beautifully crafted and sits perfectly on a delicate chain or cord, creating an accessory that's both personal and stylish.",
    price: 26.99,
    image: "/placeholder.svg?height=800&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=800&text=Image+1",
      "/placeholder.svg?height=800&width=800&text=Image+2",
      "/placeholder.svg?height=800&width=800&text=Image+3",
    ],
    options: {
      initials: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      colors: ["Gold", "Silver", "Rose Gold", "Sage Green"],
      sizes: ['Child (5-8")', 'Youth (6-9")', 'Adult (7-10")'],
    },
    category: "custom",
    reviews: {
      average: 4.9,
      count: 134,
    },
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params?.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-sage">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/shop" className="hover:text-sage">
            Shop
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-700">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <AnimationObserver className="slide-in-left">
            <div className="sticky top-24">
              <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.gallery?.map((img, index) => (
                  <div key={index} className="aspect-square relative rounded-md overflow-hidden cursor-pointer">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimationObserver>

          {/* Product Details */}
          <AnimationObserver className="slide-in-right">
            <div>
              <h1 className="text-3xl md:text-4xl mb-2">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.reviews.average) ? "text-sage fill-sage" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product.reviews.average} ({product.reviews.count} reviews)
                </span>
              </div>

              <div className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</div>

              <p className="text-gray-600 mb-8">{product.fullDescription}</p>

              <form className="space-y-6 mb-8">
                {product.options?.colors && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Color</label>
                    <Select defaultValue={product.options.colors[0]}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.options.colors.map((color) => (
                          <SelectItem key={color} value={color}>
                            {color}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {product.options?.sizes && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Size</label>
                    <Select defaultValue={product.options.sizes[1] || product.options.sizes[0]}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.options.sizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {product.options?.styles && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Style</label>
                    <Select defaultValue={product.options.styles[0]}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.options.styles.map((style) => (
                          <SelectItem key={style} value={style}>
                            {style}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {product.options?.initials && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Initial</label>
                    <Select defaultValue={product.options.initials[0]}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select initial" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.options.initials.map((initial) => (
                          <SelectItem key={initial} value={initial}>
                            {initial}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <AddToCartButton product={product} className="flex-1" />
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Add to Wishlist
                  </Button>
                </div>
              </form>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-sage mr-3" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center">
                  <RotateCcw className="h-5 w-5 text-sage mr-3" />
                  <span>Easy 30-day returns</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-sage mr-3" />
                  <span>Handcrafted with love and care</span>
                </div>
              </div>
            </div>
          </AnimationObserver>
        </div>
      </div>
    </div>
  )
}
