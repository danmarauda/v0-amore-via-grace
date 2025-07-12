"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ShoppingBag } from "lucide-react"
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled
          ? isDarkMode
            ? "bg-background/95 backdrop-blur-sm shadow-md shadow-black/20"
            : "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="font-medium text-2xl md:text-3xl">
          <span className="text-sage">Amore</span> Via Grace
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-sage font-medium transition-all"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <ShoppingBag className="h-6 w-6" />
            {itemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {itemCount}
              </Badge>
            )}
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xl font-medium hover:text-sage transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
