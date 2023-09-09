import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Provider from "./providers/Provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Glen McCallum's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
