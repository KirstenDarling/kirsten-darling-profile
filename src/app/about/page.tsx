import * as React from "react";
import Timeline from "../components/Timeline";
import ProfileImage from "../../../public/profile.jpg";
import HelpingImage from "../../../public/kirstenhelpingatmwi.png";
import WorkplaceImage from "../../../public/MWI.jpg";
import ComingSoonSection from "../components/ComingSoonSection";

export default function Home() {
  // move below variables to Contenful

  const featuredEvents = [
    {
      startDate: "2024",
      endDate: "CURRENT",
      text: "You.com (MWI Client)",
      subtext:
        "Kirsten joined You.com as a Full Time ETR. This is her most recent client through MWI. She has expressed excitement over working with a modern, innovative company in the booming AI chat industry.",
      subheading: "3 Months",
      imageBelow: WorkplaceImage,
      titleLink: "https://you.com",
    },
    {
      startDate: "2024",
      endDate: "CURRENT",
      text: "DBA + Data Engineering Studies",
      subtext:
        "Kirsten began focusing on Database Administration knowledge and data engineering in general. She studied Tableau as well to take on more of a data visualization role for a client as needed.",
      subheading: "9 Months",
    },
    {
      startDate: "2022",
      endDate: "2024",
      text: "Beck's Hybrids through Element Three (MWI Client)",
      subtext:
        "Kirsten joined Element Three as a Full Time ETR. She collaborated with E3 to bring Figma designs to life for their redesign of Beck's Hybrids' website.",
      subheading: "1 Year, 8 Months",
      titleLink: "https://www.beckshybrids.com/",
    },
    {
      startDate: "2021",
      endDate: "2022",
      text: "AgVoice (MWI Client)",
      subtext:
        "Kirsten joined AgVoice as a full-time ETR through MWI, contributing to their mobile-based voice interaction service for agriculture. AgVoice is now known as Dexer.",
      subheading: "1 year",
      titleLink:
        "https://www.wga.com/press-releases/agvoice-turning-a-perpetual-ag-pain-point-into-patented-technology/",
    },
    {
      startDate: "2021",
      text: "Marketing Site Work (MWI Marketing Team)",
      subtext:
        "As a part of MWI's Marketing Team Kirsten worked on projects for Connect2Culture, CIY, Jaguar Transport, Pro Guide Batteries, and Big M Marina.",
      subheading: "4 Months",
      titleLink: "https://ciy.com",
    },
    {
      startDate: "2021",
      endDate: "CURRENT",
      text: "Software Engineer at Midwestern Interactive",
      subtext:
        "Kirsten is currently employed as a full-time software engineer at Midwestern Interactive (MWI), where she is embedded with various client teams to develop and maintain their web applications.",
      subheading: "3+ Years",
      imageBelow: HelpingImage,
      titleLink: "https://www.buildmidwestern.com/",
    },
    {
      startDate: "2020",
      subtext:
        "Kirsten worked as lead developer at Darling Web Development specializing in modernizing and optimizing websites for small businesses to enhance their mobile and desktop experiences.",
      text: "Lead Developer at Darling Web Development",
      subheading: "8 Months",
      titleLink:
        "https://web.archive.org/web/20211007025150/https://www.darlingwebdevelopment.com/",
    },
    {
      startDate: "2020",
      subtext:
        "Kirsten transitioned from a 10-year career in business to focus on software development full-time.",
      text: "The Big Industry Pivot",
      subheading: "",
    },
    {
      startDate: "2019",
      text: "Front End Developer Bootcamp",
      subtext:
        "Kirsten enrolled in Skillcrush's Front End Development bootcamp, which provided an inclusive and flexible learning environment that empowered her to break into the tech industry.",
      subheading: "2 Years",
      titleLink: "https://skillcrush.com/",
    },
    {
      startDate: "2010",
      endDate: "2020",
      text: "General Manager for Shoe Carnival specializing in Training & Development",
      subheading: "10 Years",
      subtext:
        "Kirsten led multimillion-dollar retail stores across MO, TX, OK, and CO. She provided comprehensive training to managers and staff in key areas like financial analysis, profit and loss management, market trend identification, product optimization strategies, loss prevention tactics, and essential human resources procedures.",
      titleLink: "https://www.shoecarnival.com/",
    },
    {
      startDate: "2006",
      endDate: "CURRENT",
      text: "Kirsten began her coding journey!",
      subtext:
        "Fueled by curiosity, Kirsten began coding as a hobby in her early teens, customizing MySpace and Tumblr layouts and eventually building custom WordPress templates with PHP.",
      subheading: "18 Years",
      imageAbove: ProfileImage,
      titleLink:
        "https://www.codecademy.com/resources/blog/learning-to-code-myspace-neopets-html-css/",
    },
  ];

  return (
    <div className="w-full bg-white flex-col justify-start items-center inline-flex">
      <Timeline
        helpingImage={HelpingImage}
        profileImage={ProfileImage}
        workplaceImage={WorkplaceImage}
        title="My Coding Journey"
        subtitle="With a passion for coding and over a decade of professional experience, I've combined my business acumen with technical skills to excel as a software engineer."
        // CTAButtonText="Contact Kirsten"
        events={featuredEvents}
      />
    </div>
  );
}
