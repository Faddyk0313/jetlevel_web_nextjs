import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkerBlueIcon': '#476679',
        'darkBlue': '#0170ce',
        'lightBlue': '#0170ce',
        'grayText': '#d1d5db',
      },
      backgroundImage: {
        'home-background': "url('https://fly.jetlevel.com/assets/Private%20jet%20interior%20bg%20.webp')",
        'aboutUs-background': "url('https://jetlevel.com/wp-content/uploads/2022/08/R-29.jpg')",
        'ourOffices-background': "url('https://jetlevel.com/wp-content/uploads/2022/11/pexels-pixabay-236070-scaled.jpeg')",
        'fourMetrics-OurCommitment-background': "url('https://jetlevel.com/wp-content/uploads/2022/10/iStock-1210052781.jpeg')",
        'blue-background': "url('/images/blue-background.png')",
      },
      fontFamily: {
        playfair: ['var(--font-playfair-display)', 'serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
        libre: ['var(--font-libre-baskerville)', 'serif'],
      },
      boxShadow: {
        'card-shadow': '0px 0px 20px rgba(0, 0, 0, 0.3)', // Modify as needed
      },
    },
  },
  plugins: [],
};
export default config;
