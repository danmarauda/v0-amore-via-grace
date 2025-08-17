import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimationObserver from "@/components/animation-observer"
import ProductCard from "@/components/product-card"
import InstagramFeed from "@/components/instagram-feed"

// Updated product data reflecting the expanded range
const featuredProducts = [
  {
    id: "custom-name-bracelet",
    name: "Custom Name Bracelet",
    description: "Personalized with your chosen name or meaningful word.",
    price: 24.99,
    image: "/placeholder.svg?height=500&width=500&text=Custom+Name",
  },
  {
    id: "birthstone-collection",
    name: "Birthstone Collection",
    description: "Celebrate your birth month with genuine gemstones.",
    price: 32.99,
    image: "/placeholder.svg?height=500&width=500&text=Birthstone",
  },
  {
    id: "friendship-infinity-set",
    name: "Friendship Infinity Set",
    description: "Matching infinity symbol bracelets for best friends.",
    price: 42.99,
    image: "/placeholder.svg?height=500&width=500&text=Infinity+Set",
  },
  {
    id: "charm-bracelet-starter",
    name: "Charm Bracelet Starter",
    description: "Begin your charm collection with this elegant base.",
    price: 28.99,
    image: "/placeholder.svg?height=500&width=500&text=Charm+Starter",
  },
]

