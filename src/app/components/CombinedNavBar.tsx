import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { NavBarLinkSection } from './NavBarLinkSection';

const CombinedNavBar = ({
  FAIcon,
  icon,
  pageTitle,
  textColor,
  font,
  isNavBar1 = true,
  linkSection = true,
  linkSection2 = true,
  pageTitleSection = true,
  links,
  additionalLinks,
  backgroundColor,
  backgroundEdges,
}: {
  icon?: StaticImageData;
  FAIcon?: IconType;
  pageTitle?: string;
  textColor?: string;
  font?: string;
  isNavBar1?: boolean;
  linkSection?: boolean;
  linkSection2?: boolean;
  pageTitleSection?: boolean;
  links?: { title: string; URL: string }[];
  backgroundColor?: string;
  backgroundEdges?: string;
  additionalLinks?: { title: string; URL: string }[];
}) => {
  return (
    <div
      className={`z-[2] w-full ${backgroundEdges} ${textColor} h-[67px] p-2 justify-between items-center inline-flex`}
    >
      <div
        className={`grow shrink basis-0 h-[51px] px-2 py-4 ${backgroundColor} rounded-[64px] justify-between items-center flex`}
      >
        {linkSection && (
          <NavBarLinkSection
            textColor={textColor}
            font={font}
            isNavBar1={isNavBar1}
            links={links}
          />
        )}
        {pageTitleSection && (
          <Link href='/'>
            <div className='justify-center items-center gap-2 flex'>
              <div className='w-6 h-6 relative'>
                {icon && <Image alt='' src={icon} />}
                {FAIcon && <FAIcon className='text-purple-500 h-[22px] w-[22px] mr-[20px]' />}
                {/* {!icon && <Image alt='' src={SunIcon} />}{' '} */}
                {/* Fallback to SunIcon if no icon provided */}
              </div>
              <div
                className={`${textColor} text-base font-normal font-['Open Sans'] leading-normal`}
              >
                {pageTitle}
              </div>
            </div>
          </Link>
        )}
        {linkSection2 && (
          <NavBarLinkSection
            textColor={textColor}
            font={font}
            isNavBar1={isNavBar1}
            links={additionalLinks}
          />
        )}
      </div>
    </div>
  );
};

export default CombinedNavBar;
