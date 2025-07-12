"use client"

import { useEffect } from "react"
import { useTheme } from "@/components/theme-provider"

export function useThemeTransition() {
  const { colorTheme, isDarkMode } = useTheme()

  useEffect(() => {
    // Add transition class to body when theme changes
    const body = document.body
    body.classList.add("theme-transition")

    // Remove transition class after transition completes to avoid
    // transitions when not changing theme
    const timeoutId = setTimeout(() => {
      body.classList.remove("theme-transition")
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [colorTheme, isDarkMode])

  return { colorTheme, isDarkMode }
}