// Updated testimonials with more specific feedback
const testimonials = [
  {
    id: 1,
    text: "Grace created the most beautiful custom bracelet for my daughter's 13th birthday. The attention to detail and personal touch made it so special. She hasn't taken it off since!",
    name: "Sarah M., Melbourne",
    initial: "S",
    age: "Parent",
  },
  {
    id: 2,
    text: "I ordered matching bracelets for my best friend and me before she moved interstate. The quality is amazing and they're so comfortable to wear every day. Love supporting a young entrepreneur!",
    name: "Emma, 17",
    initial: "E",
    age: "17",
  },
  {
    id: 3,
    text: "The birthstone bracelet I received was absolutely perfect. Grace's communication throughout the process was excellent, and the final product exceeded my expectations.",
    name: "Jessica K., Sydney",
    initial: "J",
    age: "Parent",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section - Refined typography */}
      <section className="min-h-screen bg-cream flex items-center pt-20 md:pt-0 py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <AnimationObserver className="fade-in">
              <h1 className="text-3xl md:text-5xl mb-5 leading-tight">
                Handcrafted with <span className="text-sage">Creativity & Love</span> in Melbourne
              </h1>
              <p className="text-gray-600 text-base mb-4 leading-relaxed">
                One-of-a-kind jewellery and accessories that bring joy, individuality, and sparkle to everyday life.
                From custom bracelets and necklaces to phone charms and hair accessories—each piece is personally
                crafted by Grace with love and attention to detail.
              </p>
              <p className="text-gray-600 text-sm mb-6 italic">
                Every piece is handmade with love and creativity—crafted with care to be as unique and meaningful as the
                person wearing it.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="default">
                  <Link href="/shop">Explore Collection</Link>
                </Button>
                <Button asChild variant="outline" size="default">
                  <Link href="https://avg-studio.vercel.app" target="_blank" rel="noopener noreferrer">
                    Design Studio ✨
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="default" className="text-sage hover:text-sage-dark">
                  <Link href="/custom">Custom Orders</Link>
                </Button>
              </div>
            </AnimationObserver>
            <AnimationObserver className="slide-in-right order-first md:order-last">
              <div className="relative">
                <div className="bg-sage/30 absolute -top-8 -right-8 w-24 h-24 rounded-full animate-float"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero.jpg-QNDKUO9Cb1kvx0hKEsJvQPkkxqvMAn.jpeg"
                  alt="Beautiful handcrafted bracelets and colorful beads used by Grace at Amore Via Grace"
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-auto relative z-10 shadow-lg"
                />
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* About Grace Section - Refined */}
      <section id="about" className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <AnimationObserver className="slide-in-left">
              <div className="relative">
                <div className="bg-rose/20 absolute -bottom-4 -left-4 w-16 h-16 rounded-full"></div>
                <Image
                  src="/images/grace-profile.jpeg"
                  alt="Grace, the teenage entrepreneur behind Amore Via Grace"
                  width={500}
                  height={500}
                  className="rounded-full w-full max-w-sm h-auto mx-auto shadow-lg border-4 border-white object-cover"
                  priority
                />
              </div>
            </AnimationObserver>
            <AnimationObserver className="fade-in">
              <h2 className="text-xl md:text-2xl mb-4">Meet Grace </h2>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                Grace Anastasia Sabau started Amore Via Grace in 2021 at just 13 years old, turning her passion for
                creating beautiful accessories into a thriving small business that serves customers across Australia.
              </p>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                From her Melbourne studio, Grace handcrafts each piece using carefully selected materials including clay
                beads, sea beads, glass beads, and unique charms. What began as a creative outlet has grown into a
                beloved brand featured at local Melbourne markets.
              </p>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                "I want every piece to bring joy and individuality to the person wearing it," says Grace. "Whether it's
                a friendship bracelet, a custom phone charm, or a colorful scrunchie, each creation should sparkle with
                personality and meaning."
              </p>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Product Categories Section - Refined */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-2xl md:text-3xl text-center mb-4">Our Collections</h2>
            <p className="text-gray-600 text-sm text-center max-w-2xl mx-auto mb-10">
              From custom bracelets and necklaces to phone charms and hair accessories—each piece is personally crafted
              by Grace with love and attention to detail.
            </p>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <AnimationObserver className="fade-in" delay={0}>
              <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white text-lg mb-3">
                  ✨
                </div>
                <h3 className="text-base mb-2 font-medium">Bracelets & Anklets</h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                  Custom name bracelets, friendship sets, and delicate anklets using clay beads, glass beads, and
                  charms.
                </p>
                <Link href="/shop?category=bracelets" className="text-sage hover:underline text-xs font-medium">
                  Shop Bracelets →
                </Link>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white text-lg mb-3">
                  💍
                </div>
                <h3 className="text-base mb-2 font-medium">Rings & Necklaces</h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                  Delicate rings and beautiful necklaces crafted with sea beads, pony beads, and personalized charms.
                </p>
                <Link href="/shop?category=rings" className="text-sage hover:underline text-xs font-medium">
                  Explore Jewelry →
                </Link>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white text-lg mb-3">
                  📱
                </div>
                <h3 className="text-base mb-2 font-medium">Phone Charms</h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                  Unique phone charms and accessories that add personality and sparkle to your everyday essentials.
                </p>
                <Link href="/shop?category=charms" className="text-sage hover:underline text-xs font-medium">
                  Add Sparkle →
                </Link>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={300}>
              <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white text-lg mb-3">
                  🎀
                </div>
                <h3 className="text-base mb-2 font-medium">Hair Accessories</h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                  Scrunchies and hair accessories that complement your style with playful colors and creative designs.
                </p>
                <Link href="/shop?category=hair" className="text-sage hover:underline text-xs font-medium">
                  Style Your Hair →
                </Link>
              </div>
            </AnimationObserver>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} delay={index * 100} />
            ))}
          </div>

          <div className="text-center mt-10">
            <AnimationObserver className="fade-in">
              <Button asChild size="default">
                <Link href="/shop">View Full Collection</Link>
              </Button>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Values & Process Section - Refined */}
      <section id="process" className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-2xl md:text-3xl text-center mb-10">The Amore Via Grace Promise</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimationObserver className="fade-in" delay={0}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white text-lg mx-auto mb-3">
                  🤝
                </div>
                <h3 className="text-base mb-2 font-medium">Personal Connection</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Grace personally handles every order, ensuring each piece receives individual attention and care.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white text-lg mx-auto mb-3">
                  ♻️
                </div>
                <h3 className="text-base mb-2 font-medium">Sustainable Practices</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Eco-friendly packaging and responsible sourcing reflect our commitment to the environment.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white text-lg mx-auto mb-3">
                  🎨
                </div>
                <h3 className="text-base mb-2 font-medium">Artistic Excellence</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Each piece combines traditional craftsmanship with contemporary design sensibilities.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={300}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white text-lg mx-auto mb-3">
                  💝
                </div>
                <h3 className="text-base mb-2 font-medium">Meaningful Gifts</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Perfect for birthdays, graduations, friendships, and all of life's special moments.
                </p>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonial Section - Refined */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-2xl md:text-3xl text-center mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-sm text-center mb-10">Real stories from real customers across Australia</p>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimationObserver key={testimonial.id} className="fade-in" delay={index * 100}>
                <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-sage"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic text-xs mb-4 leading-relaxed">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center text-white font-medium text-xs mr-3">
                      {testimonial.initial}
                    </div>
                    <div>
                      <span className="font-medium text-xs block">{testimonial.name}</span>
                      <span className="text-xs text-gray-500">{testimonial.age}</span>
                    </div>
                  </div>
                </div>
              </AnimationObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram & Social Section - Now with Real Feed */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-2xl md:text-3xl text-center mb-4">Follow Our Journey</h2>
            <p className="text-gray-600 text-sm text-center mb-3">
              See behind-the-scenes of Grace's creative process and customer features
            </p>
            <p className="text-center mb-8">
              <Link
                href="https://www.instagram.com/amore_via_grace/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage hover:underline text-base font-medium inline-flex items-center gap-2"
              >
                <Instagram className="h-4 w-4" />
                @amore_via_grace
              </Link>
            </p>
          </AnimationObserver>

          {/* Real Instagram Feed */}
          <InstagramFeed limit={8} showCaptions={false} />

          <div className="text-center mt-8">
            <AnimationObserver className="fade-in">
              <Button asChild variant="outline" size="sm">
                <Link
                  href="https://www.instagram.com/amore_via_grace/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  Follow on Instagram
                </Link>
              </Button>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Refined */}
      <section className="bg-sage py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <AnimationObserver className="fade-in">
            <h2 className="text-2xl md:text-4xl text-white mb-4">Ready to Create Something Beautiful?</h2>
            <p className="text-white/90 text-sm mb-6 max-w-2xl mx-auto leading-relaxed">
              Whether you're looking for the perfect gift or want to treat yourself to something special, Grace is here
              to help you create jewelry that tells your unique story.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                asChild
                size="default"
                variant="secondary"
                className="bg-white hover:bg-cream text-sage hover:text-sage-dark"
              >
                <Link href="/custom">Start Custom Order</Link>
              </Button>
              <Button
                asChild
                size="default"
                variant="outline"
                className="text-white border-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/shop">Browse Collection</Link>
              </Button>
            </div>
          </AnimationObserver>
        </div>
      </section>
    </>
  )
}
