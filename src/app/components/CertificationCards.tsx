import { StaticImageData } from "next/image";
import CardRectangle2 from "./CardRectangle2";

const CertificationCards = ({
  heading,
  subheading,
  cards,
  backgroundColor,
  textColor,
  textAlign,
}: {
  heading?: string;
  subheading?: string;
  cards: {
    heading?: string;
    subheading?: string;
    image: StaticImageData;
    link?: string;
  }[];
  backgroundColor?: string;
  textColor?: string;
  textAlign?: string;
}) => {
  return (
    <div
      className={`self-stretch h-[100%] sm:px-[4rem] py-20 ${backgroundColor ? backgroundColor : "bg-black"} flex flex-col justify-center items-left`}
    >
      {heading ||
        (subheading && (
          <div className="mb-[15%] lg:mb-[5%] self-stretch h-[101px] flex flex-col justify-start gap-3">
            {heading && (
              <div
                className={`self-stretch ${textColor ? textColor : "text-neutral-100"} text-[56px] font-normal font-['Fugaz One'] leading-[67.20px]`}
              >
                {heading}
              </div>
            )}
            {subheading && (
              <div
                className={`self-stretch ${textColor ? textColor : "text-zinc-300"} text-sm font-normal font-['Open Sans'] leading-snug`}
              >
                {subheading}
              </div>
            )}
          </div>
        ))}

      <div className="m-[auto] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 self-stretch">
        {cards.map((card, index) => (
          <CardRectangle2
            key={index}
            heading={card.heading}
            subheading={card.subheading}
            image={card.image}
            link={card.link}
            textColor={textColor}
            textAlign={textAlign}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationCards;
