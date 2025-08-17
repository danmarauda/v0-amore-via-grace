"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ShoppingBag, ChevronDown, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useThemeTransition } from "@/hooks/use-theme-transition"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Custom", href: "/custom" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { items } = useCart()
  const itemCount = items.length

  // Use the theme transition hook
  const { isDarkMode } = useThemeTransition()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-6 md:px-12",
        isScrolled
          ? isDarkMode
            ? "bg-background/95 backdrop-blur-sm shadow-md shadow-black/20"
            : "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-medium text-xl md:text-2xl">
          <span className="text-sage">Amore</span> Via Grace
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <Link
              href="/shop"
              className="text-foreground hover:text-sage font-medium text-sm transition-all flex items-center"
            >
              Shop
              <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
            </Link>

            {/* Shop Dropdown */}
            <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="/shop?category=bracelets"
                    className="flex items-center p-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center mr-3">✨</div>
                    <div>
                      <div className="font-medium text-sm">Bracelets & Anklets</div>
                      <div className="text-xs text-muted-foreground">Custom names, friendship sets</div>
                    </div>
                  </Link>

                  <Link
                    href="/shop?category=rings"
                    className="flex items-center p-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center mr-3">💍</div>
                    <div>
                      <div className="font-medium text-sm">Rings & Necklaces</div>
                      <div className="text-xs text-muted-foreground">Stackable rings, charm necklaces</div>
                    </div>
                  </Link>

                  <Link
                    href="/shop?category=charms"
                    className="flex items-center p-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center mr-3">📱</div>
                    <div>
                      <div className="font-medium text-sm">Phone Charms</div>
                      <div className="text-xs text-muted-foreground">Unique beaded accessories</div>
                    </div>
                  </Link>

                  <Link
                    href="/shop?category=hair"
                    className="flex items-center p-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center mr-3">🎀</div>
                    <div>
                      <div className="font-medium text-sm">Hair Accessories</div>
                      <div className="text-xs text-muted-foreground">Scrunchies & hair decorations</div>
                    </div>
                  </Link>
                </div>

                <div className="border-t border-border mt-3 pt-3">
                  <Link href="/shop" className="block text-center text-sm font-medium text-sage hover:underline">
                    View All Products →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/custom" className="text-foreground hover:text-sage font-medium text-sm transition-all">
            Custom
          </Link>

          <Link href="/about" className="text-foreground hover:text-sage font-medium text-sm transition-all">
            About
          </Link>

          <div className="relative group">
            <button className="text-foreground hover:text-sage font-medium text-sm transition-all flex items-center">
              More
              <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
            </button>

            {/* More Dropdown */}
            <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                <Link href="/contact" className="block px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">
                  Contact
                </Link>
                <Link href="/faq" className="block px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">
                  FAQ
                </Link>
                <Link href="/shipping" className="block px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors">
                  Shipping Info
                </Link>
                <Link
                  href="/care-guide"
                  className="block px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                >
                  Care Guide
                </Link>
                <div className="border-t border-border my-2"></div>
                <Link
                  href="https://www.instagram.com/amore_via_grace/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Follow Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center space-x-3">
          <Link href="/cart" className="relative">
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center p-0 text-xs">
                {itemCount}
              </Badge>
            )}
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 mt-8">
                <div>
                  <h3 className="font-medium text-lg mb-3">Shop</h3>
                  <div className="space-y-2 ml-4">
                    <Link
                      href="/shop?category=bracelets"
                      className="block text-sm text-muted-foreground hover:text-sage transition-colors"
                    >
                      Bracelets & Anklets
                    </Link>
                    <Link
                      href="/shop?category=rings"
                      className="block text-sm text-muted-foreground hover:text-sage transition-colors"
                    >
                      Rings & Necklaces
                    </Link>
                    <Link
                      href="/shop?category=charms"
                      className="block text-sm text-muted-foreground hover:text-sage transition-colors"
                    >
                      Phone Charms
                    </Link>
                    <Link
                      href="/shop?category=hair"
                      className="block text-sm text-muted-foreground hover:text-sage transition-colors"
                    >
                      Hair Accessories
                    </Link>
                    <Link href="/shop" className="block text-sm font-medium text-sage hover:underline">
                      View All →
                    </Link>
                  </div>
                </div>

                <Link href="/custom" className="text-lg font-medium hover:text-sage transition-colors">
                  Custom Design
                </Link>

                <Link href="/about" className="text-lg font-medium hover:text-sage transition-colors">
                  About Grace
                </Link>

                <div>
                  <h3 className="font-medium text-lg mb-3">Support</h3>
                  <div className="space-y-2 ml-4">
                    <Link
                      href="/contact"
                      className="block text-sm text-muted-foreground hover:text-sage transition-colors"
                    >
                      Contact
                    </Link>
                    <Link href="/faq" className="block text-sm text-muted-foreground hover:text-sage transition-colors">
                      FAQ
                    </Link>
                    <Link
                      href="/shipping"
                      className="block text-sm text-muted-foreground hover:text-sage transition-colors"
                    >
                      Shipping Info
                    </Link>
                    <Link
                      href="/care-guide"
                      className="block text-sm text-muted-foreground hover:text-sage transition-colors"
                    >
                      Care Guide
                    </Link>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <Link
                    href="https://www.instagram.com/amore_via_grace/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-lg font-medium hover:text-sage transition-colors"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Follow on Instagram
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
