import { Truck, Package, Globe, Clock, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimationObserver from "@/components/animation-observer"
import Link from "next/link"

export default function ShippingPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h1 className="text-4xl md:text-5xl text-center mb-6">Shipping Information</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Learn about our shipping options, delivery times, and packaging. Every order is carefully packaged with
              love and includes a handwritten thank you note!
            </p>
          </AnimationObserver>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl text-center mb-12">Shipping Options</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimationObserver className="fade-in" delay={0}>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Truck className="h-8 w-8 text-sage mr-3" />
                  <h3 className="text-xl font-medium">Australian Shipping</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Standard Shipping</span>
                    <span className="font-medium">$5.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Free Shipping</span>
                    <span className="font-medium">Orders over $50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Time</span>
                    <span className="font-medium">3-7 business days</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-sage/10 rounded-md">
                  <p className="text-sm text-gray-700">
                    <strong>Free shipping</strong> on all Australian orders over $50! Perfect for treating yourself or
                    getting gifts for friends.
                  </p>
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-sage mr-3" />
                  <h3 className="text-xl font-medium">International Shipping</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">International Rate</span>
                    <span className="font-medium">Varies by location</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Time</span>
                    <span className="font-medium">7-21 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tracking</span>
                    <span className="font-medium">Included</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-sage/10 rounded-md">
                  <p className="text-sm text-gray-700">
                    International shipping rates calculated at checkout. Delivery times may vary due to customs
                    processing.
                  </p>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Processing & Packaging */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl text-center mb-12">Processing & Packaging</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimationObserver className="fade-in" delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl mb-3">Processing Time</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Most orders are ready within the same week. Custom pieces or larger orders may take additional time,
                  and Grace will let you know the expected timeframe.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <Package className="h-8 w-8" />
                </div>
                <h3 className="text-xl mb-3">Eco-Friendly Packaging</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Each piece is carefully packaged in clear bags with logo stickers that say "Thank you for supporting
                  my small business." We use sustainable packaging whenever possible.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl mb-3">Personal Touch</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every order includes a handwritten thank you note from Grace. It's our way of showing appreciation for
                  supporting our small business and creative journey.
                </p>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl text-center mb-12">Important Information</h2>
          </AnimationObserver>

          <div className="space-y-8">
            <AnimationObserver className="fade-in" delay={0}>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-sage mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Order Protection</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      All orders include tracking and are insured against loss or damage during shipping. If something
                      goes wrong with your shipment, we'll make it right.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={100}>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-sage mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">International Customers</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Please note that international orders may be subject to customs duties and taxes in your country.
                      These fees are not included in our shipping costs and are the responsibility of the recipient.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <Package className="h-6 w-6 text-sage mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Delivery Issues</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      If your package is lost, damaged, or delayed, please contact us immediately. We'll work with the
                      shipping carrier to resolve the issue and ensure you receive your beautiful handcrafted pieces.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationObserver>
          </div>

          {/* Contact CTA */}
          <AnimationObserver className="fade-in">
            <div className="bg-sage/10 rounded-lg p-8 text-center mt-12">
              <h3 className="text-xl font-medium mb-4">Questions about shipping?</h3>
              <p className="text-gray-600 mb-6">
                Need help with your order or have questions about delivery? Grace is here to help!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
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
