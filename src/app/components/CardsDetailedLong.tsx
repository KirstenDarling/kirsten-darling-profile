import Image from "next/image";
import Nova3 from "../../../public/Nova3.png";

const CardsDetailedLong = ({
  eyebrowText,
  heading,
  subheading,
  CTAText,
}: {
  eyebrowText?: string;
  heading?: string;
  subheading?: string;
  CTAText?: string;
}) => {
  return (
    <div className="self-stretch border border-gray-600 justify-start items-start inline-flex">
      <div className="grow shrink basis-0 h-[364px] p-8 bg-black flex-col justify-center items-start gap-6 inline-flex">
        <div className="self-stretch h-28 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
            {eyebrowText}
          </div>
          <div className="self-stretch h-[74px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-neutral-100 text-[28px] font-normal font-['Open Sans'] leading-[38.64px]">
              {heading}
            </div>
            <div className="self-stretch text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
              {subheading}
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-6 inline-flex">
          <div className="justify-center items-center gap-1 flex">
            <div className="text-center text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
              {CTAText}
            </div>
          </div>
        </div>
      </div>
      <Image className="w-[600px] h-[364px] relative" src={Nova3} alt="" />
    </div>
  );
};

export default CardsDetailedLong;
