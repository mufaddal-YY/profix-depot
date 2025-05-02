import "./globals.css";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense } from "react";
import ProgressBars from "@/components/Nav/ProgressBar";
import Header from "@/components/Nav/Header";
import Footer from "@/components/Nav/Footer";
import { getContactData, getProductsData } from "@/sanity/fetchedData";
import TopBar from "@/components/Nav/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Profix Depot | Home Improvement Store",
  description: "Upgrade your home with quality & style",
};

export default async function RootLayout({ children }) {
  const contactData = await getContactData();
  const productsData = await getProductsData();
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PXB84SSJ');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXB84SSJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        <TopBar contactData={contactData} />
        <Header productsData={productsData} contactData={contactData} />
        <main className="mt-32">{children}</main>
        <Footer contactData={contactData} productsData={productsData} />
        <WhatsAppButton contactData={contactData} />
        <Suspense>
          <ProgressBars />
        </Suspense>
      </body>
    </html>
  );
}
