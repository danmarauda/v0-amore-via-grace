"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette, X, ChevronUp, ChevronDown, Moon, Sun, Check } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import type { ColorTheme } from "@/components/theme-provider"

export function ThemeSelector() {
  const { colorTheme, setColorTheme, isDarkMode, setIsDarkMode, colorThemes } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isMinimized, setIsMinimized] = React.useState(false)
  const [showSavedIndicator, setShowSavedIndicator] = React.useState(false)
  const [animateThemeChange, setAnimateThemeChange] = React.useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)
  const toggleMinimized = () => setIsMinimized(!isMinimized)

  // Show saved indicator when theme changes
  const handleThemeChange = (theme: ColorTheme) => {
    if (theme === colorTheme) return

    setAnimateThemeChange(true)
    setColorTheme(theme)
    showSavedConfirmation()

    setTimeout(() => {
      setAnimateThemeChange(false)
    }, 1000)
  }

  const handleDarkModeChange = (isDark: boolean) => {
    if (isDark === isDarkMode) return

    setAnimateThemeChange(true)
    setIsDarkMode(isDark)
    showSavedConfirmation()

    setTimeout(() => {
      setAnimateThemeChange(false)
    }, 1000)
  }

  const showSavedConfirmation = () => {
    setShowSavedIndicator(true)
    setTimeout(() => {
      setShowSavedIndicator(false)
    }, 1500)
  }

  return (
    <>
      {/* Full-screen overlay for theme transition animation */}
      <AnimatePresence>
        {animateThemeChange && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-primary z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className={cn(
          "fixed bottom-4 right-4 z-50 bg-background rounded-lg shadow-lg overflow-hidden border border-border",
          isMinimized ? "w-12" : "w-64",
        )}
      >
        <div className="flex items-center justify-between p-3 bg-primary/10">
          {!isMinimized && (
            <div className="flex items-center">
              <Palette className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">Theme Selection</span>
            </div>
          )}
          {isMinimized && (
            <button onClick={toggleMinimized} className="w-full flex justify-center" aria-label="Expand theme selector">
              <Palette className="h-5 w-5 text-primary" />
            </button>
          )}
          {!isMinimized && (
            <div className="flex space-x-1">
              {showSavedIndicator && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="flex items-center text-xs text-green-600 mr-1"
                >
                  <Check className="h-3 w-3 mr-1" /> Saved
                </motion.div>
              )}
              <button
                onClick={toggleMinimized}
                className="p-1 hover:bg-muted rounded-full"
                aria-label="Minimize theme selector"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
              <button
                onClick={toggleOpen}
                className="p-1 hover:bg-muted rounded-full"
                aria-label={isOpen ? "Close theme options" : "Open theme options"}
              >
                {isOpen ? <X className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
              </button>
            </div>
          )}
        </div>

        <AnimatePresence>
          {!isMinimized && isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-3 space-y-4"
            >
              {/* Dark Mode Toggle with Preview */}
              <div className="p-2 rounded-md hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    {isDarkMode ? (
                      <Moon className="h-5 w-5 mr-3 text-primary" />
                    ) : (
                      <Sun className="h-5 w-5 mr-3 text-primary" />
                    )}
                    <Label htmlFor="dark-mode" className="cursor-pointer">
                      Dark Mode
                    </Label>
                  </div>
                  <Switch
                    id="dark-mode"
                    checked={isDarkMode}
                    onCheckedChange={handleDarkModeChange}
                    aria-label="Toggle dark mode"
                  />
                </div>

                {/* Dark/Light Mode Preview */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <button
                    onClick={() => handleDarkModeChange(false)}
                    className={cn(
                      "p-2 rounded-md border transition-all",
                      !isDarkMode ? "border-primary ring-1 ring-primary" : "border-border hover:border-primary/50",
                    )}
                    aria-label="Switch to light mode"
                    aria-pressed={!isDarkMode}
                  >
                    <div className="bg-white rounded-sm p-1 text-center text-xs font-medium text-black">Light</div>
                  </button>
                  <button
                    onClick={() => handleDarkModeChange(true)}
                    className={cn(
                      "p-2 rounded-md border transition-all",
                      isDarkMode ? "border-primary ring-1 ring-primary" : "border-border hover:border-primary/50",
                    )}
                    aria-label="Switch to dark mode"
                    aria-pressed={isDarkMode}
                  >
                    <div className="bg-gray-800 rounded-sm p-1 text-center text-xs font-medium text-white">Dark</div>
                  </button>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* Color Theme Options with Enhanced Preview */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground px-2">Color Theme</p>
                <div className="grid grid-cols-5 gap-2 mb-3">
                  {Object.entries(colorThemes).map(([key, { name, color, darkColor }]) => (
                    <ThemeColorPreview
                      key={key}
                      themeKey={key as ColorTheme}
                      color={isDarkMode ? darkColor : color}
                      isActive={colorTheme === key}
                      onClick={() => handleThemeChange(key as ColorTheme)}
                    />
                  ))}
                </div>
                {Object.entries(colorThemes).map(([key, { name, color, darkColor }]) => (
                  <ThemeOption
                    key={key}
                    themeKey={key as ColorTheme}
                    name={name}
                    color={isDarkMode ? darkColor : color}
                    isActive={colorTheme === key}
                    onClick={() => handleThemeChange(key as ColorTheme)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

interface ThemeColorPreviewProps {
  themeKey: ColorTheme
  color: string
  isActive: boolean
  onClick: () => void
}

function ThemeColorPreview({ themeKey, color, isActive, onClick }: ThemeColorPreviewProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full aspect-square rounded-full overflow-hidden transition-all",
        isActive ? "ring-2 ring-offset-2 ring-primary" : "hover:scale-110",
      )}
      style={{ backgroundColor: color }}
      aria-label={`Select ${themeKey} theme`}
      aria-pressed={isActive}
    />
  )
}

interface ThemeOptionProps {
  themeKey: ColorTheme
  name: string
  color: string
  isActive: boolean
  onClick: () => void
}

function ThemeOption({ themeKey, name, color, isActive, onClick }: ThemeOptionProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "w-full flex items-center p-2 rounded-md transition-colors",
        isActive ? "bg-muted" : "hover:bg-muted/50",
      )}
      aria-label={`Switch to ${name} theme`}
      aria-pressed={isActive}
    >
      <div className="w-6 h-6 rounded-full mr-3 border border-border" style={{ backgroundColor: color }} />
      <span className="flex-1 text-left">{name}</span>
      {isActive && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3 h-3 rounded-full bg-primary" />
      )}
    </motion.button>
  )
}
