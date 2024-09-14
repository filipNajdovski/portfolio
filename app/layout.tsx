import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Suspense } from "react";
import Footer from "./components/Footer";
import Script from "next/script";
import data from './../data.json'
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Filip Najdovski - Building Dynamic Websites",
  description: "Portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <Header />
        
        <Suspense fallback={<p>Loading...</p>}>
          {children}
        </Suspense>
        
        {/* <Footer /> */}
{/* 
        <Script
          src={data.globe}
          strategy="lazyOnload"
        /> */}
        {/* <script type="module"
          src={data.globe}>
        </script> */}
      </body>
    </html>
  );
}
