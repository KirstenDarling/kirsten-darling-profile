import { StaticImageData } from "next/image";
import CardRectangle2 from "./CardRectangle2";

const CertificationCards = ({
  heading,
  subheading,
  cards,
}: {
  heading?: string;
  subheading?: string;
  cards: {
    heading?: string;
    subheading?: string;
    image: StaticImageData;
    link?: string;
  }[];
}) => {
  return (
    <div className="self-stretch h-[100%] px-4 py-40 bg-black flex flex-col justify-center items-center">
      <div className="mb-[15%] lg:mb-[5%] self-stretch h-[101px] flex flex-col justify-start items-center gap-3">
        <div className="self-stretch text-center text-neutral-100 text-[56px] font-normal font-['Fugaz One'] leading-[67.20px]">
          {heading}
        </div>
        <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
          {subheading}
        </div>
      </div>

      <div className="m-[auto] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 self-stretch">
        {cards.map((card, index) => (
          <CardRectangle2
            key={index}
            heading={card.heading}
            subheading={card.subheading}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationCards;
