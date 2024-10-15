import * as React from "react";
import ComingSoonSection from "../components/ComingSoonSection";

export default function Home() {
  return (
    <div className="w-full bg-white flex-col justify-start items-center inline-flex">
      <div className="text-center w-[100%] text-[72px] pt-20 pb-10 bg-slate-200 border-b-[2rem] border-slate-100">
        <h1 className="text-purple-500">
          <span className="italic text-lg text-black ">the</span>
          Portfolio
        </h1>
      </div>
      <ComingSoonSection showTopImage={true} />
    </div>
  );
}
