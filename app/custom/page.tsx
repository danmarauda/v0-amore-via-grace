import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import AnimationObserver from "@/components/animation-observer"

export default function CustomPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h1 className="text-4xl md:text-5xl text-center mb-6">Custom Jewelry Design</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Work directly with Grace to create a one-of-a-kind piece that tells your unique story. Every custom design
              is handcrafted with love, care, and attention to detail in Melbourne.
            </p>
          </AnimationObserver>
        </div>
      </section>

      {/* Design Studio Preview */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationObserver className="slide-in-left">
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">Try Our Interactive Design Studio</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Before placing your custom order, experiment with our interactive bracelet design studio! Create,
                  customize, and visualize your perfect piece with our easy-to-use online tool.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sage mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Interactive bead selection and placement</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sage mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Real-time design preview</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sage mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Color and pattern experimentation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sage mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Save and share your designs</p>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-sage hover:bg-sage/90">
                  <Link href="https://avg-studio.vercel.app" target="_blank" rel="noopener noreferrer">
                    Launch Design Studio ✨
                  </Link>
                </Button>
              </div>
            </AnimationObserver>

            <AnimationObserver className="slide-in-right">
              <div className="relative">
                <div className="bg-sage/10 absolute -top-4 -right-4 w-24 h-24 rounded-full"></div>
                <div className="bg-sage/5 absolute -bottom-6 -left-6 w-32 h-32 rounded-full"></div>

                <Card className="relative z-10 overflow-hidden shadow-lg">
                  <div className="relative">
                    <Image
                      src="/design-studio-preview.png"
                      alt="Interactive bracelet design studio interface showing bead selection and real-time preview"
                      width={600}
                      height={400}
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">Design Studio Preview</h3>
                      <p className="text-sm text-white/90">Create your perfect bracelet online</p>
                    </div>
                  </div>
                </Card>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Custom Order Process */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-center mb-12">How Custom Orders Work</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Share Your Vision",
                description:
                  "Tell Grace about your dream piece using the form below. Include colors, themes, and any special meaning.",
              },
              {
                step: "2",
                title: "Design Consultation",
                description:
                  "Grace will reach out to discuss your ideas, suggest materials, and provide a quote and timeline.",
              },
              {
                step: "3",
                title: "Handcrafted Creation",
                description:
                  "Once approved, Grace begins handcrafting your unique piece with love and attention to detail.",
              },
              {
                step: "4",
                title: "Beautiful Delivery",
                description: "Your custom jewelry arrives beautifully packaged and ready to be treasured or gifted.",
              },
            ].map((item, index) => (
              <AnimationObserver key={index} className="fade-in" delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimationObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Form */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <AnimationObserver className="fade-in">
              <h2 className="text-3xl md:text-4xl text-center mb-12">Request Your Custom Design</h2>
            </AnimationObserver>

            <AnimationObserver className="fade-in" delay={200}>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" placeholder="Enter your full name" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Optional for follow-up questions" />
                      </div>
                      <div>
                        <Label htmlFor="age">Age Range</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select age range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5-12">5-12 years</SelectItem>
                            <SelectItem value="13-17">13-17 years</SelectItem>
                            <SelectItem value="18-25">18-25 years</SelectItem>
                            <SelectItem value="26+">26+ years</SelectItem>
                            <SelectItem value="gift">It's a gift</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Design Details */}
                    <div>
                      <Label htmlFor="item-type">What would you like created? *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select item type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bracelet">Bracelet</SelectItem>
                          <SelectItem value="anklet">Anklet</SelectItem>
                          <SelectItem value="necklace">Necklace</SelectItem>
                          <SelectItem value="ring">Ring</SelectItem>
                          <SelectItem value="phone-charm">Phone Charm</SelectItem>
                          <SelectItem value="hair-accessory">Hair Accessory</SelectItem>
                          <SelectItem value="other">Other (please specify)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="colors">Preferred Colors *</Label>
                      <Input id="colors" placeholder="e.g., sage green, cream, rose gold, rainbow" required />
                    </div>

                    <div>
                      <Label htmlFor="size">Size Information</Label>
                      <Input id="size" placeholder="e.g., wrist circumference, ring size, or 'standard teen size'" />
                    </div>

                    <div>
                      <Label htmlFor="theme">Theme or Style</Label>
                      <Input id="theme" placeholder="e.g., boho, minimalist, nature-inspired, friendship, birthday" />
                    </div>

                    <div>
                      <Label htmlFor="special-meaning">Special Meaning or Story</Label>
                      <Textarea
                        id="special-meaning"
                        placeholder="Tell Grace about any special significance, memories, or meaning you'd like incorporated into the design"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="inspiration">Design Inspiration</Label>
                      <Textarea
                        id="inspiration"
                        placeholder="Describe your vision, attach reference images, or mention specific elements you love"
                        rows={4}
                      />
                    </div>

                    {/* Budget and Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="budget">Budget Range (AUD)</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-25">Under $25</SelectItem>
                            <SelectItem value="25-50">$25 - $50</SelectItem>
                            <SelectItem value="50-75">$50 - $75</SelectItem>
                            <SelectItem value="75-100">$75 - $100</SelectItem>
                            <SelectItem value="100+">$100+</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">When do you need it?</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no-rush">No rush</SelectItem>
                            <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="specific-date">Specific date (please specify below)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="additional-notes">Additional Notes</Label>
                      <Textarea
                        id="additional-notes"
                        placeholder="Any other details, questions, or special requests for Grace"
                        rows={3}
                      />
                    </div>

                    {/* Gift Options */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="gift" />
                        <Label htmlFor="gift">This is a gift</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="gift-wrap" />
                        <Label htmlFor="gift-wrap">Please include special gift wrapping</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="updates" />
                        <Label htmlFor="updates">I'd like progress updates during creation</Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-6">
                      <Button type="submit" size="lg" className="bg-sage hover:bg-sage/90 px-12">
                        Submit Custom Request ✨
                      </Button>
                      <p className="text-sm text-gray-600 mt-4">
                        Grace will respond within 24-48 hours with a personalized quote and timeline
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Materials & Process */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-center mb-12">Quality Materials & Craftsmanship</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimationObserver className="slide-in-left">
              <div>
                <h3 className="text-2xl mb-6">Premium Materials</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sage mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Clay Beads</p>
                      <p className="text-gray-600 text-sm">Lightweight, colorful, and durable</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sage mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Glass & Sea Beads</p>
                      <p className="text-gray-600 text-sm">Beautiful textures and natural appeal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sage mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Quality Elastic & Clasps</p>
                      <p className="text-gray-600 text-sm">Strong, flexible, and long-lasting</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sage mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">Special Charms</p>
                      <p className="text-gray-600 text-sm">Unique touches for personalization</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationObserver>

            <AnimationObserver className="slide-in-right">
              <div>
                <h3 className="text-2xl mb-6">Handcrafted Process</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-medium mb-2">Personal Consultation</p>
                    <p className="text-gray-600 text-sm">
                      Grace works with you to understand your vision and preferences
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-medium mb-2">Material Selection</p>
                    <p className="text-gray-600 text-sm">
                      Carefully chosen materials that match your design and budget
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-medium mb-2">Handcrafted Creation</p>
                    <p className="text-gray-600 text-sm">
                      Each piece is lovingly made by hand in Grace's Melbourne studio
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-medium mb-2">Quality Check & Packaging</p>
                    <p className="text-gray-600 text-sm">Inspected for quality and beautifully packaged for delivery</p>
                  </div>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-center mb-12">What Customers Say</h2>
          </AnimationObserver>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                age: "Mum of 12-year-old",
                text: "Grace created the most beautiful friendship bracelets for my daughter's birthday party. Each one was unique and the girls absolutely loved them!",
              },
              {
                name: "Emma L.",
                age: "16 years old",
                text: "I wanted something special for my sweet 16 and Grace made me the perfect necklace. It's exactly what I imagined and I get compliments every time I wear it.",
              },
              {
                name: "Jessica R.",
                age: "Young professional",
                text: "Grace made me a custom bracelet for my graduation. The attention to detail and personal touch made it so much more meaningful than anything I could buy in a store.",
              },
            ].map((testimonial, index) => (
              <AnimationObserver key={index} className="fade-in" delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.age}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimationObserver>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h2 className="text-3xl md:text-4xl text-center mb-12">Custom Order FAQ</h2>
          </AnimationObserver>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does a custom order take?",
                answer:
                  "Most custom pieces are completed within 1-2 weeks. More complex designs or larger orders may take longer. Grace will provide a specific timeline when she responds to your request.",
              },
              {
                question: "What's the minimum order for custom pieces?",
                answer: "There's no minimum order! Grace is happy to create a single custom piece just for you.",
              },
              {
                question: "Can I see the design before it's finished?",
                answer:
                  "Yes! Grace can provide progress photos during creation if requested. She wants to make sure you love your piece.",
              },
              {
                question: "What if I'm not happy with the final piece?",
                answer:
                  "Grace works closely with each customer to ensure satisfaction. If there are any issues, she'll work with you to make it right within 14 days of delivery.",
              },
              {
                question: "Do you ship internationally?",
                answer:
                  "Yes! Grace ships both within Australia and internationally. Shipping costs and times will be provided with your quote.",
              },
            ].map((faq, index) => (
              <AnimationObserver key={index} className="fade-in" delay={index * 50}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </AnimationObserver>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
