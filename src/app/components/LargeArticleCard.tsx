import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface Post {
  slug: { current: string };
  body: string | any[];
  mainImage: any;
  title: string;
  subtitle: string;
}

const LargeArticleCard = ({ post }: { post: Post }) => {
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
    <Link href={`/blog/${post.slug.current}`}>
      <div className="blog-card-container bg-[blueviolet] sm:bg-white p-4 md:p-0 m-4 rounded-lg shadow-md sm:shadow-none hover:shadow-lg sm:hover:shadow-none transition-shadow duration-200">
        <div className="blog-card-layout-left flex flex-col pl-[2rem] pr-[2rem] md:pl-20 md:pr-10 mt-8 mb-8 w-full">
          <div className="blog-card-headling-article flex flex-col text-white sm:text-black">
            <div className="headling-article-image">
              {post.mainImage && (
                <Image
                  src={post.mainImage}
                  alt={post.title}
                  width={800}
                  height={500}
                  style={{ borderRadius: "1rem" }}
                />
              )}
            </div>
            <div className="headling-article-title mt-[1rem] pl-[1rem] pr-[2rem]">
              <h1>{post.title}</h1>
            </div>
            <div className="headling-article-excerpt pl-[1rem] pr-[2rem]">
              {post.subtitle}
              {getPreviewText(post.body, 150)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LargeArticleCard;
