"use client"

import Link from "next/link"
import { Instagram, TwitterIcon as TikTok, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-cream pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h4 className="text-xl mb-4">Amore Via Grace</h4>
            <p className="text-gray-600 mb-4">"Love through Grace" – handcrafted jewelry with heart.</p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-sage hover:text-rose transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://tiktok.com" className="text-sage hover:text-rose transition-colors">
                <TikTok className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="mailto:contact@amoreviagrace.com.au" className="text-sage hover:text-rose transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h5 className="font-medium mb-4">Shop</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-sage transition-colors">
                  All Bracelets
                </Link>
              </li>
              <li>
                <Link href="/custom" className="text-gray-600 hover:text-sage transition-colors">
                  Custom Designs
                </Link>
              </li>
              <li>
                <Link href="/shop/gift-sets" className="text-gray-600 hover:text-sage transition-colors">
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link href="/shop/new" className="text-gray-600 hover:text-sage transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h5 className="font-medium mb-4">Support</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-sage transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-sage transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-sage transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-sage transition-colors">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-medium mb-4">Join the Bracelet Club</h5>
            <p className="text-gray-600 mb-4">
              Subscribe to get special offers, free giveaways, and behind-the-scenes updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Your email address" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Amore Via Grace. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-sage text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-sage text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
