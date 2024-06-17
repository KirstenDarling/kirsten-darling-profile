import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import GoogleAnalytics from "../app/components/GoogleAnalytics";
import FooterMobile from "./components/FooterMobile";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kirsten Darling - Data Explorer",
  description:
    "Website, portfolio, and Study Room for Kirsten Darling - a software engineer and data explorer based in Denver, Colorado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [value, setValue] = useState(0);

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
      <footer>
        <FooterMobile />
      </footer>
    </html>
  );
}
