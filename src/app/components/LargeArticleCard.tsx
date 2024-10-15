import Image from "next/image";
import Link from "next/link";
import getPreviewText from "../utils/getPreviewText";

interface Post {
  slug: { current: string };
  body: string | any[];
  mainImage: any;
  title: string;
  subtitle: string;
}

const LargeArticleCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <div className="blog-card-container bg-[blueviolet] sm:bg-white p-4 md:p-0 m-4 rounded-lg shadow-md sm:shadow-none hover:shadow-lg sm:hover:shadow-none transition-shadow duration-200 mt-[2rem]">
        <div className="blog-card-layout-left flex flex-col pl-[2rem] pr-[2rem] md:pl-20 md:pr-10 mt-8 mb-8 w-full">
          <div className="blog-card-headling-article flex flex-col text-white sm:text-black">
            <div className="headling-article-image">
              {post.mainImage && (
                <Image
                  src={post.mainImage}
                  alt={post.title}
                  width={500}
                  height={600}
                  style={{
                    borderRadius: "1rem",
                    maxHeight: "500px",
                    minWidth: "600px",
                  }}
                />
              )}
            </div>
            <div className="headling-article-title mt-[1rem] pl-[1rem] pr-[2rem]">
              <h1>{post.title}</h1>
            </div>
            <div className="headling-article-excerpt pl-[1rem] pr-[2rem]">
              {post.subtitle}
              {getPreviewText(post.body, 275)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LargeArticleCard;
