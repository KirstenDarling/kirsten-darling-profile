import CardsDetailed from "./CardsDetailed";
import LongCard from "./CardsDetailedLong";

const ArticleCards = ({
  heading,
  subheading,
  shortCards,
  longCard,
}: {
  heading?: string;
  subheading?: string;
  shortCards: {
    eyebrowText?: string;
    heading?: string;
    subheading?: string;
    CTAText?: string;
  }[];
  longCard: {
    eyebrowText: string;
    heading: string;
    subheading: string;
    CTAText: string;
  };
}) => {
  return (
    <div className="self-stretch h-[1110px] px-8 py-[120px] bg-black flex-col justify-center items-center gap-10 flex">
      <div className="self-stretch h-[870px] flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch h-[102px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-neutral-100 text-[56px] font-normal font-['Fugaz One'] leading-[67.20px]">
            {heading}
          </div>
          <div className="self-stretch text-zinc-300 text-lg font-normal font-['Open Sans'] leading-[27px]">
            {subheading}
          </div>
        </div>
        <div className="self-stretch h-[752px] flex-col justify-start items-center gap-6 flex">
          <div className="self-stretch justify-center items-start gap-6 inline-flex">
            {shortCards.map((card, index) => (
              <CardsDetailed
                key={index}
                eyebrowText={card.eyebrowText}
                heading={card.heading}
                subheading={card.subheading}
                CTAText={card.CTAText}
              />
            ))}
          </div>
          <LongCard
            eyebrowText={longCard.eyebrowText}
            heading={longCard.heading}
            subheading={longCard.subheading}
            CTAText={longCard.CTAText}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCards;
