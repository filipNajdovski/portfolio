import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";
import data from './../data.json'

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

        {children}
        
        <Footer />

        <Script
          src={data.globe}
          strategy="lazyOnload"
        />
        {/* <script type="module"
          src={data.globe}>
        </script> */}
      </body>
    </html>
  );
}
