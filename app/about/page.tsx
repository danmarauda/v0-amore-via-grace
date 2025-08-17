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
            <h1 className="text-4xl md:text-5xl text-center mb-6">The Story Behind Amore Via Grace</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Discover how Grace Anastasia Sabau turned her passion for handcrafting unique jewellery and accessories
              into a beloved Australian small business that brings joy, individuality, and sparkle to everyday life.
            </p>
          </AnimationObserver>
        </div>
      </section>

      {/* Grace's Story */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimationObserver className="slide-in-left">
              <div className="relative">
                <div className="bg-sage/20 absolute -top-8 -right-8 w-32 h-32 rounded-full"></div>
                <Image
                  src="/images/grace-profile.jpeg"
                  alt="Grace, the 16-year-old founder of Amore Via Grace"
                  width={600}
                  height={600}
                  className="rounded-lg relative z-10 object-cover shadow-lg"
                  priority
                />
              </div>
            </AnimationObserver>

            <AnimationObserver className="slide-in-right">
              <div>
                <h2 className="text-2xl md:text-3xl mb-6">Meet Grace Anastasia Sabau - Creative Entrepreneur</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Grace founded Amore Via Grace in 2021 when she was just 13 years old, transforming her love for
                  creating beautiful accessories into a thriving small business. Now 16, she continues to personally
                  handcraft every piece from her Melbourne studio.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  What started as a creative hobby has blossomed into a business that celebrates individuality and
                  creativity. Grace's warm, personal approach and attention to detail have made Amore Via Grace a go-to
                  destination for unique, meaningful, gift-ready accessories.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  From market stalls to an expanding online presence, Grace has built her brand on the foundation of
                  handcrafting one-of-a-kind pieces with love, care, and creativity. Each accessory tells a story and
                  brings a touch of sparkle to its owner's life.
                </p>
                <div className="bg-sage/10 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 italic">
                    "Every piece is handmade with love and creativity—crafted with care to be as unique and meaningful
                    as the person wearing it. I want my accessories to bring joy and help people express their
                    individuality."
                  </p>
                  <p className="text-right text-sm text-gray-600 mt-2">- Grace Anastasia Sabau, Founder</p>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Business Journey */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-center mb-12">The Journey</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimationObserver className="fade-in" delay={0}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white font-bold mb-4">
                  2021
                </div>
                <h3 className="text-xl mb-3">The Creative Spark</h3>
                <p className="text-gray-600">
                  At 13, Grace discovered her passion for handcrafting accessories. What began as a creative outlet
                  quickly grew as friends and family fell in love with her unique designs and attention to detail.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white font-bold mb-4">
                  2022
                </div>
                <h3 className="text-xl mb-3">Market Success</h3>
                <p className="text-gray-600">
                  Grace began selling at local Melbourne markets, where her colorful, handcrafted accessories quickly
                  gained a loyal following. Her warm personality and creative designs made her stall a favorite
                  destination.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white font-bold mb-4">
                  2024
                </div>
                <h3 className="text-xl mb-3">Growing Online</h3>
                <p className="text-gray-600">
                  Now expanding beyond markets with a growing online presence, Grace continues to personally craft each
                  piece while building Amore Via Grace into a beloved Australian handmade brand.
                </p>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimationObserver className="fade-in">
              <div>
                <h2 className="text-2xl md:text-3xl mb-6">Our Values & Philosophy</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl mb-2 text-sage">Personal Connection</h3>
                    <p className="text-gray-600">
                      Every customer interaction is personal. Grace takes the time to understand your vision and creates
                      pieces that truly reflect your individual style and story.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl mb-2 text-sage">Quality Craftsmanship</h3>
                    <p className="text-gray-600">
                      Using only high-quality materials and time-tested techniques, each piece is built to last and
                      designed to be treasured for years to come.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl mb-2 text-sage">Meaningful Design</h3>
                    <p className="text-gray-600">
                      Beyond just being beautiful, every piece is designed to have meaning - whether it's celebrating a
                      friendship, marking a milestone, or expressing personal style.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl mb-2 text-sage">Sustainable Practices</h3>
                    <p className="text-gray-600">
                      Grace is committed to responsible sourcing and eco-friendly packaging, ensuring that beautiful
                      jewelry doesn't come at the cost of our environment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl mb-2 text-sage">Supporting Young Dreams</h3>
                    <p className="text-gray-600">
                      As a young entrepreneur herself, Grace understands the importance of following your passion and is
                      proud to inspire other young people to pursue their creative dreams.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver className="slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Grace's workspace with tools and materials",
                  "Finished custom name bracelets",
                  "Birthstone collection display",
                  "Eco-friendly packaging materials",
                ].map((alt, index) => (
                  <div key={index} className="aspect-square relative rounded-md overflow-hidden">
                    <Image
                      src={`/value-placeholder.png?height=300&width=300&text=Value+${index + 1}`}
                      alt={alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-center mb-12">Designed for Young Hearts</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimationObserver className="fade-in" delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🧒
                </div>
                <h3 className="text-xl mb-3">Kids (5-12)</h3>
                <p className="text-gray-600">
                  Fun, colorful designs that spark imagination and celebrate childhood milestones. Perfect for
                  birthdays, achievements, and special occasions.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  👧
                </div>
                <h3 className="text-xl mb-3">Teens (13-17)</h3>
                <p className="text-gray-600">
                  Trendy yet timeless pieces that help express individual style and celebrate friendships. From school
                  formals to sweet sixteens.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  👩
                </div>
                <h3 className="text-xl mb-3">Young Adults (18-25)</h3>
                <p className="text-gray-600">
                  Sophisticated designs that transition from university to career. Perfect for graduations, new jobs,
                  and life's exciting new chapters.
                </p>
              </div>
            </AnimationObserver>
          </div>

          <div className="text-center mt-12">
            <AnimationObserver className="fade-in">
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                While our primary focus is on young people, Grace also creates pieces for parents who want to share in
                their children's joy and for anyone who appreciates handcrafted, meaningful jewelry.
              </p>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-sage">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-white mb-6">Ready to Create Your Story?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Whether you're looking for a custom piece that tells your unique story or want to browse our existing
              collections, Grace is here to help you find the perfect jewelry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white hover:bg-cream">
                <Link href="/custom">Start Custom Design</Link>
              </Button>
              <Button
                asChild
                size="lg"
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
