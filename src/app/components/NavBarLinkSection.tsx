import LinkSection from "./LinkSection";

export const NavBarLinkSection = ({
  textColor,
  font,
  isNavBar1 = true,
  links,
}: {
  textColor?: string;
  font?: string;
  isNavBar1?: boolean;
  links?: { title: string; URL: string }[];
}) => {
  return (
    <div
      className={`hidden sm:flex w-${
        isNavBar1 ? "334" : "307"
      } px-4 justify-start items-center gap-4`}
    >
      {links &&
        links.map((link, index) => (
          <LinkSection
            key={index}
            title={link.title}
            URL={link.URL}
            textColor={
              link.title === "Study Portal" ? "text-green-500" : textColor
            }
            font={font}
            isNavBar1={isNavBar1}
          />
        ))}
    </div>
  );
};

export default NavBarLinkSection;
