import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f46a25",
        "background-light": "#f8f6f5",
        "background-dark": "#221610",
        "accent-orange": "#f46a25",
        "text-dark": "#221610",
        "text-light": "#ffffff",
        "text-muted": "#b8b4b0",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "Noto Sans", "sans-serif"],
        sans: ["Plus Jakarta Sans", "Noto Sans", "sans-serif"],
      },
      fontSize: {
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      animation: {
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "scale-up": "scaleUp 0.3s ease-out",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleUp: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      boxShadow: {
        "orange-glow": "0 0 30px rgba(244, 106, 37, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
