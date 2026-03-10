import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B3A6B",
          mid: "#243d7a",
          dk: "#0f2348",
        },
        teal: {
          DEFAULT: "#0D8FAB",
          lt: "#12a8c7",
          pale: "#e8f7fa",
        },
        cream: {
          DEFAULT: "#F8F5F0",
          dk: "#EDE9E2",
        },
        amber: {
          DEFAULT: "#E8860A",
          lt: "#f5a030",
          pale: "#fef3e2",
        },
        border: "#E0DAD2",
        t1: "#1a1a2e",
        t2: "#4a5568",
        t3: "#718096",
      },
      fontFamily: {
        heading: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        s1: "0 1px 3px rgba(27,58,107,.06),0 1px 2px rgba(27,58,107,.04)",
        s2: "0 4px 16px rgba(27,58,107,.08),0 2px 6px rgba(27,58,107,.06)",
        s3: "0 12px 40px rgba(27,58,107,.12),0 4px 12px rgba(27,58,107,.08)",
        s4: "0 24px 64px rgba(27,58,107,.16)",
      },
      maxWidth: {
        wrap: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
