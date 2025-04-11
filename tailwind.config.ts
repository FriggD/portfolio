import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
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
        // New color palette
        pale_purple: {
          DEFAULT: "#e8d7f1",
          100: "#341843",
          200: "#682f86",
          300: "#994fc1",
          400: "#c092d9",
          500: "#e8d7f1",
          600: "#ecdef3",
          700: "#f1e6f6",
          800: "#f5eef9",
          900: "#faf7fc",
        },
        thistle: {
          DEFAULT: "#d3bccc",
          100: "#301f2b",
          200: "#603f56",
          300: "#905e81",
          400: "#b38ba7",
          500: "#d3bccc",
          600: "#dcc9d6",
          700: "#e4d6e0",
          800: "#ede4ea",
          900: "#f6f1f5",
        },
        pomp_and_power: {
          DEFAULT: "#a167a5",
          100: "#211422",
          200: "#422844",
          300: "#633c66",
          400: "#845088",
          500: "#a167a5",
          600: "#b586b8",
          700: "#c7a4ca",
          800: "#dac3dc",
          900: "#ece1ed",
        },
        tekhelet: {
          DEFAULT: "#4a306d",
          100: "#0f0a16",
          200: "#1e132c",
          300: "#2d1d42",
          400: "#3c2758",
          500: "#4a306d",
          600: "#6c469f",
          700: "#906cbf",
          800: "#b59dd4",
          900: "#daceea",
        },
        prussian_blue: {
          DEFAULT: "#0e273c",
          100: "#03080c",
          200: "#061019",
          300: "#091825",
          400: "#0c2032",
          500: "#0e273c",
          600: "#1f5784",
          700: "#2f85ca",
          800: "#73aede",
          900: "#b9d6ef",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
