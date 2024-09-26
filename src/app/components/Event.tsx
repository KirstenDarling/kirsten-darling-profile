import { StaticImageData } from "next/image";
import Image from "next/image";

const Event = ({
  startDate,
  endDate,
  text,
  subtext,
  subheading,
  imageAbove,
  imageBelow,
  titleLink,
}: {
  startDate?: string;
  endDate?: string;
  text?: string;
  subtext?: string;
  subheading?: string;
  imageAbove?: StaticImageData;
  imageBelow?: StaticImageData;
  titleLink?: string;
}) => {
  return (
    <>
      {imageAbove && (
        <div className="rounded-[32px]">
          <Image
            className="block sm:hidden max-w-[105%] grow shrink basis-0 self-stretch rounded-[32px]"
            src={imageAbove}
            alt=""
          />
        </div>
      )}
      <div className="flex justify-between self-stretch items-center">
        <div className="mr-[5%] w-[85px] font-normal font-['Source Sans Pro'] ">
          <div className="mr-[5%] text-[lightgoldenrodyellow] text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
            {`${startDate}`}
          </div>
          <div className="leading-1 self-stretch text-[darkgray] text-[0.8rem] font-normal font-['Source Sans Pro']">
            {subheading && `(${subheading})`}
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-center items-center gap-4 max-w-[90%] inline-flex">
          <div className="self-stretch text-white text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
            <a
              href={titleLink ? titleLink : ""}
              target={!titleLink ? "" : "_blank"}
              className="hover:text-purple-400"
            >
              {text}
            </a>
            <br />
            <span className="text-xs">{subtext}</span>
          </div>
        </div>
      </div>
      {imageBelow && (
        <div className="rounded-[32px]">
          <Image
            className="block sm:hidden max-w-[105%] grow shrink basis-0 self-stretch rounded-[32px]"
            src={imageBelow}
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default Event;
