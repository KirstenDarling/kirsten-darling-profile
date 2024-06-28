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
  buttonTextStyle,
}: {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  image: StaticImageData;
  backgroundStyle: string;
  textStyle: string;
  subTextStyle?: string;
  buttonStyle: string;
  buttonTextStyle?: string;
}) => {
  return (
    <div
      className={`self-stretch ${backgroundStyle} justify-center items-center inline-flex flex-col md:flex-row`}
    >
      {/* Text Container */}
      <div className="order-2 md:order-none grow shrink basis-0 px-12 py-[36px] md:py-[120px] flex-col justify-center items-center gap-8 inline-flex">
        <div className="self-stretch h-[302px] flex-col justify-center items-start gap-2 md:gap-10 flex">
          <div className="self-stretch h-[203px] flex-col justify-center items-start gap-4 flex">
            <div className={`self-stretch ${textStyle}`}>{heading}</div>
            <div className={`self-stretch ${subTextStyle}`}>{subheading}</div>
          </div>
          {buttonText && (
            <div
              className={`self-stretch px-6 md:px-12 py-2 md:py-4 ${buttonStyle} justify-center items-center gap-1 inline-flex`}
            >
              <div className="px-1 justify-center items-center gap-2 flex">
                <h1
                  className={`text-center text-white font-normal leading-[27px] ${buttonTextStyle}`}
                >
                  {buttonText}
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Image Container */}
      <div className="order-1 md:order-none grow shrink basis-0 h-[725px] justify-center items-center gap-2 flex">
        {image && (
          <Image
            className="mt-[10%] md:mt-[0] max-w-[70%] md:max-w-[100%] grow shrink basis-0 self-stretch"
            src={image}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default CombinedHero;
