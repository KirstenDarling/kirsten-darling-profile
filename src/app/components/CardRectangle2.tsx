import Image, { StaticImageData } from "next/image";

const CardRectangle2 = ({
  heading,
  subheading,
  image,
}: {
  heading?: string;
  subheading?: string;
  image: StaticImageData;
}) => {
  return (
    <div className="min-w-[340px] grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex">
      <Image className="self-stretch h-56 rounded-[32px]" alt="" src={image} />
      <div className="self-stretch h-[57px] flex-col justify-center items-center gap-2 flex">
        <div className="self-stretch text-center text-neutral-100 text-lg font-normal font-['Open Sans'] leading-[27px]">
          {heading}
        </div>
        <div className="self-stretch text-zinc-300 text-sm font-normal font-['Open Sans'] leading-snug">
          {subheading}
        </div>
      </div>
    </div>
  );
};

export default CardRectangle2;
