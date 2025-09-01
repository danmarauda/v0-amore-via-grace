"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeSelector } from "./theme-selector"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const shopCategories = [
    { name: "Bracelets & Anklets", href: "/shop?category=bracelets", emoji: "✨" },
    { name: "Rings & Necklaces", href: "/shop?category=rings", emoji: "💍" },
    { name: "Phone Charms", href: "/shop?category=charms", emoji: "📱" },
    { name: "Hair Accessories", href: "/shop?category=hair", emoji: "🎀" },
  ]

  const morePages = [
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Shipping", href: "/shipping" },
    { name: "Care Guide", href: "/care-guide" },
    { name: "Instagram", href: "https://www.instagram.com/amore_via_grace/", external: true },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">Amore Via Grace</span>
              <p className="text-xs text-gray-500 -mt-1">Handcrafted in Melbourne</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Shop Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-sage transition-colors">
                <span>Shop</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/shop" className="w-full">
                    <span className="mr-2">🛍️</span>
                    All Products
                  </Link>
                </DropdownMenuItem>
                <div className="border-t my-1"></div>
                {shopCategories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link href={category.href} className="w-full">
                      <span className="mr-2">{category.emoji}</span>
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <div className="border-t my-1"></div>
                <DropdownMenuItem asChild>
                  <Link href="/custom" className="w-full">
                    <span className="mr-2">🎨</span>
                    Custom Orders
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Design Studio Link */}
            <Link
              href="https://avg-studio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-sage transition-colors font-medium"
            >
              Design Studio ✨
            </Link>

            {/* About Link */}
            <Link href="/about" className="text-gray-700 hover:text-sage transition-colors">
              About
            </Link>

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-sage transition-colors">
                <span>More</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {morePages.map((page) => (
                  <DropdownMenuItem key={page.name} asChild>
                    {page.external ? (
                      <Link
                        href={page.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center"
                      >
                        {page.name === "Instagram" && <Instagram className="h-4 w-4 mr-2" />}
                        {page.name}
                      </Link>
                    ) : (
                      <Link href={page.href} className="w-full">
                        {page.name}
                      </Link>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right side - Theme Selector and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeSelector />

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-3 pb-4 border-b">
                    <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center">
                      <span className="text-white font-bold">A</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">Amore Via Grace</span>
                      <p className="text-xs text-gray-500">Handcrafted in Melbourne</p>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {/* Shop Section */}
                    <div>
                      <Link
                        href="/shop"
                        className="text-lg font-medium text-gray-900 mb-3 block"
                        onClick={() => setIsOpen(false)}
                      >
                        🛍️ Shop All Products
                      </Link>
                      <div className="ml-4 space-y-2">
                        {shopCategories.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="block text-gray-600 hover:text-sage transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {category.emoji} {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Design Studio */}
                    <Link
                      href="https://avg-studio.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-gray-900 hover:text-sage transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      ✨ Design Studio
                    </Link>

                    {/* Custom Orders */}
                    <Link
                      href="/custom"
                      className="text-lg font-medium text-gray-900 hover:text-sage transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      🎨 Custom Orders
                    </Link>

                    {/* About */}
                    <Link
                      href="/about"
                      className="text-lg font-medium text-gray-900 hover:text-sage transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      About Grace
                    </Link>

                    {/* More Pages */}
                    <div className="pt-4 border-t">
                      <p className="text-sm font-medium text-gray-500 mb-3">Support & Info</p>
                      <div className="space-y-2">
                        {morePages.map((page) => (
                          <Link
                            key={page.name}
                            href={page.href}
                            target={page.external ? "_blank" : undefined}
                            rel={page.external ? "noopener noreferrer" : undefined}
                            className="block text-gray-600 hover:text-sage transition-colors flex items-center"
                            onClick={() => setIsOpen(false)}
                          >
                            {page.name === "Instagram" && <Instagram className="h-4 w-4 mr-2" />}
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
