import Link from 'next/link';

export const LinkSection = ({
  title,
  URL,
  textColor,
  font,
  isNavBar1 = true,
}: {
  title: string;
  URL: string;
  textColor?: string;
  font?: string;
  isNavBar1?: boolean;
}) => {
  return (
    <Link href={URL}>
      <div
        className={`w-${isNavBar1 ? '100' : '111'} self-stretch px-4 justify-start items-center gap-2 flex`}
      >
        <div className={`${textColor} text-xs font-normal ${font} leading-tight`}>{title}</div>
      </div>
    </Link>
  );
};

export default LinkSection;
