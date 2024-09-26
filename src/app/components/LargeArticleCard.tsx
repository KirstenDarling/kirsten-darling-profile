import { StaticImageData } from "next/image";
import Image from "next/image";

const LargeArticleCard = ({
  articleImage,
}: {
  articleImage: StaticImageData;
}) => {
  return (
    <div className="blog-card-layout-left flex flex-col pl-[2rem] pr-[2rem] md:pl-20 md:pr-10 mt-20 mb-8 w-full">
      <div className="blog-card-headling-article flex flex-col">
        <div className="headling-article-image">
          <Image
            src={articleImage}
            alt="sample blog image"
            className="w-full"
          />
        </div>
        <div className="headling-article-title mt-[1rem] pl-[1rem] pr-[2rem]">
          <h1>Title</h1>
        </div>
        <div className="headling-article-excerpt pl-[1rem] pr-[2rem]">
          article exceprt blah blah blah article exceprt blah blah blah article
          exceprt blah blah blah
        </div>
      </div>
    </div>
  );
};

export default LargeArticleCard;
