import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			blue: '#0071b8',
  			darkBlue: '#1A4159',
  			lightBlue: '#6ec1e4',
  		},
  		backgroundImage: {
			'home-background': "url('https://fly.jetlevel.com/assets/Private%20jet%20interior%20bg%20.webp')",
			'aboutUs-background': "url('https://jetlevel.com/wp-content/uploads/2022/08/R-29.jpg')",
			'ourOffices-background': "url('https://jetlevel.com/wp-content/uploads/2022/11/pexels-pixabay-236070-scaled.jpeg')",
			'fourMetrics-OurCommitment-background': "url('https://jetlevel.com/wp-content/uploads/2022/10/iStock-1210052781.jpeg')",
			'blue-background': "url('/images/blue-background.png')"
		},
  		fontFamily: {
  			playfair: ['var(--font-playfair-display)', 'serif'],
  			libre: ['var(--font-libre-baskerville)', 'serif'],
  			montserrat: ['var(--font-montserrat)', 'serif'],
				georgia: ['Georgia', 'Sans-serif'],
				calibari:["Calibari", 'Sans-serif']
  		},
		screens:{
			carousel: '900px',
			weather_widget: '740px'
		},
  		boxShadow: {
			card_shadow: '0px 5px 12px 0px rgb(0,0,0,0.4)',
			card_shadow_blog: '0px 0px 12px 0px rgb(0,0,0,0.4)',
			card_shadow_blog2: '0px 0px 20px 0px rgb(0,0,0,0.4)',
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
