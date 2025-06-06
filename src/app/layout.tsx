import "@/src/css/globals.css";
import "@/src/css/swiper.css";

import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import { ReactNode } from "react";

import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import { Sticky } from "../components/ui/Sticky";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["vietnamese"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["vietnamese"],
});

export const metadata: Metadata = {
  title: "SunFil - Genuine Filter",
  description: "Là một trang thương mại điện tử",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning={true}>
      <body className={`${montserrat.variable} ${nunito.variable} antialiased`}>
        <div className="h-full w-full">
          <Header />
          {children}
          <Footer />
          <Sticky />
        </div>
      </body>
    </html>
  );
}
