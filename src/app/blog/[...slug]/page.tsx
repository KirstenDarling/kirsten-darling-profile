"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

interface Post {
  _id: string;
  slug: { current: string };
  title: string;
}

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
    _id: any;
    publishedAt: string;
    mainImage: any;
    _updatedAt: string;
    subtitle: string;
    title: string;
    slug: {
      current: string;
    };
    categories: Category[];
    body: string;
  } | null>(null);

  const [author, setAuthor] = useState<{
    name: string;
    image: string;
  } | null>(null);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [relatedPosts, setRelatedPosts] = React.useState<Post[]>([]);
  const [trendingPosts, setTrendingPosts] = React.useState<Post[]>([]);
  const [sectionOrder, setSectionOrder] = React.useState<string[]>([
    "categories", // Control the order of sections here
    "related",
    "trending",
  ]);

  useEffect(() => {
    const fetchPost = async () => {
      const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        subtitle,
        publishedAt,
        _updatedAt,
        body,
        'mainImage': mainImage.asset->url,
        'author': author->{
          _id,
          name, 
          'image': image.asset->url 
        },
        'categories': categories[]->{_id, title, 'slug': slug.current}
      }`;
      const postData = await client.fetch(query, { slug });
      setPost(postData);
      setAuthor(postData.author);
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "category"]{
        _id,
        title,
        "slug": slug.current
      }`;
      const categoriesData = await client.fetch(query);
      setCategories(
        categoriesData.filter((category: Category) => category.slug)
      );
    };

    fetchCategories();
  }, []);

  React.useEffect(() => {
    const fetchRelatedPosts = async () => {
      if (post && post.categories.length > 0) {
        const categoryIds = post.categories.map((cat) => cat._id);
        const query = `*[_type == "post" && references($categoryIds) && _id != $postId] | order(publishedAt desc)[0...5]{
          _id,
          'slug': slug.current,
          title,
        }`;
        const relatedPostsData = await client.fetch(query, {
          categoryIds,
          postId: post._id,
        });
        setRelatedPosts(relatedPostsData);
      }
    };
    fetchRelatedPosts();
  }, [post]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc)[0...5]{
        _id,
        'slug': slug.current,
        title,
        publishedAt
      }`;
      const trendingPostsData = await client.fetch(query);
      setTrendingPosts(trendingPostsData);
    };

    fetchTrendingPosts();
  }, []);

  if (!post || !author) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row">
      <article className="w-2/3 p-8">
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold leading-tight mb-2 text-left">
            {" "}
            {/* Adjusted width */}
            {post.title}: {post.subtitle}
          </h1>

          <div className="flex items-center mb-4 text-gray-500">
            {author.image && (
              <div className="w-8 h-8 rounded-full overflow-hidden mr-[0.5rem]">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            )}
            <span className="text-sm mr-4">By {author.name}</span>
            <span className="text-sm mr-4">
              Published on{" "}
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
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
            <p className="text-gray-600 text-sm mt-2">
              Image caption goes here
            </p>
          </div>

          <div className="prose lg:prose-xl">
            {" "}
            {/* Adjusted width */}
            <BlockContent blocks={post.body} serializers={serializers} />
          </div>

          <p className="text-gray-600 text-sm mt-6">
            Last updated on{" "}
            {new Date(post._updatedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </article>
      <aside className="w-1/3 p-8">
        <div className="flex flex-col gap-8">
          {sectionOrder.map((section) => {
            if (section === "categories") {
              return (
                <div key="categories">
                  <h2>Categories</h2>
                  <ul>
                    {categories.map((category) => (
                      <li key={category._id}>
                        <Link
                          href={`/categories/${category.slug.current}`}
                          legacyBehavior
                        >
                          <a>{category.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            } else if (section === "related") {
              return (
                <div key="related">
                  <h2>Related Articles</h2>
                  <ul>
                    {relatedPosts.map((post) => (
                      <li key={post._id}>
                        <Link
                          href={`/blog/${post.slug.current}`}
                          legacyBehavior
                        >
                          <a>{post.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            } else if (section === "trending") {
              return (
                <div key="trending">
                  <h2>Trending Posts</h2>
                  <ul>
                    {trendingPosts.map((post) => (
                      <li key={post._id}>
                        <Link
                          href={`/blog/${post.slug.current}`}
                          legacyBehavior
                        >
                          <a>{post.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return null;
          })}
          <div key="loading">Loading...</div>
        </div>
      </aside>
    </div>
  );
};

export default BlogPost;
