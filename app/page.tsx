import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimationObserver from "@/components/animation-observer"
import ProductCard from "@/components/product-card"

// Sample product data
const featuredProducts = [
  {
    id: "custom-name-bracelet",
    name: "Custom Name Bracelet",
    description: "Personalized bracelet with your name or word of choice.",
    price: 24.99,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "friendship-set",
    name: "Friendship Set",
    description: "Set of two matching bracelets to share with a friend.",
    price: 36.99,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "minimalist-sage-cord",
    name: "Minimalist Sage-Green Cord",
    description: "Simple elegance with adjustable sage green cord.",
    price: 18.99,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "rainbow-crystal-charm",
    name: "Rainbow Crystal Charm",
    description: "Bracelet with colorful crystal charms for positive energy.",
    price: 29.99,
    image: "/placeholder.svg?height=500&width=500",
  },
]

// Sample testimonials
const testimonials = [
  {
    id: 1,
    text: "My daughter and her BFF adore their matching bracelets! The quality is amazing and they haven't taken them off since they arrived. Such a special gift.",
    name: "Sarah M.",
    initial: "S",
  },
  {
    id: 2,
    text: "Wearing mine every day. So well made and beautiful. Everyone asks where I got it. Love telling them it's handmade by a talented teen entrepreneur!",
    name: "Ariana, 19",
    initial: "A",
  },
  {
    id: 3,
    text: "Grace created a custom name bracelet for my niece's 16th birthday. Not only was the bracelet beautiful, but the personalized touch made it extra special. Will definitely order again!",
    name: "Jennifer K.",
    initial: "J",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-cream flex items-center pt-24 md:pt-0 py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimationObserver className="fade-in">
              <h1 className="text-4xl md:text-6xl mb-6">Wear Your Story</h1>
              <p className="text-gray-600 text-lg mb-8">
                Handcrafted bracelets by Grace – blending elegance, joy, and a touch of magic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/shop">Shop the Collection</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/custom">Customize Yours</Link>
                </Button>
              </div>
            </AnimationObserver>
            <AnimationObserver className="slide-in-right order-first md:order-last">
              <div className="relative">
                <div className="bg-sage/30 absolute -top-12 -right-12 w-36 h-36 rounded-full animate-float"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Bracelet stack on a sage green background"
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-auto relative z-10 shadow-xl"
                />
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* About Grace Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimationObserver className="slide-in-left">
              <div className="relative">
                <div className="bg-rose/20 absolute -bottom-6 -left-6 w-24 h-24 rounded-full"></div>
                <Image
                  src="/images/grace-profile.jpeg"
                  alt="Grace, the creator of Amore Via Grace"
                  width={500}
                  height={500}
                  className="rounded-full w-full max-w-md h-auto mx-auto shadow-lg border-4 border-white object-cover"
                  priority
                />
              </div>
            </AnimationObserver>
            <AnimationObserver className="fade-in">
              <h2 className="text-2xl md:text-3xl mb-6">Meet Grace</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hi, I'm Grace – a teen creator passionate about crafting bracelets that spread love, friendship, and
                positive vibes. Every piece is made by hand, just for you.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                "Amore Via Grace" means "Love through Grace" – representing the personal, heartfelt touch in every
                custom piece I create. I believe accessories should tell your unique story.
              </p>
              <Button asChild size="lg">
                <Link href="/process">See How It's Made</Link>
              </Button>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="shop" className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-center mb-16">Our Bestsellers</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} delay={index * 100} />
            ))}
          </div>

          <div className="text-center mt-12">
            <AnimationObserver className="fade-in">
              <Button asChild size="lg">
                <Link href="/shop">View All</Link>
              </Button>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Customization Journey Section */}
      <section id="custom" className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-center mb-16">Made for You</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimationObserver className="fade-in" delay={0}>
              <div className="relative pl-12 pb-12 md:pb-0">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="absolute left-5 top-10 h-full w-0.5 bg-sage/30 md:hidden"></div>
                <h3 className="text-xl mb-3">Imagine It 💭</h3>
                <p className="text-gray-600">
                  Envision your ideal bracelet. Consider colors, charms, and your personal story.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="relative pl-12 pb-12 md:pb-0">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="absolute left-5 top-10 h-full w-0.5 bg-sage/30 md:hidden"></div>
                <h3 className="text-xl mb-3">Share It 💬</h3>
                <p className="text-gray-600">Send us your ideas. We'll work together to refine your perfect design.</p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <div className="relative pl-12 pb-12 md:pb-0">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="absolute left-5 top-10 h-full w-0.5 bg-sage/30 md:hidden"></div>
                <h3 className="text-xl mb-3">Crafted by Hand 🧵</h3>
                <p className="text-gray-600">
                  Grace creates your one-of-a-kind piece with care and attention to detail.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={300}>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-xl mb-3">Delivered with Love 📦</h3>
                <p className="text-gray-600">
                  Your bracelet arrives in eco-friendly packaging, ready to tell your story.
                </p>
              </div>
            </AnimationObserver>
          </div>

          <div className="text-center mt-16">
            <AnimationObserver className="fade-in">
              <Button asChild size="lg">
                <Link href="/custom">Design Yours Now</Link>
              </Button>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-center mb-16">Bracelet Love 💕</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimationObserver key={testimonial.id} className="fade-in" delay={index * 100}>
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-sage"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.initial}
                    </div>
                    <span className="font-medium">{testimonial.name}</span>
                  </div>
                </div>
              </AnimationObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-center mb-6">Follow Our Journey</h2>
            <p className="text-gray-600 text-center mb-12">@graces_handmadebracelets</p>
          </AnimationObserver>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[1, 2, 3, 4].map((item, index) => (
              <AnimationObserver key={item} className="fade-in" delay={index * 100}>
                <div className="relative aspect-square overflow-hidden rounded-md group">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Instagram+${item}`}
                    alt={`Instagram post ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </div>
              </AnimationObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-sage py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-5xl text-white mb-8">Let's Create Something Beautiful Together.</h2>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white hover:bg-cream text-sage hover:text-sage-dark"
            >
              <Link href="/custom">Start Your Custom Order</Link>
            </Button>
          </AnimationObserver>
        </div>
      </section>
    </>
  )
}
