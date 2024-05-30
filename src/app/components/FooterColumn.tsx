const FooterColumn = ({
  textColor,
  links,
}: {
  textColor?: string;
  links: { link: string; URL: string }[];
}) => {
  return (
    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
      {links.map(({ link, URL }, index) => (
        <div
          key={index}
          className={`${textColor} text-sm font-normal font-['Fira Sans'] leading-snug`}
        >
          {URL ? (
            <a href={URL} target="_blank" className="hover:underline">
              {link}
            </a>
          ) : (
            link
          )}
        </div>
      ))}
    </div>
  );
};

export default FooterColumn;
