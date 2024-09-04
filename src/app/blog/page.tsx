"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import React from "react";
import ComingSoonSection from "../components/ComingSoonSection";

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

  return (
    <div className="w-full bg-white flex-col justify-start items-center inline-flex">
      <ComingSoonSection />
      <div>
        {/* <h1>Blog</h1> */}
        {/* <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul> */}
      </div>
    </div>
  );
};

export default BlogIndex;
