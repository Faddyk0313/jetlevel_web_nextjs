import { Playfair_Display, Montserrat, Libre_Baskerville } from 'next/font/google';
import "@/styles/globals.css";

import Nav from '@/sections/Nav';
import Footer from '@/sections/Footer';
import ContactMenu from "@/sections/ContactMenu";
import Script from 'next/script';
import 'aos/dist/aos.css';
import "react-datepicker/dist/react-datepicker.css";
import BookYourPrivateJet from '@/sections/BookYourPrivateJet';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSWCSWH');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
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
        {/* Google tag (gtag.js ---End---- */}
      </head>
      <body className={`${playfairDisplay.variable} ${montserrat.variable} max-w-screen overflow-x-hidden`}>
        {/*Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSWCSWH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Avinode Tracking Script */}
        <Script id="avinode-tracking" strategy="afterInteractive">
          {`
            // Listen for Avinode tracking events
            window.addEventListener("avinode-tracking", function(msg) {
              console.log("tracking-key", msg.detail.key);  // Log the event key
              console.log("tracking-args", msg.detail.args); // Log any associated arguments

              // Push these events to Google Analytics 4
              if (msg.detail.key === 'send_inquiry') {
                  gtag('event', 'send_inquiry', {
                      'event_label': 'Avinode Send Inquiry',
                      'event_category': 'Engagement',
                      'value': 1
                  });
              }
            }, {passive: true});
          `}
        </Script>
        {/* End Avinode Tracking Script */}

        {/* Google maps */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
          strategy="beforeInteractive"
        />

        <Nav />
        {children}
        {/* <BookYourPrivateJet /> */}
        <ContactMenu />
        <Footer />
 
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
