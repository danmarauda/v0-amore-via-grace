import { Droplets, Sun, Sparkles, Heart, AlertTriangle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import AnimationObserver from "@/components/animation-observer"
import Link from "next/link"

export default function CareGuidePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h1 className="text-4xl md:text-5xl text-center mb-6">Care Guide</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Keep your handcrafted accessories looking beautiful for years to come. Follow these simple care
              instructions to maintain the quality and longevity of your Amore Via Grace pieces.
            </p>
          </AnimationObserver>
        </div>
      </section>

      {/* Quick Care Tips */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl text-center mb-12">Essential Care Tips</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimationObserver className="fade-in" delay={0}>
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mx-auto mb-4">
                  <Droplets className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">Avoid Water</h3>
                <p className="text-gray-600 text-sm">
                  Remove jewelry before swimming, showering, or washing hands to prevent damage to beads and elastic.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mx-auto mb-4">
                  <Sun className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">Store Properly</h3>
                <p className="text-gray-600 text-sm">
                  Keep in a dry place away from direct sunlight. Use the original packaging or a jewelry box.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">Gentle Cleaning</h3>
                <p className="text-gray-600 text-sm">
                  Clean with a soft, dry cloth. Avoid harsh chemicals, perfumes, and cleaning products.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={300}>
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">Handle with Care</h3>
                <p className="text-gray-600 text-sm">
                  Put on jewelry last when getting dressed and remove first when undressing to avoid snags.
                </p>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Detailed Care Instructions */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl text-center mb-12">Detailed Care Instructions</h2>
          </AnimationObserver>

          <div className="space-y-8">
            <AnimationObserver className="fade-in" delay={0}>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Daily Care
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Put on jewelry after applying makeup, perfume, and hair products</li>
                  <li>• Remove jewelry before exercising, cleaning, or doing manual work</li>
                  <li>• Avoid contact with lotions, oils, and cosmetics</li>
                  <li>• Take off jewelry before bed to prevent tangling and stretching</li>
                </ul>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 text-blue-600 mr-2" />
                  Cleaning Your Jewelry
                </h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  <p>
                    <strong>For regular cleaning:</strong> Gently wipe with a soft, dry cloth to remove oils and dirt.
                  </p>
                  <p>
                    <strong>For deeper cleaning:</strong> Use a slightly damp cloth (water only) and immediately dry
                    with a soft towel.
                  </p>
                  <p>
                    <strong>Never use:</strong> Jewelry cleaners, harsh chemicals, ultrasonic cleaners, or abrasive
                    materials.
                  </p>
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Sun className="h-5 w-5 text-yellow-600 mr-2" />
                  Storage Tips
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Store each piece separately to prevent tangling and scratching</li>
                  <li>• Use the original packaging or a soft jewelry pouch</li>
                  <li>• Keep in a cool, dry place away from direct sunlight</li>
                  <li>• Avoid storing in bathrooms or other humid areas</li>
                  <li>• For bracelets, lay flat rather than hanging to prevent stretching</li>
                </ul>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Material-Specific Care */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl text-center mb-12">Material-Specific Care</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimationObserver className="fade-in" delay={0}>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Clay & Pony Beads</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Most durable of our materials</li>
                  <li>• Can handle gentle cleaning with damp cloth</li>
                  <li>• Colors may fade if exposed to harsh sunlight</li>
                  <li>• Avoid dropping on hard surfaces</li>
                </ul>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Glass & Sea Beads</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Handle with extra care to prevent chipping</li>
                  <li>• Clean gently with soft, dry cloth only</li>
                  <li>• Store separately to prevent scratching</li>
                  <li>• Beautiful but more delicate than clay beads</li>
                </ul>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Elastic String</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Avoid overstretching when putting on/taking off</li>
                  <li>• Roll over hand rather than pulling</li>
                  <li>• Keep away from sharp objects</li>
                  <li>• May naturally stretch over time with wear</li>
                </ul>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={300}>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Charms & Clasps</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Check clasps regularly for secure closure</li>
                  <li>• Avoid pulling or tugging on charms</li>
                  <li>• Clean around clasps carefully</li>
                  <li>• Contact us if clasps become loose</li>
                </ul>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl text-center mb-12">Troubleshooting</h2>
          </AnimationObserver>

          <div className="space-y-6">
            <AnimationObserver className="fade-in" delay={0}>
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>If your jewelry breaks:</strong> Don't worry! Grace offers a 30-day repair or replacement
                  guarantee. Contact us with photos of the issue, and we'll make it right.
                </AlertDescription>
              </Alert>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-medium mb-3">Common Issues & Solutions</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-gray-800">Elastic feels loose:</strong>
                    <p className="text-gray-600">
                      This is normal with wear. Contact us for a resize or replacement elastic.
                    </p>
                  </div>
                  <div>
                    <strong className="text-gray-800">Beads look dull:</strong>
                    <p className="text-gray-600">
                      Gently clean with a soft, dry cloth. Avoid using any liquids or chemicals.
                    </p>
                  </div>
                  <div>
                    <strong className="text-gray-800">Clasp won't close:</strong>
                    <p className="text-gray-600">
                      Check for debris in the clasp mechanism. If problem persists, contact us for repair.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationObserver>
          </div>

          {/* Contact CTA */}
          <AnimationObserver className="fade-in">
            <div className="bg-sage/10 rounded-lg p-8 text-center mt-12">
              <h3 className="text-xl font-medium mb-4">Need help with your jewelry?</h3>
              <p className="text-gray-600 mb-6">
                Grace is always happy to help with care questions or repairs. Your satisfaction is our priority!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild>
                  <Link href="/contact">Contact Grace</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/faq">View FAQ</Link>
                </Button>
              </div>
            </div>
          </AnimationObserver>
        </div>
      </section>
    </>
  )
}
