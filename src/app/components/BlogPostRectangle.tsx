import Image from "next/image";
import styles from "../styles/footerThicc.module.css";
import PlaceholderImage from "../../../public/placeholder.jpg";

const BlogPostRectangle = ({
  title,
  subtitle,
  mainImage,
  link,
  textColor,
  textAlign,
  slug,
}: {
  title?: string;
  subtitle?: string;
  mainImage: string;
  link?: string;
  textColor?: string;
  textAlign?: string;
  slug: string;
}) => {
  return (
    <a
      href={`/blog/${slug}`}
      target={link == "/certifications" ? "_self" : "_blank"}
    >
      <div className="grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex">
        {mainImage ? (
          <Image
            className={`max-h-[233px] self-stretch rounded-[16px] object-contain`}
            alt=""
            src={mainImage}
            width={350}
            height={233}
          />
        ) : (
          <Image
            className={`max-h-[233px] self-stretch rounded-[16px] object-contain`}
            alt=""
            src={PlaceholderImage}
            width={350}
            height={233}
          />
        )}
        <div
          className={`self-stretch ${textAlign ? "px-[0.5rem]" : "px-[4rem]"} h-full flex-col justify-center items-center gap-2 flex`}
        >
          <div
            className={`self-stretch ${textAlign ? textAlign : "text-center"} ${textColor ? textColor : "text-neutral-100"} text-lg font-normal font-['Open Sans'] leading-[27px]`}
          >
            {title}
          </div>
          <div
            className={`self-stretch ${textColor ? textColor : "text-zinc-300"} text-sm font-normal font-['Open Sans'] leading-snug`}
          >
            {subtitle}
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogPostRectangle;
