import { StaticImageData } from "next/image";
import Image from "next/image";
import BuildingSVG from "../../../public/building.svg";
import ComingSoonImage from "../../../public/Coming.png";

const ComingSoonSection = ({ showTopImage }: { showTopImage: boolean }) => {
  return (
    <>
      {showTopImage && (
        <Image
          alt=""
          src={ComingSoonImage}
          className="max-w-full sm:max-w-[50%]"
        />
      )}
      <Image alt="" src={BuildingSVG} />
    </>
  );
};

export default ComingSoonSection;
