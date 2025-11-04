import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BengkelHub",
  description: "BengkelHub"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <>
          <meta property="og:image" content="https://bengkelhubblob.blob.core.windows.net/internal-documents/bengkelku_logo.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://bengkelhub.id/"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:title" content="BengkelHub"></meta>
          <meta property="og:description" content="Tempat untuk segala kebutuhan kendaraan Anda! Menghubungkan Anda dengan bengkel terdekat dan pemasok terbaik."></meta>
          <meta property="fb:app_id" content="1868679220323044"></meta>
        </>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          {/* <PopupWidget /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
