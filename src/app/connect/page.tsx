import * as React from "react";
import ComingSoonSection from "../components/ComingSoonSection";

export default function Home() {
  return (
    <div className="w-full bg-white flex-col justify-start items-center inline-flex">
      <ComingSoonSection showTopImage={true} />
    </div>
  );
}
