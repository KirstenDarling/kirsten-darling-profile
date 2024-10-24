import Image, { StaticImageData } from "next/image";

const TextBanner = ({
  heading,
  subheading,
  image,
  eyebrowText,
  text,
  withBackground = true,

  splitText,
}: {
  heading?: string;
  subheading?: string;
  image?: StaticImageData;
  eyebrowText?: string;
  text?: string;
  withBackground?: boolean;
  splitText?: string;
}) => {
  const hasSplitStyle = eyebrowText && heading && splitText;

  return (
    <div
      className={`w-full relative min-h-[400px] ${!withBackground && "bg-rose-500"}`}
    >
      {withBackground && image && (
        <Image
          alt=""
          src={image}
          className="z-[3]"
          sizes="100vw"
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            minHeight: "400px",
          }}
        />
      )}
      <div
        className={`absolute min-h-[400px] max-h-[400px] ${!hasSplitStyle ? "w-[100vw]" : "w-[50%]"} top-0 z-[5] text-center self-stretch px-4 py-[184px] justify-center items-center gap-12 inline-flex 
          ${withBackground ? "bg-black bg-opacity-60 text-white" : "bg-black text-white"}`}
      >
        <div className="grow shrink basis-0 flex-col justify-start items-center gap-2 inline-flex">
          {hasSplitStyle ? (
            <>
              <div className="text-[28px] font-bold font-['Syne'] leading-[33.60px] text-purple-500">
                {eyebrowText}
              </div>
              <div className="justify-start items-start gap-8 inline-flex">
                <div className="max-w-[45%] text-[56px] font-extrabold font-['Alegreya'] leading-[67.20px] text-white">
                  {heading}
                </div>
                <div className="h-[93px] text-[22px] font-normal font-['Alegreya'] leading-[30.80px] text-white">
                  {text}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-7xl font-extrabold font-['Alegreya'] leading-[77.76px] text-neutral-50">
                {heading}
              </div>
              <div className="text-[22px] font-normal font-['Alegreya'] leading-[30.80px] text-neutral-50">
                {subheading || text}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextBanner;
