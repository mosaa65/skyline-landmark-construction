import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        ink2: "var(--color-ink-2)",
        gold: "var(--color-gold)",
        amber: "var(--color-amber)",
        sand: "var(--color-sand)",
        concrete: "var(--color-concrete)",
        forest: "var(--color-forest)",
        surface: "var(--color-surface)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        lift: "0 20px 60px rgba(10, 12, 22, 0.25)",
        card: "0 18px 40px rgba(12, 14, 24, 0.18)",
      },
      backgroundImage: {
        "radial-hero": "radial-gradient(1200px 600px at 20% 10%, rgba(201,169,110,0.22), transparent 55%)",
        "mesh": "linear-gradient(120deg, rgba(22,33,62,0.9), rgba(26,26,46,0.95)), radial-gradient(900px 500px at 80% 20%, rgba(232,168,56,0.18), transparent 60%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        slowZoom: "slowZoom 18s linear infinite",
        shimmer: "shimmer 10s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
