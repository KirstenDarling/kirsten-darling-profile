import Image, { StaticImageData } from "next/image";
import Event from "./Event";

const Timeline = ({
  helpingImage,
  profileImage,
  workplaceImage,
  title,
  subtitle,
  CTAButtonText,
  events,
}: {
  helpingImage: StaticImageData;
  profileImage: StaticImageData;
  workplaceImage: StaticImageData;
  title?: string;
  subtitle?: string;
  CTAButtonText?: string;
  events: {
    startDate?: string;
    endDate?: string;
    text?: string;
    subtext?: string;
    subheading?: string;
    imageAbove?: StaticImageData;
    imageBelow?: StaticImageData;
  }[];
}) => {
  return (
    <div>
      {/* Title, Subtitle, CTA Section */}
      <div className="w-[100vw] self-stretch h-[100%] px-4 pl-[2rem] sm:pl-[8rem] pt-[10%] bg-gray-800 flex flex-col justify-start items-start gap-2">
        <div className="self-stretch text-zinc-100 text-[65px] sm:text-[90px] font-black font-['Playfair Display'] leading-[70px] sm:leading-[118.80px]">
          {title}
        </div>
        <div className="py-[10px] sm:max-w-[40%] text-wrap self-stretch text-zinc-100 text-sm font-normal font-['Manrope'] leading-[21px]">
          {subtitle}
        </div>
        <div className="self-stretch justify-start items-center gap-10 inline-flex mt-5">
          <button className="px-12 py-4 bg-teal-600 rounded-lg text-white text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
            {CTAButtonText}
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-[100vw] self-stretch h-[100%] px-4 py-[0] bg-gray-800 flex flex-col sm:flex-row items-start gap-10 pt-[5%] pb-[5%]">
        {/* Image Column */}
        <div className="w-full sm:w-1/2 h-full flex flex-col items-center gap-10">
          <div className="rounded-[32px] flex flex-col gap-2 sm:gap-36">
            <Image
              className="hidden sm:block max-w-[450px] grow shrink basis-0 self-stretch rounded-[32px]"
              src={profileImage}
              alt=""
            />
            <Image
              className="hidden sm:block max-w-[450px] grow shrink basis-0 self-stretch rounded-[32px]"
              src={workplaceImage}
              alt=""
            />
            <Image
              className="hidden sm:block min-w-[450px] grow shrink basis-0 self-stretch rounded-[32px]"
              src={helpingImage}
              alt=""
            />
          </div>
        </div>

        {/* Timeline Column */}
        <div className="w-full sm:w-1/2 flex flex-col items-start gap-10 pr-[5%]">
          {events.map((event, index) => (
            <Event key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
