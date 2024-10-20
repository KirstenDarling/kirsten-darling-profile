"use client";

import CombinedHero from "./components/CombinedHero";
import HeroGen1 from "../../public/heroGen1.jpg";
import * as React from "react";
import CertificationCards from "./components/CertificationCards";
import dataCertCover from "../../public/dataCertCover.png";
import backendCertCover from "../../public/backendCertCover.png";
import frontendCertCover from "../../public/frontendCertCover.png";
import ComingSoonSection from "./components/ComingSoonSection";
import BecksScreenshot from "../../public/becksScreenshot.png";
import CIYScreenshot from "../../public/ciyScreenshot.png";
import C2CScreenshot from "../../public/c2cScreenshot.png";
import BlogPreviewSection from "./components/BlogPreviewSection";
import TextBanner from "./components/TextBanner";
import Purple8 from "../../public/purpleTechUnsplash.jpg";
import { client } from "@/sanity/lib/client";
import { useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = React.useState<
    {
      publishedAt: string;
      _updatedAt: string;
      subtitle: string;
      _id: string;
      body: string;
      title: string;
      slug: { current: string };
      mainImage: string;
    }[]
  >([]);

  const featuredLongCards = [
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

  const portfolioCards = [
    {
      heading: "Beck's Hybrids",
      image: BecksScreenshot,
      link: "https://www.beckshybrids.com/",
    },
    {
      heading: "CIY",
      image: CIYScreenshot,
      link: "https://ciy.com/",
    },
    {
      heading: "Connect2Culture",
      image: C2CScreenshot,
      link: "https://connect2culture.org/",
    },
  ];

  const featuredCards = [
    {
      heading: "Front End Certifications",
      image: frontendCertCover,
      // come back to this and add a jump # to the specific section id once certifications page is up
      link: "/certifications",
    },
    {
      heading: "Data Certifications",
      image: dataCertCover,
      // come back to this and add a jump # to the specific section id once certifications page is up
      link: "/certifications",
    },
    {
      heading: "Back End Certifications",
      image: backendCertCover,
      // come back to this and add a jump # to the specific section id once certifications page is up
      link: "/certifications",
    },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{
          _id,
          title,
          slug,
          body,
          publishedAt,
          _updatedAt,
          subtitle,
          'mainImage': mainImage.asset->url
        }`;
      const postsData = await client.fetch(query);
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  const blogPosts = [
    {
      title: "How To Overcome Fear Of Rejection & Be Happy All The Time",
      publishedAt: "November 4, 2020",
      categories: ["Coach", "Career"],
      body: "There's a growing community of digital world who live a location independent lifestyle. We're software developers, designers, writers, journalists, engineers, and all sorts of people who share a passion for...",
    },
    {
      title: "10 Online Careers You Can Start Today With Basically No Money",
      publishedAt: "November 4, 2020",
      categories: ["Business", "Impact"],
      body: "This in itself makes you feel worse about yourself, creating a vicious cycle of fear and low self-esteem. Sometimes, you probably feel like you've tried everything to feel better and...",
    },
    {
      title: "5 Ways to make More Money as a Coach or Consultant",
      publishedAt: "November 4, 2020",
      categories: ["Career", "Business"],
      body: "You may feel undesirable, uninteresting, and pessimistic about the prospect of finding love. Feeling rejected hurts. It undermines your confidence and makes you doubt your worth. Trapped by a horrible...",
    },
  ];

  return (
    <div className="w-full bg-white flex-col justify-start items-center inline-flex">
      <CombinedHero
        heading="I'm Kirsten, Software Engineer and Data Explorer."
        subheading="Explore my coding journey and the resources that fueled it. "
        buttonText="Let's Study"
        image={HeroGen1}
        backgroundStyle="bg-black"
        textStyle="text-neutral-100 text-3xl md:text-7xl font-normal font-['Fugaz One'] leading-[40px] md:leading-[77.76px]"
        subTextStyle="text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px] mt-[3%]"
        buttonStyle="bg-purple-500 max-h-[60px] max-w-[250px] md:max-w-[360px] mt-[10%] text-white font-normal font-['Open Sans'] leading-[27px]"
        buttonTextStyle="text-neutral-100 text-3xl md:text-4xl font-normal font-['Fugaz One'] leading-[40px] md:leading-[77.76px]"
      />
      <CertificationCards
        cards={portfolioCards}
        heading="Portfolio"
        subheading="Click below to view websites that Kirsten has worked on over the years."
      />
      <CertificationCards
        cards={featuredCards}
        heading="Certifications"
        subheading="Click below to view certifications that Kirsten has earned from web dev and software development courses over the years."
      />
      <TextBanner
        heading="From the Blog"
        subheading="Stay informed and inspired with Kirsten's take on the latest tech industry news and trends, covering everything from AI and software development to business strategy and leadership."
        image={Purple8}
      />
      <BlogPreviewSection cards={blogPosts} />
      {/* <ArticleCards
        heading="Neon Dreams Unveiled"
        subheading="Immersive Reality Awaits"
        shortCards={featuredCards}
        longCard={featuredLongCard}
      /> */}
      {/* <ProjectLargeImageAccordion3 /> */}
      {/* <QuoteWithImage
        quote="“Their vision for the cyber world transformed my reality.”"
        author="Maverick T., Cyberpunk Enthusiast"
        image={NovaPerson2}
        bgColor="black"
      /> */}
      <ComingSoonSection showTopImage={true} />
    </div>
  );
}
