import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        xl: "2rem"
      },
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Manrope", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#EEF4FF",
          100: "#D9E6FF",
          500: "#4D7CFE",
          600: "#3B66E8",
          700: "#2F53C5"
        },
        ink: {
          50: "#F7F8FA",
          100: "#ECEFF4",
          500: "#65708A",
          700: "#2B3245",
          900: "#161B2A"
        },
        accent: {
          mint: "#41C7A1",
          peach: "#FFC6A3"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(22, 27, 42, 0.08)"
      },
      borderRadius: {
        card: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
