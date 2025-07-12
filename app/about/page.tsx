import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimationObserver from "@/components/animation-observer"

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h1 className="text-4xl md:text-5xl text-center mb-6">About Amore Via Grace</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              The story behind our handcrafted jewelry and the passionate young creator who brings each piece to life.
            </p>
          </AnimationObserver>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimationObserver className="slide-in-left">
              <div className="relative">
                <div className="bg-sage/20 absolute -top-8 -right-8 w-32 h-32 rounded-full"></div>
                <Image
                  src="/images/grace-profile.jpeg"
                  alt="Grace, the creator of Amore Via Grace"
                  width={600}
                  height={600}
                  className="rounded-lg relative z-10 object-cover"
                  priority
                />
              </div>
            </AnimationObserver>

            <AnimationObserver className="slide-in-right">
              <div>
                <h2 className="text-2xl md:text-3xl mb-6">Meet Grace</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Hi there! I'm Grace, the creator behind Amore Via Grace. As a teen with a passion for crafting and
                  design, I started making bracelets for friends and family when I was just 12 years old.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  What began as a creative hobby quickly blossomed into something more as people began requesting custom
                  pieces. I love the process of turning simple materials into meaningful accessories that bring joy and
                  express individuality.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Each bracelet is handcrafted with care in my home studio, where I carefully select materials and pay
                  attention to every detail. I believe that jewelry should be both beautiful and meaningful, telling a
                  story that's unique to the wearer.
                </p>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-center mb-12">Our Story</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimationObserver className="fade-in" delay={0}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl mb-3">The Beginning</h3>
                <p className="text-gray-600">
                  Amore Via Grace started in 2021 when I made matching friendship bracelets for my best friends. Their
                  enthusiastic response inspired me to create more designs.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl mb-3">Growing Passion</h3>
                <p className="text-gray-600">
                  As word spread, I began receiving requests for custom pieces. I invested time in learning new
                  techniques and sourcing quality materials to elevate my designs.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl mb-3">Today</h3>
                <p className="text-gray-600">
                  Now, Amore Via Grace has grown into a small business with customers across Australia. Each piece is
                  still handcrafted by me with the same care and attention to detail.
                </p>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimationObserver className="fade-in">
              <div>
                <h2 className="text-2xl md:text-3xl mb-6">Our Values</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl mb-2">Handcrafted with Love</h3>
                    <p className="text-gray-600">
                      Every piece is made by hand, ensuring quality and uniqueness. No mass production means each
                      bracelet receives personal attention.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl mb-2">Quality Materials</h3>
                    <p className="text-gray-600">
                      I carefully select durable, comfortable materials that look beautiful and stand the test of time,
                      even with daily wear.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl mb-2">Personal Connection</h3>
                    <p className="text-gray-600">
                      I believe in creating jewelry that forms a connection with the wearer, telling their unique story
                      or capturing a special memory.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl mb-2">Sustainable Practices</h3>
                    <p className="text-gray-600">
                      I'm committed to minimizing waste through thoughtful material use and eco-friendly packaging for
                      all orders.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver className="slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square relative rounded-md overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Value+${item}`}
                      alt={`Amore Via Grace values ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sage">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-white mb-6">Ready to Find Your Perfect Bracelet?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Browse our collection of handcrafted bracelets or create a custom piece that tells your unique story.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white hover:bg-cream">
                <Link href="/shop">Shop Collection</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/custom">Create Custom</Link>
              </Button>
            </div>
          </AnimationObserver>
        </div>
      </section>
    </>
  )
}
