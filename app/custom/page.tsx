import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimationObserver from "@/components/animation-observer"

export default function CustomPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h1 className="text-4xl md:text-5xl text-center mb-6">Create Your Custom Piece</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Design a one-of-a-kind accessory that tells your unique story. Grace offers custom design for bracelets,
              rings, anklets, necklaces, and phone charms—each handcrafted with creativity and love in Melbourne.
            </p>
          </AnimationObserver>
        </div>
      </section>

      {/* Design Studio CTA with Preview */}
      <section className="py-16 bg-sage/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationObserver className="slide-in-left">
              <div>
                <h2 className="text-2xl md:text-3xl mb-4">Try Our Interactive Design Studio!</h2>
                <p className="text-gray-600 mb-6">
                  Want to see your bracelet come to life before ordering? Use our interactive design studio to
                  experiment with colors, patterns, and styles. Create your perfect design and then contact Grace to
                  bring it to reality!
                </p>
                <div className="space-y-4">
                  <Button asChild size="lg">
                    <Link href="https://avg-studio.vercel.app" target="_blank" rel="noopener noreferrer">
                      Launch Design Studio ✨
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-500">Design online, then submit your custom order below</p>
                </div>

                <div className="mt-8 space-y-3">
                  <h3 className="text-lg font-medium">Studio Features:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                      Interactive bead selection and placement
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                      Real-time design preview
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                      Color and pattern experimentation
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-sage rounded-full mr-3"></div>
                      Save and share your designs
                    </li>
                  </ul>
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver className="slide-in-right">
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src="/design-studio-preview.png"
                    alt="Interactive bracelet design studio interface preview"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-800">
                        🎨 Design your perfect bracelet with our interactive studio
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-sage/30 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-cream/50 rounded-full"></div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimationObserver className="slide-in-left">
              <div className="relative">
                <div className="bg-sage/20 absolute -top-8 -left-8 w-32 h-32 rounded-full"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Custom bracelet design process"
                  width={600}
                  height={600}
                  className="rounded-lg relative z-10"
                />
              </div>
            </AnimationObserver>

            <AnimationObserver className="slide-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl mb-4">How It Works</h2>
                  <p className="text-gray-600 mb-6">
                    Creating your custom piece is a collaborative process. Share your ideas, preferences, and
                    inspiration, and Grace will work with you to create something truly special.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Share Your Vision</h3>
                      <p className="text-gray-600">
                        Tell us about your style, color preferences, and any special elements you'd like to include.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Design Consultation</h3>
                      <p className="text-gray-600">
                        Grace will reach out to discuss your ideas and provide suggestions based on your preferences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Handcrafted Creation</h3>
                      <p className="text-gray-600">
                        Once the design is finalized, Grace will carefully craft your piece by hand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Delivery & Enjoyment</h3>
                      <p className="text-gray-600">
                        Your custom creation will be carefully packaged and delivered to your door.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-center mb-12">Start Your Custom Design</h2>
          </AnimationObserver>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="item-type" className="block text-sm font-medium">
                  Item Type
                </label>
                <select id="item-type" className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">Select item type</option>
                  <option value="bracelet">Custom Bracelet</option>
                  <option value="ring">Custom Ring</option>
                  <option value="anklet">Custom Anklet</option>
                  <option value="necklace">Custom Necklace</option>
                  <option value="phone-charm">Custom Phone Charm</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="colors" className="block text-sm font-medium">
                  Color Preferences
                </label>
                <Input id="colors" placeholder="e.g., Sage green, Pastel pink, Natural tones" />
              </div>

              <div className="space-y-2">
                <label htmlFor="materials" className="block text-sm font-medium">
                  Preferred Materials
                </label>
                <select id="materials" className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">Select preferred materials</option>
                  <option value="clay-beads">Clay Beads</option>
                  <option value="glass-beads">Glass Beads</option>
                  <option value="sea-beads">Sea Beads</option>
                  <option value="pony-beads">Pony Beads</option>
                  <option value="mixed">Mixed Materials</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="block text-sm font-medium">
                  Design Details
                </label>
                <Textarea
                  id="details"
                  placeholder="Share your vision, inspiration, or any specific elements you'd like to include"
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="size" className="block text-sm font-medium">
                  Wrist Size
                </label>
                <Input id="size" placeholder="e.g., Child (5-8&quot;), Youth (6-9&quot;), Adult (7-10&quot;)" />
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="block text-sm font-medium">
                  Budget Range (Optional)
                </label>
                <Input id="budget" placeholder="Your approximate budget" />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                Submit Design Request
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimationObserver className="fade-in">
              <h2 className="text-3xl md:text-4xl mb-6">Inspiration Gallery</h2>
              <p className="text-gray-600 mb-8">
                Browse through some of Grace's custom creations to spark ideas for your own unique piece. Each piece
                tells a story and was crafted with love and attention to detail.
              </p>
              <Button asChild>
                <Link href="/shop">Browse Collection</Link>
              </Button>
            </AnimationObserver>

            <AnimationObserver className="scale-in">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square relative rounded-md overflow-hidden">
                    <Image
                      src={`/custom_text_image.png?height=300&width=300&text=Custom+${item}`}
                      alt={`Custom piece example ${item}`}
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
    </>
  )
}
