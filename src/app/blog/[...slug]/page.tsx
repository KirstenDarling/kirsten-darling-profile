"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import Image from "next/image";

const serializers = {
  types: {
    code(props: {
      node: {
        code:
          | string
          | number
          | bigint
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | Promise<React.AwaitedReactNode>
          | Iterable<React.ReactNode>
          | null
          | undefined;
      };
    }) {
      return (
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>{props.node.code}</code>
        </pre>
      );
    },
    block(props: {
      node: { style: any };
      children:
        | string
        | number
        | bigint
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | Promise<React.AwaitedReactNode>
        | null
        | undefined;
    }) {
      switch (props.node.style) {
        case "normal":
          return <p className="my-4">{props.children}</p>;
        case "h1":
          return <h1 className="my-6 text-3xl font-bold">{props.children}</h1>;
        case "h2":
          return <h2 className="my-5 text-2xl font-bold">{props.children}</h2>;
        // ... add more styles as needed
        default:
          return <p className="my-4">{props.children}</p>;
      }
    },
  },
};

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

  const [author, setAuthor] = useState<{
    name: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        subtitle,
        publishedAt,
        _updatedAt,
        body,
        'mainImage': mainImage.asset->url,
        'author': author->{ // Fetch the author information
          name, 
          'image': image.asset->url 
        }
      }`;
      const postData = await client.fetch(query, { slug });
      setPost(postData);
      setAuthor(postData.author);
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (!post || !author) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold leading-tight mb-2 text-left max-w-[65%]">
        {" "}
        {/* Increased font size, adjusted line height, reduced margin */}
        {post.title}: {post.subtitle}
      </h1>

      <div className="flex items-center mb-4 text-gray-500">
        {" "}
        {/* Adjusted text color */}
        {author.image && ( // Conditionally render the avatar if the image exists
          <div className="w-8 h-8 rounded-full overflow-hidden mr-[0.5rem]">
            <Image
              src={author.image}
              alt={author.name}
              width={32} // Set width and height for the avatar
              height={32}
              className="object-cover" // Ensure the image covers the circle
            />
          </div>
        )}
        <span className="text-sm mr-4">By {author.name}</span>
        <span className="text-sm mr-4">
          {" "}
          {/* Reduced font size, increased margin */}
          Published on{" "}
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          {/* Formatted date */}
        </span>
      </div>

      <div className="mb-6">
        {post.mainImage && (
          <Image
            src={post.mainImage}
            alt={post.title}
            width={700}
            height={350}
          />
        )}
        <p className="text-gray-600 text-sm mt-2">Image caption goes here</p>
      </div>

      <div className="prose lg:prose-xl max-w-[57%]">
        <BlockContent blocks={post.body} serializers={serializers} />{" "}
      </div>

      <p className="text-gray-600 text-sm mt-6">
        Last updated on{" "}
        {new Date(post._updatedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
      </p>
    </div>
  );
};

export default BlogPost;
