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
import PurpleTechUnsplash from "../../../public/purpleTechUnsplash.jpg";

const BlogIndex = () => {
  const [posts, setPosts] = useState<
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

  const [mainPost, setMainPost] = useState<{
    _id: string;
    title: string;
    subtitle: string;
    mainImage: string;
    slug: { current: string };
    body: any[]; // Adjust type as needed
  } | null>(null);

  const [featuredPosts, setFeaturedPosts] = useState<
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

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{_id, title, slug, body, publishedAt, _updatedAt, subtitle, 'mainImage': mainImage.asset->url}`;
      const postsData = await client.fetch(query);
      setPosts(postsData);
    };

    const fetchFeaturedPosts = async () => {
      const query = `*[_type == "featuredPost" && _id == "featuredPost"][0]{
        "posts": posts[]->{
          _id, 
          title, 
          subtitle, 
          'slug': slug.current,
          body, 
          publishedAt, 
          _updatedAt, 
          'mainImage': mainImage.asset->url
        } 
      }`;
      const featuredPostData = await client.fetch(query);
      setFeaturedPosts(featuredPostData.posts || []); // Access the "posts" array directly
    };

    const fetchMainPost = async () => {
      const query = `*[_type == "mainPost"][0]{
        post->{_id, title, slug, body, publishedAt, _updatedAt, subtitle, 'mainImage': mainImage.asset->url} 
      }`;
      const mainPostData = await client.fetch(query);
      setMainPost(mainPostData?.post || null); // Handle case where no featured post is set
    };

    fetchPosts();
    fetchMainPost();
    fetchFeaturedPosts();
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

  return (
    <div className="w-full bg-black sm:bg-white flex-col justify-start items-center inline-flex">
      <div
        className="text-center w-[100%] text-[72px] pt-20 pb-10 border-b-[2rem] border-[#000035]"
        style={{
          backgroundImage: "url('/purpleTechUnsplash.jpg')", // Directly use the URL
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-white">
          <span
            className="italic text-lg text-white"
            style={{ outline: "1px solid rgba(255, 255, 255, 0.5)" }}
          >
            the
          </span>
          Blog
        </h1>
      </div>
      <div className="blog-card-layout flex flex-col md:flex-row sm:w-[95%] m-auto">
        <div className="w-full md:w-3/5">
          {mainPost ? ( // Conditionally render LargeArticleCard
            <LargeArticleCard post={mainPost} />
          ) : (
            <div>Loading main post...</div>
          )}
        </div>
        <div className="w-full md:w-2/5">
          {featuredPosts ? (
            <StackedArticleCards posts={featuredPosts} />
          ) : (
            <div>Loading featured posts...</div>
          )}
        </div>
      </div>
      <div className="bg-[#000035] blog-card-layout-right flex flex-col pl-[2rem] pr-[2rem] md:pl-[2.5rem] md:pr-[5rem]">
        <CertificationCards
          cards={blogCards}
          backgroundColor="bg-white"
          textColor="text-white sm:text-black"
          textAlign="text-left"
        />
      </div>
    </div>
  );
};

export default BlogIndex;
