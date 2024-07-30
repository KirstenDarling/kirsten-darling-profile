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
import { FaAddressCard, FaDatabase } from "react-icons/fa";
import GirlIcon from "../app/favicon.ico";
import CombinedNavBar from "./components/CombinedNavBar";

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
          target: "_blank",
        },
        {
          link: "GitHub",
          URL: "https://github.com/KirstenDarling",
          target: "_blank",
        },
        {
          link: "Google Dev",
          URL: "https://developers.google.com/profile/u/kirsten_darling",
          target: "_blank",
        },
        { link: "Dev.to", URL: "https://dev.to/kdarling93", target: "_blank" },
      ],
    },
  ];
  const links = [
    { title: "Portal", URL: "/study-portal" },
    { title: "Portfolio", URL: "/portfolio" },
    { title: "Certifications", URL: "/certifications" },
  ];

  const additionalLinks = [
    { title: "About Me", URL: "/about" },
    {
      title: "@kirstendarling",
      URL: "https://www.linkedin.com/in/kirstendarling/",
    },
    { title: "Connect", URL: "/connect" },
  ];
  return (
    <html lang="en">
      <RecoilRoot>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="icon" href="/favicon.io" sizes="any" />
        </Head>
        <GoogleAnalytics />

        <body className={inter.className}>
          <CombinedNavBar
            FAIcon={FaDatabase}
            pageTitle="Kirsten Darling"
            links={links}
            additionalLinks={additionalLinks}
            backgroundEdges="bg-black"
            backgroundColor="bg-white"
            textColor="text-black"
            font=""
            className="block"
          />
          {children}
          <FooterThicc
            icon={HeartIcon}
            pageTitle="Kirsten Darling"
            subtitle="Study. Code. Deploy. Repeat."
            columns={footerColumns}
            textColor="text-neutral-100"
            backgroundColor="bg-black"
            additionalSection={true}
            className="block"
          />
        </body>
      </RecoilRoot>
    </html>
  );
}
