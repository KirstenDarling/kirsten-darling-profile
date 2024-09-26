import { StaticImageData } from "next/image";
import SampleBlogImage from "../../../public/fourCard1.png";
import Image from "next/image";

const LargeArticleCard = ({
  articleImage,
}: {
  articleImage: StaticImageData;
}) => {
  return (
    <div className="blog-card-layout-left flex flex-col pl-[5rem] pr-[2.5rem] mt-[5rem] mb-[2rem]">
      <div className="blog-card-headling-article flex flex-col">
        <div className="headling-article-image">
          <Image src={articleImage} alt="sample blog image" />
        </div>
        <div className="headling-article-title mt-[1rem]">
          <h1>Title</h1>
        </div>
        <div className="headling-article-excerpt">
          article exceprt blah blah blah article exceprt blah blah blah article
          exceprt blah blah blah
        </div>
      </div>
    </div>
  );
};

export default LargeArticleCard;
