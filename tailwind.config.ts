import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans-condensed)"],
        alt: ["var(--font-montserrat)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        royalBlue: "#19009E",
        pink: "#FF7DD1",
        orange: "#EE6524",
        camel: "rgba(255, 212, 181, 0.15)",
        purple: {
          DEFAULT: "#6629B0",
          100: "rgba(102, 41, 176, 0.05)",
        },
        primary: {
          900: "#25035F",
          100: "rgba(0, 102, 250, 0.1)",
          DEFAULT: "#0066FA",
        },
        secondary: {
          DEFAULT: "#FF4758",
          100: "rgba(255, 71, 88, 0.15)",
        },
      },
      gridTemplateColumns: {
        90: 'repeat(90, minmax(0, 1fr))'
      },
      gridColumn: {
        'span-30': 'span 30 / span 30',
        'span-20': 'span 20 / span 20',
        'span-18': 'span 18 / span 18',
        'span-15': 'span 15 / span 15',
        'span-10': 'span 10 / span 10',
        'span-9': 'span 9 / span 9',
        'span-7': 'span 7 / span 7',
      },
    },
  },
  plugins: [],
} satisfies Config;
