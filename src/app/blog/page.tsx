// app/blog/page.tsx 
"use client"; // This is now a Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '../../sanity/lib/client'; // Adjust the path if needed
import React from 'react';

const BlogIndex = () => {
  const [posts, setPosts] = useState<{ _id: string; title: string; slug: { current: string } }[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{_id, title, slug}`;
      const postsData = await client.fetch(query);
      setPosts(postsData);
    };

    fetchPosts();
  }, []); 

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug.current}`}> {/* Assuming your blog post detail page is at /blog/[slug] */}
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogIndex;
