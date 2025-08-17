import { Mail, Instagram, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimationObserver from "@/components/animation-observer"

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h1 className="text-4xl md:text-5xl text-center mb-6">Get in Touch</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Have a question about custom designs, need help with an order, or just want to say hello? Grace would love
              to hear from you!
            </p>
          </AnimationObserver>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimationObserver className="fade-in">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select id="subject" className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Select a subject</option>
                      <option value="custom-order">Custom Order Inquiry</option>
                      <option value="existing-order">Existing Order Question</option>
                      <option value="general">General Question</option>
                      <option value="collaboration">Collaboration Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimationObserver>

            {/* Contact Information */}
            <AnimationObserver className="fade-in" delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-sage mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <p className="text-gray-600 text-sm">contact@amoreviagrace.com.au</p>
                        <p className="text-gray-500 text-xs mt-1">We typically respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Instagram className="h-6 w-6 text-sage mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Instagram</h3>
                        <p className="text-gray-600 text-sm">@amore_via_grace</p>
                        <p className="text-gray-500 text-xs mt-1">Follow for behind-the-scenes content</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-sage mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Location</h3>
                        <p className="text-gray-600 text-sm">Melbourne, Victoria, Australia</p>
                        <p className="text-gray-500 text-xs mt-1">Handcrafted with love in our Melbourne studio</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-sage mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Response Time</h3>
                        <p className="text-gray-600 text-sm">Most orders ready within the same week</p>
                        <p className="text-gray-500 text-xs mt-1">Custom pieces may take longer</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-sage/10 rounded-lg p-6">
                  <h3 className="font-medium mb-3">Prefer Social Media?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Follow us on Instagram for the latest updates, behind-the-scenes content, and customer features!
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://www.instagram.com/amore_via_grace/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Instagram className="h-4 w-4 mr-2" />
                      Follow @amore_via_grace
                    </a>
                  </Button>
                </div>

                <div className="bg-cream rounded-lg p-6">
                  <h3 className="font-medium mb-3">Custom Orders</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Ready to create something unique? Our custom design process is collaborative and fun!
                  </p>
                  <Button asChild size="sm">
                    <a href="/custom">Start Custom Design</a>
                  </Button>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>
    </>
  )
}
