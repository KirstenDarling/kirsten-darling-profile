import Image, { StaticImageData } from "next/image";
import FooterColumn from "./FooterColumn";

const FooterThicc = ({
  className,
  icon,
  pageTitle,
  subtitle,
  columns,
  textColor,
  backgroundColor,
  additionalSection = false,
}: {
  className?: string;
  icon: StaticImageData;
  pageTitle?: string;
  subtitle?: string;
  columns: { links: { link: string; URL: string }[] }[];
  textColor?: string;
  backgroundColor?: string;
  additionalSection?: boolean;
}) => {
  return (
    <div
      className={` ${className} self-stretch h-[303px] p-2 flex-col justify-start items-start gap-2 flex`}
    >
      <div
        className={`self-stretch h-[287px] px-10 py-8 ${backgroundColor} rounded-3xl flex-col justify-start items-start gap-8 flex`}
      >
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="justify-center items-center gap-2 inline-flex">
              <div className="w-8 h-8 relative">
                <Image alt="" src={icon} />
              </div>
              <div
                className={`${textColor} text-sm font-normal font-['Open Sans'] leading-snug`}
              >
                {pageTitle}
              </div>
            </div>
            <div
              className={`${textColor} text-lg font-normal font-['Open Sans'] leading-[27px]`}
            >
              {subtitle}
            </div>
          </div>
          <div className="grow shrink basis-0 h-[136px] justify-end items-start gap-10 flex">
            {columns.map((column, index) => (
              <FooterColumn
                key={index}
                links={column.links}
                textColor={textColor}
              />
            ))}
          </div>
        </div>
        {additionalSection && <div className="self-stretch h-px bg-zinc-800" />}
        {additionalSection && (
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-zinc-300 text-xs font-normal font-['Open Sans'] leading-tight">
              Last Updated: June 28, 2024
            </div>
            <div className="h-[22px] justify-end items-center gap-4 flex">
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                Legal Info
              </div>
              <div className="text-neutral-100 text-sm font-normal font-['Open Sans'] leading-snug">
                Privacy Policy
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterThicc;
