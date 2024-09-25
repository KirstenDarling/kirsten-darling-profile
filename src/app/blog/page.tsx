"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import React from "react";
import ComingSoonSection from "../components/ComingSoonSection";
import CertificationCards from "../components/CertificationCards";

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
        <div className="blog-card-layout flex flex-row">
          <div className="blog-card-layout-left flex flex-col pl-[5rem] pr-[2.5rem] my-[5rem]">
            <div className="blog-card-headling-article flex flex-col">
              <div className="headling-article-image">Image</div>
              <div className="headling-article-title">Title</div>
              <div className="headling-article-excerpt">
                article exceprt blah blah blah article exceprt blah blah blah
                article exceprt blah blah blah
              </div>
            </div>
          </div>
          <div className="blog-card-layout-right flex flex-col pl-[2.5rem] pr-[5rem] my-[5rem]">
            <div className="blog-card-list-of-articles">
              <div className="article-in-list flex flex-row">
                <div className="headling-article-image">Image</div>
                <div className="headling-article-grouping flex flex-col">
                  <div className="headling-article-title">article title</div>
                  <div className="headling-article-excerpt">
                    article exceprt blah blah blah article exceprt blah blah
                    blah article exceprt blah blah blah
                  </div>
                </div>
              </div>
              <div className="article-in-list flex flex-row">
                <div className="headling-article-image">Image</div>
                <div className="headling-article-grouping flex flex-col">
                  <div className="headling-article-title">article title</div>
                  <div className="headling-article-excerpt">
                    article exceprt blah blah blah article exceprt blah blah
                    blah article exceprt blah blah blah
                  </div>
                </div>
              </div>
              <div className="article-in-list flex flex-row">
                <div className="headling-article-image">Image</div>
                <div className="headling-article-grouping flex flex-col">
                  <div className="headling-article-title">article title</div>
                  <div className="headling-article-excerpt">
                    article exceprt blah blah blah article exceprt blah blah
                    blah article exceprt blah blah blah
                  </div>
                </div>
              </div>
              <div className="article-in-list flex flex-row">
                <div className="headling-article-image">Image</div>
                <div className="headling-article-grouping flex flex-col">
                  <div className="headling-article-title">article title</div>
                  <div className="headling-article-excerpt">
                    article exceprt blah blah blah article exceprt blah blah
                    blah article exceprt blah blah blah
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-card-layout-right flex flex-col pl-[2.5rem] pr-[5rem]">
          <CertificationCards cards={[]} />
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
