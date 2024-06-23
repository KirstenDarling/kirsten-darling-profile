"use client";

import { useState } from "react";

import CardsSquare3 from "./components/CardsSquare3";
import CombinedHero from "./components/CombinedHero";
import CombinedNavBar from "./components/CombinedNavBar";
import FooterThicc from "./components/FooterThicc";
import ProjectLargeImageAccordion3 from "./components/ProjectLargeImageAccordion3";
import QuoteWithImage from "./components/QuoteWithImage";
import TextBanner from "./components/TextBanner";
import { FaAddressCard, FaDatabase } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaHouseLaptop } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import NovaPerson2 from "../../public/NovaPerson2.png";
import HeartIcon from "../../public/heartIcon.svg";
import HeroGen1 from "../../public/heroGen1.jpg";
import Purple8 from "../../public/purple8.jpg";
import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { GitHub, LinkedIn } from "@mui/icons-material";
import BuildingSVG from "../../public/building.svg";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Home() {
  const featuredCards = [
    {
      eyebrowText: "Transcend Reality",
      heading: "Reshape the Metropolis Skyline",
      subheading: "Urban revolution begins",
      CTAText: "Embark the Hype",
    },
    {
      eyebrowText: "Hack the System",
      heading: "Reimagine Cybernetic Life",
      subheading: "AI rebellion starts now",
      CTAText: "Lead the Change",
    },
  ];

  const featuredLongCard = {
    eyebrowText: "Rebel With Cause",
    heading: "Redefine Humanity's Fate",
    subheading: "Cyber evolution awaits",
    CTAText: "Seize the Future",
  };

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

  const footerColumns = [
    {
      links: [
        { link: "Study Portal", URL: "/study-portal" },
        { link: "Coding Resources", URL: "/coding-resources" },
        { link: "Flash Cards", URL: "/flash-cards" },
        { link: "Virtual Bulletin", URL: "/bulletin" },
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
    <div className="w-full bg-white flex-col justify-start items-center inline-flex">
      <CombinedNavBar
        FAIcon={FaDatabase}
        pageTitle="Kirsten Darling"
        links={links}
        additionalLinks={additionalLinks}
        backgroundEdges="bg-black"
        backgroundColor="bg-white"
        textColor="text-black"
        font=""
        className="hidden sm:block"
      />
      <div>
        <h1 className="text-[25px] sm:text-[48px] text-center">
          KIRSTEN DARLING&apos;s site is currently undergoing renovations. Check
          back soon for updates!
        </h1>
      </div>
      {/* <CombinedHero
        heading="I'm Kirsten, Software Engineer and Data Explorer."
        subheading="Explore my coding journey and the resources that fueled it. "
        buttonText="Study Room"
        image={HeroGen1}
        backgroundStyle="bg-black"
        textStyle="text-neutral-100 text-7xl font-normal font-['Fugaz One'] leading-[77.76px]"
        subTextStyle="text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px] mt-[3%]"
        buttonStyle="bg-purple-500 max-h-[60px] max-w-[360px] mt-[10%] text-white font-normal font-['Open Sans'] leading-[27px]"
      /> */}
      {/* <TextBanner
        heading="From Dream to Deployment"
        subheading="Let's transform your Figma designs into reality"
        image={Purple8}
      /> */}

      {/* <CardsSquare3
        heading="Neon Dreams Unveiled"
        subheading="Immersive Reality Awaits"
        shortCards={featuredCards}
        longCard={featuredLongCard}
      />
      <ProjectLargeImageAccordion3 /> */}
      {/* <QuoteWithImage
        quote="“Their vision for the cyber world transformed my reality.”"
        author="Maverick T., Cyberpunk Enthusiast"
        image={NovaPerson2}
        bgColor="black"
      /> */}
      {/* <FooterThicc
        icon={HeartIcon}
        pageTitle="Kirsten Darling"
        subtitle="Study. Code. Deploy. Repeat."
        columns={footerColumns}
        textColor="text-neutral-100"
        backgroundColor="bg-black"
        additionalSection={true}
        className="hidden sm:block"
      /> */}
      {/* Move this to it's own component */}
      <Image alt="" src={BuildingSVG} />
    </div>
  );
}
