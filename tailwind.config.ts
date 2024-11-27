import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        oswald: ["Oswald", ...fontFamily.sans],
      },
      colors: {
        "favorite-red": "#FF0000",
        "hover-shade": "",
        success: {
          600: "#039855",
          500: "#12B76A",
        },
        banner: "#F4F4F5",
        brand: {
          "50": "#F0F6EE",
          "100": "#DEECDA",
          "200": "#BBD7B2",
          "400": "#5B904B",
          "500": "#294122",
          "700": "#22361C",
          default: "#294122",
        },
        gray: {
          "25": "#FCFCFD",
          "50": "#F9FAFB",
          "100": "#F2F4F7",
          "200": "#EAECF0",
          "300": "#D0D5DD",
          "400": "#98A2B3",
          "600": "#475467",
          "700": "#344054",
          "800": "#1D2939",
          "900": "#101828",
        },
        warning: {
          100: "#FEF0C7",
          "400": "#FDB022",
          "800": "#93370D",
        },
        error: {
          "600": "#D92D20",
        },
        greekBlue: {
          "6": "#2F54EB",
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "custom-1": "0px 0px 0px 2px rgba(91, 144, 75, 0.1)",
        "custom-2": "0px 1px 2px 0px rgba(16, 24, 40, 0.1)",
        "custom-multi":
          "0px 0px 0px 4px rgba(91, 144, 75, 0.1), 0px 1px 2px 0px rgba(16, 24, 40, 0.1)",
        "custom-3": "0px 2px 8px 0px rgba(16, 24, 40, 0.1)",
      },
      backgroundImage: {
        "hover-shade":
          "linear-gradient(359.13deg, rgba(0, 0, 0, 0) -9.32%, rgba(0, 0, 0, 0.32) 99.26%)",
      },
      cursor: {
        highlight: "url('/assets/svgs/highlighter.svg'),  auto",
      },
      width: {
        "lg-screen": "calc(25%-1rem)",
        "tablet-screen": "calc(33.33%-1rem)",
        "flex-two-16": "calc(50%-1rem)",
        "flex-two-40": "calc(50%-2.5rem)",
      },
      maxWidth: {
        "flex-two-16": "calc(50%-1rem)",
        "flex-two-40": "calc(50%-2.5rem)",
      },
      minWidth: {
        "flex-two-16": "calc(50%-1rem)",
        "flex-two-40": "calc(50%-2.5rem)",
      },
      flexBasis: {
        "flex-two-16": "calc(50%-1rem)",
        "flex-two-40": "calc(50%-2.5rem)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/line-clamp")],
};
export default config;
