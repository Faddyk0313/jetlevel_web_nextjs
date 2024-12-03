import { Playfair_Display, Montserrat, Libre_Baskerville } from 'next/font/google';
import "@/styles/globals.css";
import Nav from '@/sections/Nav';
import Footer from '@/sections/Footer';
import ContactMenu from "@/sections/ContactMenu";
import BookYourPrivateJet from '@/sections/BookYourPrivateJet';
import Script from 'next/script';

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

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-libre-baskerville',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://jetlevel.com/wp-content/uploads/2019/08/cropped-icon-32x32.png" />
      </head>
      <body className={`${playfairDisplay.variable} ${montserrat.variable} ${libreBaskerville.variable} max-w-screen overflow-x-hidden`}>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
          strategy="beforeInteractive"
        />
        <Nav />
        {children}
        {/* <BookYourPrivateJet /> */}
        <ContactMenu />
        <Footer />
      </body>
    </html>
  );
}
