import { StaticImageData } from "next/image";
import CardRectangle2 from "./CardRectangle2";

const CertificationCards = ({
  heading,
  subheading,
  cards,
}: {
  heading?: string;
  subheading?: string;
  cards: { heading?: string; subheading?: string; image: StaticImageData }[];
}) => {
  return (
    <div className="self-stretch h-[1095px] px-4 py-40 bg-black flex-col justify-center items-center gap-10 flex">
      <div className="self-stretch h-[101px] flex-col justify-start items-center gap-3 flex">
        <div className="self-stretch text-center text-neutral-100 text-[56px] font-normal font-['Fugaz One'] leading-[67.20px]">
          {heading}
        </div>
        <div className="self-stretch text-center text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
          {subheading}
        </div>
      </div>
      <div className="flex-wrap self-stretch justify-center items-start gap-10 inline-flex">
        {cards.map((card, index) => (
          <CardRectangle2
            key={index}
            heading={card.heading}
            subheading={card.subheading}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationCards;
