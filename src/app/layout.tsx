import { Playfair_Display, Montserrat, Libre_Baskerville } from 'next/font/google';
import "@/styles/globals.css";

import Nav from '@/sections/Nav';
import Footer from '@/sections/Footer';
import ContactMenu from "@/sections/ContactMenu";
import Script from 'next/script';
import 'aos/dist/aos.css';
import "react-datepicker/dist/react-datepicker.css";
import BookYourPrivateJet from '@/sections/BookYourPrivateJet';

// Configure the fonts with subsets
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair-display',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/cropped-logo-icon-32x32.png" />
        
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DR3V05H5Q3"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DR3V05H5Q3');
          `}
        </Script>
      </head>
      <body className={`${playfairDisplay.variable} ${montserrat.variable} max-w-screen overflow-x-hidden`}>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
          strategy="beforeInteractive"
        />
        <Nav />
        {children}
        <BookYourPrivateJet />
        <ContactMenu />
        <Footer />
      </body>
    </html>
  );
}
