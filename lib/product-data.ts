// Updated product data reflecting Amore Via Grace's actual offerings
export interface Product {
  id: string
  name: string
  description: string
  fullDescription: string
  price: number
  image: string
  gallery?: string[]
  category: "bracelets" | "rings" | "necklaces" | "anklets" | "phone-charms" | "hair-accessories" | "custom"
  materials: string[]
  customizable: boolean
  inStock: boolean
}

export const products: Product[] = [
  // Bracelets
  {
    id: "custom-name-bracelet",
    name: "Custom Name Bracelet",
    description: "Personalized bracelet with your name or special word using colorful beads.",
    fullDescription:
      "Handcrafted with love using high-quality clay beads, pony beads, or glass beads. Each letter is carefully placed to create a unique piece that tells your story. Perfect for everyday wear or as a meaningful gift.",
    price: 24.99,
    image: "/placeholder.svg?height=800&width=800&text=Custom+Name+Bracelet",
    gallery: ["/placeholder.svg?height=800&width=800&text=Gallery+1"],
    category: "bracelets",
    materials: ["Clay beads", "Elastic string", "Letter beads"],
    customizable: true,
    inStock: true,
  },
  {
    id: "friendship-bracelet-set",
    name: "Friendship Bracelet Set",
    description: "Matching set of two bracelets to share with your bestie.",
    fullDescription:
      "Celebrate your special bond with this beautiful matching set. Each bracelet is handcrafted with complementary colors and can include personalized elements like initials or special charms.",
    price: 36.99,
    image: "/placeholder.svg?height=800&width=800&text=Friendship+Set",
    category: "bracelets",
    materials: ["Sea beads", "Glass beads", "Elastic string"],
    customizable: true,
    inStock: true,
  },

  // Rings
  {
    id: "beaded-ring-stack",
    name: "Beaded Ring Stack",
    description: "Set of three delicate beaded rings in coordinating colors.",
    fullDescription:
      "A beautiful set of three stackable rings crafted with tiny glass beads and pony beads. Mix and match or wear together for a playful, colorful look.",
    price: 18.99,
    image: "/placeholder.svg?height=800&width=800&text=Ring+Stack",
    category: "rings",
    materials: ["Glass beads", "Pony beads", "Elastic string"],
    customizable: true,
    inStock: true,
  },

  // Necklaces
  {
    id: "charm-necklace",
    name: "Custom Charm Necklace",
    description: "Delicate necklace with your choice of meaningful charms.",
    fullDescription:
      "A beautiful necklace featuring your choice of charms and beads. Perfect for layering or wearing alone as a statement piece. Each necklace is custom-made to your specifications.",
    price: 32.99,
    image: "/placeholder.svg?height=800&width=800&text=Charm+Necklace",
    category: "necklaces",
    materials: ["Sea beads", "Charms", "Clasp"],
    customizable: true,
    inStock: true,
  },

  // Anklets
  {
    id: "summer-anklet",
    name: "Summer Vibes Anklet",
    description: "Colorful anklet perfect for beach days and summer adventures.",
    fullDescription:
      "Capture the essence of summer with this vibrant anklet featuring sea beads and colorful accents. Adjustable sizing ensures a comfortable fit for any ankle.",
    price: 22.99,
    image: "/placeholder.svg?height=800&width=800&text=Summer+Anklet",
    category: "anklets",
    materials: ["Sea beads", "Clay beads", "Elastic string"],
    customizable: true,
    inStock: true,
  },

  // Phone Charms
  {
    id: "beaded-phone-charm",
    name: "Beaded Phone Charm",
    description: "Unique phone charm that adds personality to your device.",
    fullDescription:
      "Add some sparkle to your phone with this handcrafted charm featuring colorful beads and a secure attachment. Each charm is unique and can be customized with your favorite colors.",
    price: 15.99,
    image: "/placeholder.svg?height=800&width=800&text=Phone+Charm",
    category: "phone-charms",
    materials: ["Clay beads", "Glass beads", "Phone attachment"],
    customizable: true,
    inStock: true,
  },

  // Hair Accessories
  {
    id: "beaded-scrunchie",
    name: "Beaded Scrunchie",
    description: "Stylish scrunchie decorated with colorful beads.",
    fullDescription:
      "Elevate your hair game with this unique scrunchie featuring hand-sewn beads in beautiful patterns. Gentle on hair while adding a pop of color and creativity to any hairstyle.",
    price: 12.99,
    image: "/placeholder.svg?height=800&width=800&text=Beaded+Scrunchie",
    category: "hair-accessories",
    materials: ["Fabric", "Clay beads", "Elastic"],
    customizable: true,
    inStock: true,
  },
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getCustomizableProducts(): Product[] {
  return products.filter((product) => product.customizable)
}

export function getFeaturedProducts(limit = 4): Product[] {
  return products.slice(0, limit)
}
