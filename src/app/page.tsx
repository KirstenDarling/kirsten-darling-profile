import CardsSquare3 from "./components/CardsSquare3";
import CombinedHero from "./components/CombinedHero";
import CombinedNavBar from "./components/CombinedNavBar";
import FooterThicc from "./components/FooterThicc";
import ProjectLargeImageAccordion3 from "./components/ProjectLargeImageAccordion3";
import QuoteWithImage from "./components/QuoteWithImage";
import TextBanner from "./components/TextBanner";
import { FaDatabase } from "react-icons/fa";
import NovaPerson2 from "../../public/NovaPerson2.png";
import HeartIcon from "../../public/heartIcon.svg";
import HeroGen1 from "../../public/heroGen1.jpg";
import Purple8 from "../../public/purple8.jpg";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
    { title: "About Me", URL: "/about-me" },
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
        { link: "About Me", URL: "/about-me" },
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
      />
      <CombinedHero
        heading="I'm Kirsten, Software Engineer and Data Explorer."
        subheading="Explore my coding journey and the resources that fueled it. "
        buttonText="Study Room"
        image={HeroGen1}
        backgroundStyle="bg-black"
        textStyle="text-neutral-100 text-7xl font-normal font-['Fugaz One'] leading-[77.76px]"
        subTextStyle="text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px] mt-[3%]"
        buttonStyle="bg-purple-500 max-h-[60px] max-w-[360px] mt-[10%] text-white font-normal font-['Open Sans'] leading-[27px]"
      />
      <TextBanner
        heading="From Dream to Deployment"
        subheading="Let's transform your Figma designs into reality"
        image={Purple8}
      />

      <CardsSquare3
        heading="Neon Dreams Unveiled"
        subheading="Immersive Reality Awaits"
        shortCards={featuredCards}
        longCard={featuredLongCard}
      />
      <ProjectLargeImageAccordion3 />
      <QuoteWithImage
        quote="“Their vision for the cyber world transformed my reality.”"
        author="Maverick T., Cyberpunk Enthusiast"
        image={NovaPerson2}
        bgColor="black"
      />
      <FooterThicc
        icon={HeartIcon}
        pageTitle="Kirsten Darling"
        subtitle="Study. Code. Deploy. Repeat."
        columns={footerColumns}
        textColor="text-neutral-100"
        backgroundColor="bg-black"
        additionalSection={true}
      />
      <Box sx={{ width: 500 }}>
        <BottomNavigation>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}
