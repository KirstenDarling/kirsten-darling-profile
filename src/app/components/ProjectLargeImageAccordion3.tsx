import Image from "next/image";
import NovaPerson1 from "../../../public/NovaPerson1.png";

const ProjectLargeImageAccordion3 = () => {
  return (
    <div className="self-stretch h-[1284px] px-16 py-[120px] bg-black flex-col justify-start items-center gap-16 flex">
      <div className="self-stretch h-[1044px] flex-col justify-center items-start gap-16 flex">
        <div className="self-stretch h-[174px] flex-col justify-start items-center gap-6 flex">
          <div className="self-stretch text-neutral-100 text-[108px] font-normal font-['Fugaz One'] leading-[118.80px]">
            Visual Overdrive
          </div>
          <div className="self-stretch text-zinc-300 text-[22px] font-normal font-['Open Sans'] leading-[30.80px]">
            Explore streets with no daylight.
          </div>
        </div>
        <div className="overflow-hidden self-stretch h-[806px] flex-col justify-center items-start gap-10 flex">
          <div className="self-stretch bg-black justify-start items-center gap-8 inline-flex">
            <div className="p-4 bg-black rounded-[100px] border border-gray-600 justify-center items-center gap-2 inline-flex">
              <div className="w-4 h-4 relative" />
            </div>
            <Image className="w-[1312px]" src={NovaPerson1} alt="" />
            <div className="p-4 bg-black rounded-[100px] border border-gray-600 justify-center items-center gap-2 inline-flex">
              <div className="w-4 h-4 relative" />
            </div>
          </div>
        </div>
        <div className="p-2.5 justify-center items-center gap-[9px] inline-flex">
          <div className="w-2 h-2 bg-gray-100 rounded-full" />
          <div className="w-2 h-2 bg-gray-600 rounded-full" />
          <div className="w-2 h-2 bg-gray-600 rounded-full" />
          <div className="w-2 h-2 bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProjectLargeImageAccordion3;
