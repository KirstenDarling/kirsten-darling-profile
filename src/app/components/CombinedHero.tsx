import Image, { StaticImageData } from "next/image";

const CombinedHero = ({
  heading,
  subheading,
  buttonText,
  image,
  backgroundStyle,
  subTextStyle,
  textStyle,
  buttonStyle,
}: {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  image: StaticImageData;
  backgroundStyle: string;
  textStyle: string;
  subTextStyle?: string;
  buttonStyle: string;
}) => {
  return (
    <div
      className={`self-stretch ${backgroundStyle} justify-center items-center inline-flex`}
    >
      <div className="grow shrink basis-0 px-12 py-[120px] flex-col justify-center items-center gap-8 inline-flex">
        <div className="self-stretch h-[302px] flex-col justify-center items-start gap-10 flex">
          <div className="self-stretch h-[203px] flex-col justify-center items-start gap-4 flex">
            <div className={`self-stretch ${textStyle}`}>{heading}</div>
            <div className={`self-stretch ${subTextStyle}`}>{subheading}</div>
          </div>
          {buttonText && (
            <div
              className={`self-stretch px-12 py-4 ${buttonStyle} justify-center items-center gap-1 inline-flex`}
            >
              <div className="px-1 justify-center items-center gap-2 flex">
                <div
                  className={`text-center text-white text-[125%] font-normal leading-[27px] ${textStyle}`}
                >
                  {buttonText}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="grow shrink basis-0 h-[725px] justify-center items-center gap-2 flex">
        {image && (
          <Image
            className="grow shrink basis-0 self-stretch"
            src={image}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default CombinedHero;
