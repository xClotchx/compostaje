import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bosque: { DEFAULT: "#1E3B2C", claro: "#2F5A43" },
        hoja: { DEFAULT: "#5E9140", suave: "#E4EEDC" },
        tierra: { DEFAULT: "#4A3426", suave: "#EFE7E0" },
        musgo: "#F5F7F1",
        brote: "#C8E36B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
