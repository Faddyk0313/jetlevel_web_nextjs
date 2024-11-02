import { Playfair_Display, Lato, Libre_Baskerville } from 'next/font/google';
import "@/styles/globals.css";
import Nav from '@/sections/Nav';
import Footer from '@/sections/Footer';
import ContactMenu from "@/sections/ContactMenu";

// Configure the fonts with subsets
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair-display',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-lato',
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
      <body className={`${playfairDisplay.variable} ${lato.variable} ${libreBaskerville.variable}`}>
        <Nav />
        {children}
        <ContactMenu />
        <Footer />
      </body>
    </html>
  );
}
