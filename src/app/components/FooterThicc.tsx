import Image, { StaticImageData } from "next/image";
import FooterColumn from "./FooterColumn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/footerThicc.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
    <>
      <div
        className={`hidden sm:block ${className} self-stretch h-[303px] p-2 flex-col justify-start items-start gap-2 flex`}
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
              <div className="flex space-x-6">
                <p className={`${styles.glow} ${styles.socialIcons}`}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/kirstendarling/"
                  >
                    <LinkedInIcon
                      sx={{
                        fontSize: 40,
                        color: "#A855F7",
                        borderRadius: "50%",
                      }}
                    />
                  </a>
                </p>
                <p className={`${styles.glow} ${styles.socialIcons}`}>
                  <a target="_blank" href="https://github.com/KirstenDarling/">
                    <GitHubIcon
                      sx={{
                        fontSize: 40,
                        color: "#A855F7",
                        borderRadius: "50%",
                      }}
                    />
                  </a>
                </p>
                <p className={`${styles.glow} ${styles.socialIcons}`}>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/darling_kirsten/"
                  >
                    <InstagramIcon
                      sx={{
                        fontSize: 40,
                        color: "#A855F7",
                        borderRadius: "50%",
                      }}
                    />
                  </a>
                </p>
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
          {additionalSection && (
            <div className="self-stretch h-px bg-zinc-800" />
          )}
          {additionalSection && (
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-zinc-300 text-xs font-normal font-['Open Sans'] leading-tight">
                Last Updated: July 27, 2024
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
      {/* // MOBILE VERSION BELOW */}
      <div
        className={`block sm:hidden ${className} self-stretch h-[303px] p-2 flex-col justify-start items-start gap-2 flex`}
      >
        <div
          className={`self-stretch h-[500px] sm:h-[287px] px-10 py-8 ${backgroundColor} rounded-3xl flex-col justify-start items-start gap-8 flex`}
        >
          <div className="flex-col self-stretch justify-between items-start inline-flex">
            <div className="grow shrink basis-0 h-[136px] justify-end items-start gap-10 flex">
              {columns.map((column, index) => (
                <FooterColumn
                  key={index}
                  links={column.links}
                  textColor={textColor}
                />
              ))}
            </div>
            <div className="mt-[10%] sm:mt-[0%] w-[100%] grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
              <div className="mt-[50px] justify-center items-center gap-2 inline-flex">
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
              <div className="flex w-[100%] justify-center space-x-6">
                <p className={`${styles.glow} ${styles.socialIcons}`}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/kirstendarling/"
                  >
                    <LinkedInIcon
                      sx={{
                        fontSize: 40,
                        color: "#A855F7",
                        borderRadius: "50%",
                      }}
                    />
                  </a>
                </p>
                <p className={`${styles.glow} ${styles.socialIcons}`}>
                  <a target="_blank" href="https://github.com/KirstenDarling/">
                    <GitHubIcon
                      sx={{
                        fontSize: 40,
                        color: "#A855F7",
                        borderRadius: "50%",
                      }}
                    />
                  </a>
                </p>
                <p className={`${styles.glow} ${styles.socialIcons}`}>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/darling_kirsten/"
                  >
                    <InstagramIcon
                      sx={{
                        fontSize: 40,
                        color: "#A855F7",
                        borderRadius: "50%",
                      }}
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
          {additionalSection && (
            <div className="self-stretch h-px bg-zinc-800" />
          )}
          {additionalSection && (
            <div className="flex-col self-stretch items-baseline inline-flex">
              <div className="self-center text-zinc-300 text-xs font-normal font-['Open Sans'] leading-tight">
                Last Updated: July 27, 2024
              </div>
              <div className="self-center h-[22px] justify-end items-center gap-4 flex">
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
    </>
  );
};

export default FooterThicc;
