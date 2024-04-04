import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      "3xl": { min: "1920px" },
      "2xl": { min: "1536px", max: "1919px" },
      xl: { min: "1280px", max: "1535px" },
      lg: { min: "1024px", max: "1279px" },
      md: { min: "768px", max: "1023px" },
      sm: { min: "640px", max: "767px" },
      tiny: { min: "480px", max: "639px" },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--light_gray_border))",
        light_gray: "hsl(var(--light_gray))",
        dim_gray: "hsl(var(--dim_gray))",
        off_white: "hsl(var(--off_white))",
        rich_navy_blue: "hsl(var(--rich_navy_blue))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "bg-animated": "url('/assets/images/circlel full.png')",
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
} satisfies Config;

export default config;
