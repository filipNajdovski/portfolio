import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Suspense } from "react";
import Footer from "./components/Footer";
import Script from "next/script";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Filip Najdovski - Tailored Web Solutions for your needs",
  description: "I design and develop modern web / mobile apps and websites tailored to your needs, offering seamless UI/UX design and data-driven solutions to elevate your brand and business.",
  twitter: {
    card: "summary_large_image",
    title: "Filip Najdovski - Tailored Web Solutions for your needs",
    description: "I design and develop modern web / mobile apps and websites tailored to your needs, offering seamless UI/UX design and data-driven solutions to elevate your brand and business.",
    images: [
      {
        url: "https://www.najdovski.solutions/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffilip-logo.c7f6815e.png&w=384&q=75",
        width: 456, // Optional: specify image dimensions
        height: 555, // Optional: specify image dimensions
        alt: "Najdovski Technologies and Software Development", // Optional: image alt text
      },
    ], // Use an array for the image URL(s)
  },
  openGraph: {
    title: "Filip Najdovski - Tailored Web Solutions for your needs",
    description: "I design and develop modern web / mobile apps and websites tailored to your needs, offering seamless UI/UX design and data-driven solutions to elevate your brand and business.",
    url: "https://www.najdovski.solutions/",
    siteName: "Najdovski Solutions - Tailored Web Solutions for your needs",
    images: [
      {
        url: "https://www.najdovski.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffilip-logo.c7f6815e.png&w=384&q=75",
        width: 456, // Optional: specify image dimensions
        height: 555, // Optional: specify image dimensions
        alt: "Najdovski Solutions for Software Development", // Optional: image alt text
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link rel="apple-touch-icon" sizes="180x180" href="./apple-icon.png" />
      </head>
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
