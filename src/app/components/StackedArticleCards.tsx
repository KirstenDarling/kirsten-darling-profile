import { StaticImageData } from "next/image";
import SampleBlogImage from "../../../public/fourCard1.png";
import Image from "next/image";

const StackedArticleCards = ({
  cards,
}: {
  cards: {
    heading?: string;
    subheading?: string;
    image: StaticImageData;
    link?: string;
  }[];
}) => {
  return (
    <div className="blog-card-layout-right flex flex-col pl-[2.5rem] pr-[5rem] mt-[5rem] mb-[2rem]">
      <div className="blog-card-list-of-articles">
        {cards.map((card, index) => (
          <div
            key={index}
            className="article-in-list flex flex-row mb-[1.5rem]"
          >
            <div className="headling-article-image mr-[1.5rem]">
              <Image
                src={card.image}
                alt={card.heading || "sample blog image"}
              />
            </div>
            <div className="headling-article-grouping flex flex-col mt-[0.5rem]">
              <div className="headling-article-title">
                {card.heading || "article title"}
              </div>
              <div className="headling-article-excerpt">
                {card.subheading ||
                  "article excerpt blah blah blah article excerpt blah blah blah article excerpt blah blah blah"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedArticleCards;
