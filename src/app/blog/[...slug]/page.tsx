// app/blog/[...slug]/page.tsx
"use client"; // Indicate this is a Client Component

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import BlockContent from "@sanity/block-content-to-react";
import React from "react";

const BlogPost = () => {
  const params = useParams();
  const slug = (params?.slug as string[])?.join("/") || "";

  const [post, setPost] = useState<{ title: string; body: string } | null>(
    null
  );

  useEffect(() => {
    const fetchPost = async () => {
      const query = `*[_type == "post" && slug.current == $slug][0]`;
      const postData = await client.fetch(query, { slug });
      setPost(postData);
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]); // Fetch data whenever 'slug' changes

  if (!post) {
    return <div>Loading...</div>; // Or a more elaborate loading state
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <BlockContent blocks={post.body} /> {/* Use BlockContent to render */}
    </div>
  );
};

export default BlogPost;
