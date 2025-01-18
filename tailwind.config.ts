import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans-condensed)'],
        alt: ['var(--font-montserrat)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        royalBlue: "#19009E",
      },
    },
  },
  plugins: [],
} satisfies Config;
