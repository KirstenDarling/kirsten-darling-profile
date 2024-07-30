"use client";

import { useState } from "react";

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
import ProfileImage from "../../../public/profile.jpg";
import HelpingImage from "../../../public/kirstenhelpingatmwi.png";
import WorkplaceImage from "../../../public/MWI.jpg";
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

  const featuredEvents = [
    {
      startDate: "2006",
      endDate: "CURRENT",
      text: "Kirsten began her coding journey!",
      subtext:
        "Fueled by curiosity, Kirsten began coding as a hobby in her early teens, customizing MySpace and Tumblr layouts and eventually building custom WordPress templates with PHP.",
      subheading: "18 Years",
      imageAbove: ProfileImage,
    },
    {
      startDate: "2010",
      endDate: "2020",
      text: "General Manager for Shoe Carnival specializing in Training & Development",
      subheading: "10 Years",
      subtext:
        "Led multimillion-dollar retail stores across MO, TX, OK, and CO; Provided comprehensive training to managers and staff in key areas like financial analysis, profit and loss management, market trend identification, product optimization strategies, loss prevention tactics, and essential human resources procedures.",
    },
    {
      startDate: "2019",
      text: "Front End Developer Bootcamp",
      subtext:
        "Enrolled in Skillcrush's Front End Development bootcamp, which provided an inclusive and flexible learning environment that empowered me to break into the tech industry.",
      subheading: "2 Years",
    },
    {
      startDate: "2020",
      subtext:
        "Kirsten transitioned from a 10-year career in business to focus on software development full-time.",
      text: "The Big Industry Pivot",
      subheading: "",
    },
    {
      startDate: "2020",
      subtext:
        "Worked as lead developer at Darling Web Development specializing in modernizing and optimizing websites for small businesses to enhance their mobile and desktop experiences.",
      text: "Lead Developer at Darling Web Development",
      subheading: "8 Months",
    },
    {
      startDate: "2021",
      endDate: "CURRENT",
      text: "Software Engineer at Midwestern Interactive",
      subtext:
        "Currently employed as a full-time software engineer at Midwestern Interactive (MWI), where I am embedded with various client teams to develop and maintain their web applications.",
      subheading: "3+ Years",
      imageBelow: HelpingImage,
    },
    {
      startDate: "2021",
      text: "Marketing Site Work (MWI Marketing Team)",
      subtext:
        "As a part of MWI's Marketing Team I worked on projects for Connect2Culture, CIY, Jaguar Transport, Pro Guide Batteries, and Big M Marina.",
      subheading: "4 Months",
    },
    {
      startDate: "2021",
      endDate: "2022",
      text: "AgVoice (MWI Client)",
      subtext:
        "Joined AgVoice as a full-time ETR through MWI, contributing to their mobile-based voice interaction service for agriculture.",
      subheading: "1 year",
    },
    {
      startDate: "2022",
      endDate: "2024",
      text: "Beck's Hybrids through Element Three (MWI Client)",
      subtext:
        "Joined Element Three as a Full Time ETR. Collaborated with E3 to bring Figma designs to life for their redesign of Beck's Hybrids' website.",
      subheading: "1 Year, 8 Months",
    },
    {
      startDate: "2024",
      endDate: "CURRENT",
      text: "DBA + Data Engineering Studies",
      subtext:
        "Began focusing on Database Administration knowledge and data engineering in general. Studied Tableau as well to take on more of a data visualization role for a client as needed.",
      subheading: "6 Months",
    },
    {
      startDate: "2024",
      endDate: "CURRENT",
      text: "You.com (MWI Client)",
      subtext:
        "Joined You.com as a Full Time ETR. This is Kirsten's most recent client through MWI. She's expressed excitement over working with a modern, innovative company in the booming AI chat industry.",
      subheading: "1 Month",
      imageBelow: WorkplaceImage,
    },
  ];

  const [value, setValue] = useState(0);

  return (
    <div className="w-full bg-white flex-col justify-start items-center inline-flex">
      <Timeline
        helpingImage={HelpingImage}
        profileImage={ProfileImage}
        workplaceImage={WorkplaceImage}
        title="My Coding Journey"
        subtitle="With a passion for coding and over a decade of professional experience, I've combined my business acumen with technical skills to excel as a software engineer."
        CTAButtonText="Contact Kirsten"
        events={featuredEvents}
      />
    </div>
  );
}
