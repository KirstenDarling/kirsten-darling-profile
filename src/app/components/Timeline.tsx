import Image, { StaticImageData } from "next/image";
import Event from "./Event";

const Timeline = ({
  mainImage,
  title,
  subtitle,
  CTAButtonText,
  events,
}: {
  mainImage: StaticImageData;
  title?: string;
  subtitle?: string;
  CTAButtonText?: string;
  events: { date: string; text?: string }[];
}) => {
  return (
    <div className="self-stretch h-[1108px] px-4 py-[120px] bg-gray-800 flex-col justify-center items-center gap-10 flex">
      <div className="self-stretch justify-center items-center gap-20 inline-flex">
        <div className="grow shrink basis-0 h-[868px] justify-center items-center gap-10 flex">
          <div className="grow shrink basis-0 w-[60%] rounded-[32px] justify-center items-center gap-2 flex">
            <Image
              className="grow shrink basis-0 self-stretch rounded-[32px]"
              src={mainImage}
              alt=""
            />
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-center gap-10 inline-flex">
            <div className="self-stretch h-[366px] flex-col justify-center items-center gap-10 flex">
              <div className="self-stretch h-[267px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-zinc-100 text-[108px] font-black font-['Playfair Display'] leading-[118.80px]">
                  {title}
                </div>
                <div className="self-stretch text-zinc-100 text-sm font-normal font-['Manrope'] leading-[21px]">
                  {subtitle}
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-10 inline-flex">
                <div className="grow shrink basis-0 h-[59px] px-12 py-4 bg-teal-600 rounded-lg justify-center items-center gap-1 flex">
                  <div className="px-1 justify-center items-center gap-2 flex">
                    <div className="text-center text-white text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
                      {CTAButtonText}
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start gap-4 flex">
                  <div className="w-6 h-6 relative" />
                  <div className="w-6 h-6 relative" />
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-10 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                {events.map((event, index) => (
                  <Event key={index} date={event.date} text={event.text} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
