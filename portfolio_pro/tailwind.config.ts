import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{md,json}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glass: "0 12px 40px -12px rgba(4, 28, 45, 0.28)"
      },
      colors: {
        ink: "var(--ink)",
        muted: "var(--muted)",
        panel: "var(--panel)",
        accent: "var(--accent)",
        accentStrong: "var(--accent-strong)",
        line: "var(--line)",
        glow: "var(--glow)"
      },
      backgroundImage: {
        "hero-gradient": "var(--hero-gradient)"
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: []
};

export default config;
