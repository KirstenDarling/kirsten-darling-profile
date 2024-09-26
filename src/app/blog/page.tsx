"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import React from "react";
import ComingSoonSection from "../components/ComingSoonSection";
import CertificationCards from "../components/CertificationCards";
import SampleBlogImage from "../../../public/fourCard1.png";
import Image from "next/image";
import LargeArticleCard from "../components/LargeArticleCard";
import StackedArticleCards from "../components/StackedArticleCards";

const BlogIndex = () => {
  const [posts, setPosts] = useState<
    { _id: string; title: string; slug: { current: string } }[]
  >([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{_id, title, slug}`;
      const postsData = await client.fetch(query);
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  const blogCards = [
    {
      heading: "Article #1 Title",
      subheading:
        "Article #1 Subtitle. Blah blah blah. Maybe do an except instead of a subtitle.",
      image: SampleBlogImage,
      link: "/",
    },
    {
      heading: "Article #2 Title",
      subheading:
        "Article #2 Subtitle. Blah blah blah. Maybe do an except instead of a subtitle.",
      image: SampleBlogImage,
      link: "/",
    },
    {
      heading: "Article #3 Title",
      subheading:
        "Article #3 Subtitle. Blah blah blah. Maybe do an except instead of a subtitle.",
      image: SampleBlogImage,
      link: "/",
    },
  ];

  const stackedBlogCards = [
    {
      heading: "Article #1 Title",
      subheading:
        "Article #1 Subtitle. Blah blah blah. Maybe do an except instead of a subtitle.",
      image: SampleBlogImage,
      link: "/",
    },
    {
      heading: "Article #2 Title",
      subheading:
        "Article #2 Subtitle. Blah blah blah. Maybe do an except instead of a subtitle.",
      image: SampleBlogImage,
      link: "/",
    },
    {
      heading: "Article #3 Title",
      subheading:
        "Article #3 Subtitle. Blah blah blah. Maybe do an except instead of a subtitle.",
      image: SampleBlogImage,
      link: "/",
    },
    {
      heading: "Article #4 Title",
      subheading:
        "Article #4 Subtitle. Blah blah blah. Maybe do an except instead of a subtitle.",
      image: SampleBlogImage,
      link: "/",
    },
  ];

  return (
    <div className="w-full bg-white flex-col justify-start items-center inline-flex">
      <div>
        <div className="text-center text-[72px] pt-20 pb-10 bg-slate-200 border-b-[2rem] border-slate-100">
          <h1 className="text-purple-500">
            <span className="italic text-lg text-black ">the</span>
            Blog
          </h1>
        </div>
        <div className="h-8 bg-slate-50"></div>
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <Link href={`/blog/${post.slug.current}`}>
                <p>{post.title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="blog-card-layout flex flex-row w-[95%] m-auto">
          <div className="w-full md:w-3/5">
            <LargeArticleCard articleImage={SampleBlogImage} />
          </div>
          <div className="w-full md:w-2/5">
            <StackedArticleCards cards={stackedBlogCards} />
          </div>
        </div>
        <div className="blog-card-layout-right flex flex-col pl-[2.5rem] pr-[5rem]">
          <CertificationCards
            cards={blogCards}
            backgroundColor="bg-white"
            textColor="text-black"
            textAlign="text-left"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
