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
import { Toaster } from "sonner";

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
      <body className={`${inter.className} antialiased`}>
        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17015153915"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17015153915');
          `}
        </Script>
        <TopBar contactData={contactData} />
        <Header productsData={productsData} contactData={contactData} />
        <main className="mt-32">
          {children}
          <Toaster closeButton position="top-right" richColors />
        </main>
        <Footer contactData={contactData} productsData={productsData} />
        <WhatsAppButton contactData={contactData} />
        <Suspense>
          <ProgressBars />
        </Suspense>
      </body>
    </html>
  );
}
