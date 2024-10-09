"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import Image from "next/image";

const BlogPost = () => {
  const params = useParams();
  const slug = (params?.slug as string[])?.join("/") || "";

  const [post, setPost] = useState<{
    publishedAt: string;
    mainImage: any;
    _updatedAt: string;
    subtitle: string;
    title: string;
    body: string;
  } | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        subtitle,
        publishedAt,
        _updatedAt,
        body,
        'mainImage': mainImage.asset->url, // Fetch the image URL
      }`;
      const postData = await client.fetch(query, { slug });
      setPost(postData);
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-left">
        {post.title}
        <span> {post.subtitle}</span>
      </h1>

      <div className="flex items-center mb-4">
        <span className="text-gray-600 mr-2">By John Doe</span>
        <span className="text-gray-600 text-sm mr-2">
          Published on {post.publishedAt}
        </span>
        <span className="text-gray-600 text-sm">
          Last updated on {post._updatedAt}
        </span>
      </div>

      <div className="mb-6">
        {post.mainImage && (
          <Image
            src={post.mainImage}
            alt={post.title}
            width={200}
            height={200}
          />
        )}
        <p className="text-gray-600 text-sm mt-2">Image caption goes here</p>
      </div>

      <div className="prose lg:prose-xl">
        <BlockContent blocks={post.body} />
      </div>

      <p className="text-gray-600 text-sm mt-6">
        Last updated on {post._updatedAt}
      </p>
    </div>
  );
};

export default BlogPost;
