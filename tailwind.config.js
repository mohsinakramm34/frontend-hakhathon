/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
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
        border: "hsl(210, 15%, 85%)", // Light blue border
        input: "hsl(210, 20%, 95%)", // Light blue input background
        ring: "hsl(210, 20%, 70%)", // Blue ring for focus states
        background: "hsl(210, 30%, 20%)", // Darker blue background
        foreground: "hsl(210, 15%, 95%)", // Lighter text color
        primary: {
          DEFAULT: "hsl(210, 100%, 50%)", // Blue primary color
          foreground: "hsl(210, 100%, 90%)", // Lighter primary foreground color
        },
        secondary: {
          DEFAULT: "hsl(200, 100%, 50%)", // Secondary blue color
          foreground: "hsl(200, 100%, 90%)", // Lighter secondary foreground
        },
        destructive: {
          DEFAULT: "hsl(0, 100%, 50%)", // Red for destructive actions
          foreground: "hsl(0, 100%, 90%)", // Lighter destructive foreground
        },
        muted: {
          DEFAULT: "hsl(210, 15%, 60%)", // Muted blue color
          foreground: "hsl(210, 15%, 90%)", // Lighter muted foreground
        },
        accent: {
          DEFAULT: "hsl(240, 100%, 60%)", // Accent blue
          foreground: "hsl(240, 100%, 90%)", // Light accent foreground
        },
        popover: {
          DEFAULT: "hsl(210, 30%, 25%)", // Popover dark blue
          foreground: "hsl(210, 30%, 80%)", // Popover light text
        },
        card: {
          DEFAULT: "hsl(210, 20%, 30%)", // Card background color (dark blue)
          foreground: "hsl(210, 20%, 80%)", // Card foreground (light blue)
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
