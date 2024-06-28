"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import GoogleAnalytics from "../app/components/GoogleAnalytics";
import FooterMobile from "./components/FooterMobile";
import { RecoilRoot } from "recoil";
import FooterThicc from "./components/FooterThicc";
import HeartIcon from "../../public/heartIcon.svg";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Kirsten Darling - Data Explorer",
  description:
    "Website, portfolio, and Study Room for Kirsten Darling - a software engineer and data explorer based in Denver, Colorado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerColumns = [
    {
      links: [
        { link: "Study Portal", URL: "/study-portal" },
        { link: "Coding Resources", URL: "/coding-resources" },
        { link: "Flash Cards", URL: "/flash-cards" },
        { link: "Blog Posts", URL: "/blog" },
      ],
    },
    {
      links: [
        { link: "Portfolio", URL: "/portfolio" },
        { link: "Certifications", URL: "/certifications" },
        { link: "About Me", URL: "/about" },
        { link: "Connect", URL: "/connect" },
      ],
    },
    {
      links: [
        {
          link: "LinkedIn",
          URL: "https://www.linkedin.com/in/kirstendarling/",
        },
        { link: "GitHub", URL: "https://github.com/KirstenDarling" },
        {
          link: "Google Dev",
          URL: "https://developers.google.com/profile/u/kirsten_darling",
        },
        { link: "Dev.to", URL: "https://dev.to/kdarling93" },
      ],
    },
  ];
  return (
    <html lang="en">
      <RecoilRoot>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <GoogleAnalytics />
        <body className={inter.className}>{children}</body>
        {/* <footer> */}
        <FooterMobile />
        <FooterThicc
          icon={HeartIcon}
          pageTitle="Kirsten Darling"
          subtitle="Study. Code. Deploy. Repeat."
          columns={footerColumns}
          textColor="text-neutral-100"
          backgroundColor="bg-black"
          additionalSection={true}
          className="hidden sm:block"
        />
        {/* </footer> */}
      </RecoilRoot>
    </html>
  );
}
