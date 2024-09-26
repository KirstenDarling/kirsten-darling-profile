import Image, { StaticImageData } from "next/image";
import styles from "../styles/footerThicc.module.css";

const CardRectangle2 = ({
  heading,
  subheading,
  image,
  link,
  textColor,
  textAlign,
}: {
  heading?: string;
  subheading?: string;
  image: StaticImageData;
  link?: string;
  textColor?: string;
  textAlign?: string;
}) => {
  return (
    <a
      href={link ? link : "/"}
      target={link == "/certifications" ? "_self" : "_blank"}
    >
      <div className="grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex">
        <Image
          className={`max-h-[233px] self-stretch rounded-[16px] object-contain`}
          alt=""
          src={image}
        />
        <div className="self-stretch px-[4rem] h-full flex-col justify-center items-center gap-2 flex">
          <div
            className={`self-stretch ${textAlign ? textAlign : "text-center"} ${textColor ? textColor : "text-neutral-100"} text-lg font-normal font-['Open Sans'] leading-[27px]`}
          >
            {heading}
          </div>
          <div
            className={`self-stretch ${textColor ? textColor : "text-zinc-300"} text-sm font-normal font-['Open Sans'] leading-snug`}
          >
            {subheading}
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardRectangle2;
