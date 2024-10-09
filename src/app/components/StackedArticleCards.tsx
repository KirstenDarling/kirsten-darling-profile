import { preloadStyle } from "next/dist/server/app-render/entry-base";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

const StackedArticleCards = ({
  posts,
}: {
  posts: {
    mainImage: any;
    title: string;
    subtitle: string;
    body: string | any[];
    slug: { current: string };
  }[];
}) => {
  function getPreviewText(postBody: string | any[], maxLength: number) {
    let text = "";
    let length = 0;

    for (let i = 0; i < postBody.length; i++) {
      const block = postBody[i];
      // Check if the block has children (for nested structures)
      if (
        block._type === "block" &&
        block.children &&
        Array.isArray(block.children)
      ) {
        block.children.forEach(
          (child: { _type: string; text: string | any[] }) => {
            if (child._type === "span" && child.text) {
              // Extract text from spans
              text += child.text + " ";
              length += child.text.length;
            }
          }
        );
      }
      if (length >= maxLength) {
        break;
      }
    }

    if (text.length > maxLength) {
      text = text.substring(0, maxLength) + "...";
    }

    return <p>{text}</p>;
  }

  return (
    <div className="blog-card-layout-right flex flex-col pl-[1rem] pr-[1rem] sm:pl-[2rem] sm:pr-[2rem] md:pl-[2.5rem] md:pr-[5rem] mt-[1rem] sm:mt-[5rem] mb-[2rem] w-[100%] bg-[blueviolet] sm:bg-white pt-[1rem] sm:pt-0 text-white sm:text-black">
      {posts.map((post, index) => (
        <>
          <Link key={index} href={`/blog/${post.slug.current}`}>
            <div className="article-in-list flex flex-row items-center mb-4">
              <div className="headling-article-image mr-[1.5rem]">
                {post.mainImage && (
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    width={320}
                    height={200}
                    style={{ borderRadius: "1rem" }}
                  />
                )}
              </div>
              <div className="headling-article-grouping flex flex-col mt-[0.5rem]">
                <div className="headling-article-title">{post.title}</div>
                <div className="headling-article-excerpt">{post.subtitle}</div>
                <p className="hidden sm:block">
                  {post.body && getPreviewText(post.body, 75)}
                </p>
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default StackedArticleCards;
