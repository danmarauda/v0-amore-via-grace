import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google" // Using Inter as placeholder for Inter_Tight
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeSelector } from "@/components/theme-selector"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"
import { Toaster } from "@/components/ui/toaster"

// If Inter_Tight is available, you would import it like:
// import localFont from 'next/font/local'
// const interTight = localFont({ src: '../fonts/Inter_Tight.woff2', variable: "--font-sans" })
// For now, using Inter as a fallback.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-family-sans", // Updated to match CSS variable name
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Include all used weights
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-family-serif", // Updated to match CSS variable name
  display: "swap",
  weight: ["400", "700"], // Adjust as needed
})

export const metadata: Metadata = {
  title: "Amore Via Grace | Handmade Custom Bracelets with Heart",
  description:
    "Amore Via Grace – Handmade Custom Bracelets with Heart. Elegant, personalized jewelry crafted by Grace for kids, teens, and young adults.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <ThemeSelector />
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
