import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0D1B2A", mid: "#0F2035", light: "#162840" },
        primary: { DEFAULT: "#1B6CA8", mid: "#2485C8", light: "#3AABDF" },
        teal: { DEFAULT: "#0ABFBC", light: "#7EE8E6" },
        slate: "#4A6580",
        success: "#22C58B",
        "page-bg": "#F0F7FC",
        mist: "#E8F4FB",
        border: "rgba(27,108,168,0.12)",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: { card: "16px" },
      boxShadow: {
        s1: "0 1px 3px rgba(13,27,42,.06),0 1px 2px rgba(13,27,42,.04)",
        s2: "0 4px 16px rgba(13,27,42,.08),0 2px 6px rgba(13,27,42,.06)",
        s3: "0 12px 40px rgba(13,27,42,.12),0 4px 12px rgba(13,27,42,.08)",
        s4: "0 24px 64px rgba(13,27,42,.16)",
      },
      maxWidth: { wrap: "1200px" },
    },
  },
  plugins: [],
};
export default config;
