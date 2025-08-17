"use client"

import Link from "next/link"
import { Instagram, TwitterIcon as TikTok, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-cream pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Brand Column */}
          <div>
            <h4 className="text-base mb-3 font-medium">Amore Via Grace</h4>
            <p className="text-gray-600 text-xs mb-3 leading-relaxed">
              "Love through Grace" – handcrafted jewelry with heart.
            </p>
            <div className="flex space-x-3">
              <Link
                href="https://www.instagram.com/amore_via_grace/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage hover:text-rose transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://tiktok.com" className="text-sage hover:text-rose transition-colors">
                <TikTok className="h-4 w-4" />
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="mailto:contact@amoreviagrace.com.au" className="text-sage hover:text-rose transition-colors">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h5 className="font-medium mb-3 text-sm">Shop</h5>
            <ul className="space-y-1">
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-sage transition-colors text-xs">
                  All Bracelets
                </Link>
              </li>
              <li>
                <Link href="/custom" className="text-gray-600 hover:text-sage transition-colors text-xs">
                  Custom Designs
                </Link>
              </li>
              <li>
                <Link href="/shop/gift-sets" className="text-gray-600 hover:text-sage transition-colors text-xs">
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link href="/shop/new" className="text-gray-600 hover:text-sage transition-colors text-xs">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h5 className="font-medium mb-3 text-sm">Support</h5>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-sage transition-colors text-xs">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-sage transition-colors text-xs">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-sage transition-colors text-xs">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-sage transition-colors text-xs">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-medium mb-3 text-sm">Join the Bracelet Club</h5>
            <p className="text-gray-600 mb-3 text-xs leading-relaxed">
              Subscribe to get special offers, free giveaways, and behind-the-scenes updates.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Your email address" className="text-xs" />
              <Button type="submit" className="w-full text-xs" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-3 md:mb-0">
            © {new Date().getFullYear()} Amore Via Grace. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-gray-500 hover:text-sage text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-sage text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
