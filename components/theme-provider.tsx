"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export type ColorTheme = "default" | "rose" | "lavender" | "ocean" | "sunset"

type ThemeContextType = {
  colorTheme: ColorTheme
  setColorTheme: (theme: ColorTheme) => void
  isDarkMode: boolean
  setIsDarkMode: (isDark: boolean) => void
  colorThemes: Record<ColorTheme, { name: string; color: string; darkColor: string }>
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

// Storage keys
const COLOR_THEME_KEY = "avg-color-theme"
const DARK_MODE_KEY = "avg-dark-mode"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Initialize with default values
  const [colorTheme, setColorThemeState] = React.useState<ColorTheme>("default")
  const [isDarkMode, setIsDarkModeState] = React.useState(false)
  const [isInitialized, setIsInitialized] = React.useState(false)

  const colorThemes: Record<ColorTheme, { name: string; color: string; darkColor: string }> = {
    default: { name: "Sage Green", color: "#A9BAA6", darkColor: "#8A9B87" },
    rose: { name: "Rose Gold", color: "#B76E79", darkColor: "#985A64" },
    lavender: { name: "Lavender", color: "#9D8EC7", darkColor: "#7E71A8" },
    ocean: { name: "Ocean Blue", color: "#5B9AA0", darkColor: "#487B80" },
    sunset: { name: "Sunset", color: "#E8846B", darkColor: "#C96A54" },
  }

  // Load saved preferences from localStorage on mount
  React.useEffect(() => {
    // Only run on client-side to avoid hydration mismatch
    if (typeof window !== "undefined") {
      try {
        // Check for system dark mode preference first
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

        // Load color theme preference
        const savedColorTheme = localStorage.getItem(COLOR_THEME_KEY) as ColorTheme | null
        if (savedColorTheme && Object.keys(colorThemes).includes(savedColorTheme)) {
          setColorThemeState(savedColorTheme)
        }

        // Load dark mode preference
        const savedDarkMode = localStorage.getItem(DARK_MODE_KEY)
        if (savedDarkMode !== null) {
          setIsDarkModeState(savedDarkMode === "true")
        } else if (prefersDark) {
          // Use system preference if no saved preference
          setIsDarkModeState(true)
        }
      } catch (error) {
        // Handle potential localStorage errors (e.g., disabled in browser)
        console.error("Failed to load theme preferences from localStorage:", error)
      }

      setIsInitialized(true)
    }
  }, [])

  // Wrapper functions to update state and localStorage
  const setColorTheme = React.useCallback((theme: ColorTheme) => {
    setColorThemeState(theme)
    try {
      localStorage.setItem(COLOR_THEME_KEY, theme)
    } catch (error) {
      console.error("Failed to save color theme preference:", error)
    }
  }, [])

  const setIsDarkMode = React.useCallback((isDark: boolean) => {
    setIsDarkModeState(isDark)
    try {
      localStorage.setItem(DARK_MODE_KEY, isDark.toString())
    } catch (error) {
      console.error("Failed to save dark mode preference:", error)
    }
  }, [])

  // Apply theme changes to CSS variables
  React.useEffect(() => {
    if (!isInitialized) return

    const root = document.documentElement

    // Set dark mode class
    if (isDarkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    // Set data attributes for CSS selectors
    root.setAttribute("data-color-theme", colorTheme)
    root.setAttribute("data-dark-mode", isDarkMode.toString())

    // Apply theme-specific changes
    switch (colorTheme) {
      case "rose":
        root.style.setProperty("--primary", "350 25% 58%")
        root.style.setProperty("--sage-green", "350 25% 58%")
        root.style.setProperty("--rose-gold", "350 25% 68%")
        break
      case "lavender":
        root.style.setProperty("--primary", "260 30% 67%")
        root.style.setProperty("--sage-green", "260 30% 67%")
        root.style.setProperty("--rose-gold", "280 25% 58%")
        break
      case "ocean":
        root.style.setProperty("--primary", "187 27% 49%")
        root.style.setProperty("--sage-green", "187 27% 49%")
        root.style.setProperty("--rose-gold", "187 27% 39%")
        break
      case "sunset":
        root.style.setProperty("--primary", "12 70% 66%")
        root.style.setProperty("--sage-green", "12 70% 66%")
        root.style.setProperty("--rose-gold", "12 70% 56%")
        break
      default:
        // Reset to default theme
        root.style.setProperty("--primary", "142 19% 63%")
        root.style.setProperty("--sage-green", "142 19% 63%")
        root.style.setProperty("--rose-gold", "350 25% 58%")
        break
    }
  }, [colorTheme, isDarkMode, isInitialized])

  // Prevent flash of default theme during initialization
  const contextValue = React.useMemo(
    () => ({
      colorTheme,
      setColorTheme,
      isDarkMode,
      setIsDarkMode,
      colorThemes,
    }),
    [colorTheme, setColorTheme, isDarkMode, setIsDarkMode, colorThemes],
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
