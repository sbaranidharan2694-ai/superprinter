import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Outfit"', 'sans-serif'],
        ui: ['"Outfit"', 'sans-serif'],
        tamil: ['"Noto Sans Tamil"', 'sans-serif'],
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      fontWeight: {
        display: "600",
        "display-bold": "700",
        "display-extrabold": "800",
      },
      fontSize: {
        "display-xl": ["56px", { lineHeight: "1.1" }],
        "display-lg": ["48px", { lineHeight: "1.15" }],
        "display-md": ["28px", { lineHeight: "1.25" }],
        "display-sm": ["22px", { lineHeight: "1.3" }],
      },
      colors: {
        "ink-black": "var(--ink-black)",
        "navy-deep": "var(--navy-deep)",
        navy: "var(--navy)",
        "navy-dark": "var(--color-navy-dark)",
        "navy-light": "var(--color-navy-light)",
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
        "gold-muted": "var(--gold-muted)",
        "gold-bg": "var(--gold-bg)",
        "gold-pale": "var(--gold-bg)",
        "paper-white": "var(--paper-white)",
        "pure-white": "var(--pure-white)",
        cream: "var(--color-cream)",
        charcoal: "var(--charcoal)",
        "gray-text": "var(--gray-text)",
        "gray-light": "var(--gray-light)",
        "border-light": "var(--border-light)",
        "wedding-deep": "var(--wedding-deep)",
        "wedding-red": "var(--wedding-red)",
        "wedding-gold": "var(--wedding-gold)",
        whatsapp: "var(--whatsapp)",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        "4": "var(--radius-sm)",
        "8": "var(--radius-md)",
        "16": "var(--radius-lg)",
        "24": "var(--radius-xl)",
        "3xl": "24px",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        gold: "var(--shadow-gold)",
        card: "var(--shadow-card)",
        hover: "var(--shadow-hover)",
        glass: "var(--shadow-glass)",
      },
      maxWidth: {
        content: "var(--max-width)",
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
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.4" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-ring": "pulse-ring 2.5s ease-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
