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
			'home-background': "url('/images/Private jet interior bg .webp')",
			'aboutUs-background': "url('/images/About us Hero Image.jpg')",
			'ourOffices-background': "url('/images/our offices.jpeg')",
			'fourMetrics-OurCommitment-background': "url('/images/inside jet image.jpeg')",
			'blue-background': "url('/images/blue-background.png')"
		},
  		fontFamily: {
  			playfair: ['var(--font-playfair-display)', 'serif'],
  			montserrat: ['var(--font-montserrat)', 'serif'],
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
};
export default config;
