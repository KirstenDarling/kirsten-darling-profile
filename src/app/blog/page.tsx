"use client";

import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import React from "react";
import LargeArticleCard from "../components/LargeArticleCard";
import StackedArticleCards from "../components/StackedArticleCards";
import StandardBlogCards from "../components/StandardBlogCards";

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
    body: any[];
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
      const query = `*[_type == "post" && !(_id in *[_type == "mainPost"].post._ref) && !(_id in *[_type == "featuredPost"].posts[]._ref)]{
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
      setFeaturedPosts(featuredPostData.posts || []);
    };

    const fetchMainPost = async () => {
      const query = `*[_type == "mainPost"][0]{
        post->{_id, title, slug, body, publishedAt, _updatedAt, subtitle, 'mainImage': mainImage.asset->url} 
      }`;
      const mainPostData = await client.fetch(query);
      setMainPost(mainPostData?.post || null);
    };

    fetchPosts();
    fetchMainPost();
    fetchFeaturedPosts();
  }, []);

  return (
    <div className="w-full bg-black sm:bg-white flex-col justify-start items-center inline-flex">
      <div
        className="text-center w-[100%] text-[72px] pt-20 pb-10 border-b-[2rem] border-[#000035]"
        style={{
          backgroundImage: "url('/purpleTechUnsplash.jpg')",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-white">&nbsp; Blog</h1>
      </div>
      <div className="blog-card-layout flex flex-col md:flex-row sm:w-[95%] m-auto">
        <div className="w-full md:w-3/5">
          {mainPost ? (
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
      <div className="bg-[#000035] sm:bg-white blog-card-layout-right flex flex-col pl-[2rem] pr-[2rem] md:pl-[2.5rem] md:pr-[5rem]">
        <StandardBlogCards
          cards={posts}
          backgroundColor="bg-[#000035] sm:bg-white"
          textColor="text-white sm:text-black"
          textAlign="text-left"
        />
      </div>
    </div>
  );
};

export default BlogIndex;
