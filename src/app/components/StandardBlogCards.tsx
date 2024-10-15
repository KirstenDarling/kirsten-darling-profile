import { StaticImageData } from "next/image";
import BlogPostRectangle from "./BlogPostRectangle";

const StandardBlogCards = ({
  title,
  subtitle,
  cards,
  backgroundColor,
  textColor,
  textAlign,
}: {
  title?: string;
  subtitle?: string;
  cards: {
    slug: { current: string };
    title?: string;
    subtitle?: string;
    mainImage: string;
    link?: string;
  }[];
  backgroundColor?: string;
  textColor?: string;
  textAlign?: string;
}) => {
  return (
    <div
      className={`self-stretch h-[100%] sm:px-[4rem] py-[2rem] ${backgroundColor ? backgroundColor : "bg-black"} ${textColor ? textColor : "text-neutral-100"} flex flex-col justify-center items-left`}
    >
      {title && (
        <div className="mb-[15%] lg:mb-[5%] self-stretch h-[101px] flex flex-col justify-start gap-3">
          {title && (
            <div
              className={`self-stretch ${textColor ? textColor : "text-neutral-100"} text-center text-[56px] font-normal font-['Fugaz One'] leading-[67.20px]`}
            >
              {title}
            </div>
          )}

          {subtitle && (
            <div
              className={`self-stretch ${textColor ? textColor : "text-zinc-300"} text-sm font-normal font-['Open Sans'] leading-snug`}
            >
              {subtitle}
            </div>
          )}
        </div>
      )}

      <div className="m-[auto] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 self-stretch">
        {cards.map((card, index) => (
          <BlogPostRectangle
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            mainImage={card.mainImage}
            link={card.link}
            textColor={textColor}
            textAlign={textAlign}
            slug={card.slug.current}
          />
        ))}
      </div>
    </div>
  );
};

export default StandardBlogCards;
