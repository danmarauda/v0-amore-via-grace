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
              Discover the journey of a passionate young entrepreneur who turned her love for jewelry-making into a
              business that brings joy to customers across Australia.
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
                <h2 className="text-2xl md:text-3xl mb-6">Meet Grace - Young Entrepreneur & Artist</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  At just 16 years old, Grace has already built a thriving jewelry business that serves customers across
                  Australia. Her journey began during the school holidays when she discovered her passion for creating
                  beautiful, meaningful jewelry pieces.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Grace's Italian heritage deeply influences her work, bringing a sense of artistry and attention to
                  detail that sets her pieces apart. "Amore Via Grace" - meaning "Love through Grace" - perfectly
                  captures the heart behind every creation.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Working from her Melbourne studio, Grace personally handles every aspect of her business, from design
                  conception to final packaging. This personal touch ensures that each customer receives not just a
                  piece of jewelry, but a meaningful connection to the artist behind it.
                </p>
                <div className="bg-sage/10 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 italic">
                    "I believe that jewelry should tell a story. Every piece I create is designed to celebrate the
                    unique journey of the person who will wear it. Whether it's a friendship bracelet that symbolizes an
                    unbreakable bond or a birthstone piece that marks a special milestone, I want my jewelry to be as
                    meaningful as it is beautiful."
                  </p>
                  <p className="text-right text-sm text-gray-600 mt-2">- Grace</p>
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
                <h3 className="text-xl mb-3">The Spark</h3>
                <p className="text-gray-600">
                  During school holidays, Grace discovered her passion for jewelry-making. What started as a creative
                  hobby quickly became something more when friends and family began requesting custom pieces.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white font-bold mb-4">
                  2022
                </div>
                <h3 className="text-xl mb-3">Growing Recognition</h3>
                <p className="text-gray-600">
                  Word spread about Grace's beautiful creations. She began receiving orders from across Melbourne, then
                  Victoria, as customers discovered her unique approach to personalized jewelry.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white font-bold mb-4">
                  2024
                </div>
                <h3 className="text-xl mb-3">National Reach</h3>
                <p className="text-gray-600">
                  Today, Amore Via Grace serves customers across Australia, with Grace personally crafting each piece in
                  her Melbourne studio. The business continues to grow while maintaining its personal touch.
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
