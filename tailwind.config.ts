import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('https://fly.jetlevel.com/assets/Private%20jet%20interior%20bg%20.webp')",
      },
      fontFamily: {
        playfair: ['var(--font-playfair-display)', 'serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
        libre: ['var(--font-libre-baskerville)', 'serif'],
      },
      
    },
  },
  plugins: [],
};
export default config;
