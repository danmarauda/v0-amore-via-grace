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
            <h1 className="text-4xl md:text-5xl text-center mb-6">Create Your Custom Bracelet</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Design a one-of-a-kind bracelet that tells your unique story. Share your vision, and Grace will bring it
              to life with care and attention to detail.
            </p>
          </AnimationObserver>
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
                    Creating your custom bracelet is a collaborative process. Share your ideas, preferences, and
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
                        Once the design is finalized, Grace will carefully craft your bracelet by hand.
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
                <label htmlFor="bracelet-type" className="block text-sm font-medium">
                  Bracelet Type
                </label>
                <Input id="bracelet-type" placeholder="e.g., Name bracelet, Charm bracelet, Beaded design" />
              </div>

              <div className="space-y-2">
                <label htmlFor="colors" className="block text-sm font-medium">
                  Color Preferences
                </label>
                <Input id="colors" placeholder="e.g., Sage green, Pastel pink, Natural tones" />
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
                Browse through some of Grace's custom creations to spark ideas for your own unique bracelet. Each piece
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
                      src={`/placeholder.svg?height=300&width=300&text=Custom+${item}`}
                      alt={`Custom bracelet example ${item}`}
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
