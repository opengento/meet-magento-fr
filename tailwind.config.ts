import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          900: "#25035F",
          DEFAULT: "#0066FA",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
