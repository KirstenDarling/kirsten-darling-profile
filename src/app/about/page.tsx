"use client";

import { useState } from "react";

import CombinedNavBar from "../components/CombinedNavBar";
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
import BuildingSVG from "../../../public/building.svg";
import Timeline from "../components/Timeline";
import ProfessionalJourneyImage from "../../../public/professionalJourneyImage.png";

export default function Home() {
  // move below variables to Contenful
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

  const featuredEvents = [
    {
      date: "2018",
      text: "Developed an award-winning data warehouse for a leading e-commerce platform.",
    },
    {
      date: "2019",
      text: "Engineered a real-time analytics system for a national healthcare provider.",
    },
    {
      date: "2020",
      text: "Led the data migration for a merger of two Fortune 500 companies.",
    },
    {
      date: "2021",
      text: "Optimized machine learning pipelines for a tech startup's recommendation system.",
    },
    {
      date: "2022",
      text: "Implemented GDPR-compliant data practices for a European client.",
    },
    {
      date: "2023",
      text: "Architected a scalable data lake for a multinational media conglomerate.",
    },
  ];

  const [value, setValue] = useState(0);

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
          ABOUT page coming soon!
        </h1>
      </div>
      <Image alt="" src={BuildingSVG} />
      <Timeline
        mainImage={ProfessionalJourneyImage}
        title="Professional Journey"
        subtitle="With a decade in data engineering, I've sculpted data solutions that drive
        business growth."
        CTAButtonText="Contact Lucas"
        events={featuredEvents}
      />
    </div>
  );
}
