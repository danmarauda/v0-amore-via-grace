import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import AnimationObserver from "@/components/animation-observer"
import Link from "next/link"

const faqData = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        question: "How long does it take to receive my order?",
        answer:
          "Most orders are ready within the same week! For Australian customers, shipping typically takes 3-7 business days. International orders may take longer. Custom pieces or larger orders might need additional time, and Grace will let you know the expected timeframe when you place your order.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes! We ship both within Australia and internationally. Shipping costs and delivery times vary by location. Australian orders over $50 qualify for free shipping.",
      },
      {
        question: "How do I track my order?",
        answer:
          "Once your order ships, you'll receive a tracking number via email. You can use this to monitor your package's progress. If you have any concerns about your order, feel free to reach out to Grace directly.",
      },
    ],
  },
  {
    category: "Custom Designs",
    questions: [
      {
        question: "What items can be customized?",
        answer:
          "Grace offers custom designs for bracelets, rings, anklets, necklaces, and phone charms. Each piece is handcrafted to your specifications using high-quality materials like clay beads, glass beads, sea beads, and pony beads.",
      },
      {
        question: "How does the custom design process work?",
        answer:
          "It's easy! Share your vision through our custom design form, and Grace will reach out to discuss your ideas. Once the design is finalized, she'll handcraft your unique piece. The whole process is collaborative and fun!",
      },
      {
        question: "Can I see a preview of my custom design?",
        answer:
          "Grace works closely with each customer to ensure you're happy with the design before she starts crafting. She'll discuss colors, materials, and design elements with you to make sure it's exactly what you envision.",
      },
    ],
  },
  {
    category: "Materials & Care",
    questions: [
      {
        question: "What materials do you use?",
        answer:
          "All pieces are handcrafted using high-quality materials including clay beads, pony beads, sea beads, glass beads, white and clear elastic string, clasps (when needed), and various charms. Grace sources materials carefully to ensure durability and beauty.",
      },
      {
        question: "How do I care for my jewelry?",
        answer:
          "To keep your handmade pieces looking their best, avoid exposure to water, perfumes, and harsh chemicals. Store them in a dry place when not wearing. If your piece needs cleaning, gently wipe with a soft, dry cloth.",
      },
      {
        question: "What if my jewelry breaks?",
        answer:
          "Grace stands behind her work! If your jewelry breaks within 30 days of purchase, she offers repair or replacement. Contact us with photos of the issue, and we'll make it right.",
      },
    ],
  },
  {
    category: "Sizing & Fit",
    questions: [
      {
        question: "How do I know what size to order?",
        answer:
          'For bracelets and anklets, we offer Child (5-8"), Youth (6-9"), and Adult (7-10") sizes. If you\'re unsure, measure your wrist or ankle with a flexible measuring tape. Grace can also provide guidance based on age and typical sizing.',
      },
      {
        question: "Can you adjust the size after I receive it?",
        answer:
          "Yes! If the fit isn't quite right, contact Grace within 14 days of receiving your order. She can often adjust the sizing for a small fee, depending on the design.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        question: "What is your return policy?",
        answer:
          "Returns are accepted within 14 days of delivery if the item is unused and in original condition. Custom pieces are generally non-returnable unless there's a defect. Customers cover return shipping costs.",
      },
      {
        question: "Can I exchange my item?",
        answer:
          "Exchanges are possible within 14 days for non-custom items in original condition. Contact us first to arrange the exchange. Custom pieces can only be exchanged if there's a defect or error on our part.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <AnimationObserver className="fade-in">
            <h1 className="text-4xl md:text-5xl text-center mb-6">Frequently Asked Questions</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Find answers to common questions about orders, custom designs, materials, and more. Can't find what you're
              looking for? Feel free to reach out!
            </p>
          </AnimationObserver>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          {faqData.map((category, categoryIndex) => (
            <AnimationObserver key={category.category} className="fade-in" delay={categoryIndex * 100}>
              <div className="mb-12">
                <h2 className="text-2xl font-medium mb-6 text-sage">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="bg-white rounded-lg shadow-sm border border-gray-100"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimationObserver>
          ))}

          {/* Contact CTA */}
          <AnimationObserver className="fade-in">
            <div className="bg-sage/10 rounded-lg p-8 text-center mt-16">
              <h3 className="text-xl font-medium mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                Grace is always happy to help! Reach out with any questions about custom designs, orders, or anything
                else.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://www.instagram.com/amore_via_grace/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Message on Instagram
                  </a>
                </Button>
              </div>
            </div>
          </AnimationObserver>
        </div>
      </section>
    </>
  )
}
