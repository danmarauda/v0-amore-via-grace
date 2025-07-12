import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "var(--space-8)", // Use space token
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sage: {
          DEFAULT: "hsl(var(--sage-green))",
          light: "hsl(142 19% 90%)", // You might want to tokenize these too
          dark: "hsl(142 19% 40%)", // Or manage via dark mode variables
        },
        cream: "hsl(var(--muted-cream))",
        rose: "hsl(var(--rose-gold))",
      },
      fontFamily: {
        sans: ["var(--font-family-sans)"],
        serif: ["var(--font-family-serif)"], // Added serif
        // Keep playfair if it's distinct from serif, otherwise remove
        playfair: ["var(--font-family-serif)"], // Mapped to new serif token
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
        "5xl": "var(--font-size-5xl)",
        "6xl": "var(--font-size-6xl)",
      },
      fontWeight: {
        extralight: "var(--font-weight-extralight)",
        light: "var(--font-weight-light)",
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
        extrabold: "var(--font-weight-extrabold)",
      },
      lineHeight: {
        none: "var(--line-height-none)",
        tight: "var(--line-height-tight)",
        snug: "var(--line-height-snug)",
        normal: "var(--line-height-normal)",
        relaxed: "var(--line-height-relaxed)",
        loose: "var(--line-height-loose)",
      },
      letterSpacing: {
        tighter: "var(--letter-spacing-tighter)",
        tight: "var(--letter-spacing-tight)",
        normal: "var(--letter-spacing-normal)",
        wide: "var(--letter-spacing-wide)",
        wider: "var(--letter-spacing-wider)",
        widest: "var(--letter-spacing-widest)",
      },
      spacing: {
        px: "var(--space-px)",
        0.5: "var(--space-0-5)",
        1: "var(--space-1)",
        1.5: "var(--space-1-5)",
        2: "var(--space-2)",
        2.5: "var(--space-2-5)",
        3: "var(--space-3)",
        3.5: "var(--space-3-5)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        7: "var(--space-7)",
        8: "var(--space-8)",
        9: "var(--space-9)",
        10: "var(--space-10)",
        11: "var(--space-11)",
        12: "var(--space-12)",
        14: "var(--space-14)",
        16: "var(--space-16)",
        20: "var(--space-20)",
        24: "var(--space-24)",
        28: "var(--space-28)",
        32: "var(--space-32)",
        36: "var(--space-36)",
        40: "var(--space-40)",
      },
      borderRadius: {
        xs: "var(--border-radius-xs)",
        sm: "var(--border-radius-sm)",
        DEFAULT: "var(--border-radius-md)", // Default for rounded utilities
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
        xl: "var(--border-radius-xl)",
        "2xl": "var(--border-radius-2xl)",
        "3xl": "var(--border-radius-3xl)",
        full: "var(--border-radius-full)",
      },
      borderWidth: {
        DEFAULT: "var(--border-width-default)",
        0: "var(--border-width-0)",
        px: "var(--border-width-px)",
        2: "var(--border-width-2)",
        4: "var(--border-width-4)",
        8: "var(--border-width-8)",
      },
      minHeight: {
        0: "var(--min-height-0)",
        full: "var(--min-height-full)",
        screen: "var(--min-height-screen)",
        svh: "var(--min-height-svh)",
        500: "var(--min-height-500)",
        600: "var(--min-height-600)",
      },
      maxWidth: {
        xs: "var(--max-width-xs)",
        sm: "var(--max-width-sm)",
        md: "var(--max-width-md)",
        lg: "var(--max-width-lg)",
        xl: "var(--max-width-xl)",
        "2xl": "var(--max-width-2xl)",
        "3xl": "var(--max-width-3xl)",
        "4xl": "var(--max-width-4xl)",
        "5xl": "var(--max-width-5xl)",
        "6xl": "var(--max-width-6xl)",
        "7xl": "var(--max-width-7xl)",
        full: "var(--max-width-full)",
        "screen-sm": "var(--max-width-screen-sm)",
        "screen-md": "var(--max-width-screen-md)",
        "screen-lg": "var(--max-width-screen-lg)",
        "screen-xl": "var(--max-width-screen-xl)",
        "screen-2xl": "var(--max-width-screen-2xl)",
        "percentage-80": "var(--max-width-percentage-80)",
      },
      aspectRatio: {
        auto: "var(--aspect-ratio-auto)",
        square: "var(--aspect-ratio-square)",
        video: "var(--aspect-ratio-video)",
      },
      transitionDuration: {
        DEFAULT: "var(--duration-300)", // Default for transition utilities
        75: "var(--duration-75)",
        100: "var(--duration-100)",
        150: "var(--duration-150)",
        200: "var(--duration-200)",
        250: "var(--duration-250)",
        300: "var(--duration-300)",
        400: "var(--duration-400)",
        500: "var(--duration-500)",
        600: "var(--duration-600)",
        700: "var(--duration-700)",
        1000: "var(--duration-1000)",
        long: "var(--duration-long)",
      },
      transitionTimingFunction: {
        DEFAULT: "var(--ease-in-out)", // Default for transition utilities
        linear: "var(--ease-linear)",
        in: "var(--ease-in)",
        out: "var(--ease-out)",
        "in-out": "var(--ease-in-out)",
        "custom-carousel": "var(--ease-custom-carousel)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }, // Consider tokenizing this value too
        },
      },
      animation: {
        "accordion-down": "accordion-down var(--duration-200) ease-out",
        "accordion-up": "accordion-up var(--duration-200) ease-out",
        shimmer: "shimmer var(--duration-1000) linear infinite", // Example, adjust duration
        float: "float var(--duration-long) ease-in-out infinite", // Example, adjust duration
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
