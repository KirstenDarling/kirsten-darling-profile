import * as React from "react";

export default function Home() {
  return (
    <div className="w-full bg-white flex-col justify-start items-center inline-flex">
      <div className="privacy-policy-container self-stretch bg-white justify-center items-center inline-flex flex-col md:flex-col py-[120px] px-12">
        <div className="order-2 md:order-none grow shrink basis-0 px-12 py-[36px] md:py-[0px] flex-col justify-center items-center gap-8 inline-flex">
          <div className="self-stretch h-full flex-col justify-center items-start gap-2 md:gap-10 flex">
            <div className="self-stretch h-full flex-col justify-center items-start gap-4 flex">
              <div className={`self-stretch textStyle`}>
                <h2 className="font-bold text-[3rem] mb-[5rem]">Legal Info</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-none grow shrink basis-0 h-full justify-center items-center gap-2 flex flex-col">
          <div className="self-stretch text-black font-normal leading-[27px] max-w-[70%] md:max-w-[100%] grow shrink basis-0 self-stretch">
            <div className="mb-[3rem]">
              <p className="text-xl mb-[3rem]">
                <strong>Disclaimer</strong>
              </p>

              <ul>
                <li className="mb-[3rem]">
                  The information provided on this website is for general
                  informational purposes only and does not constitute legal or
                  professional advice. We make no representations or warranties
                  of any kind, express or implied, about the completeness,
                  accuracy, reliability, suitability, or availability with
                  respect to the website or the information, products, services,
                  or related graphics contained on this website for any purpose.
                </li>
                <li className="mb-[3rem]">
                  We disclaim all liability for any loss or damage arising from
                  the use of this website or its content. Please consult with a
                  qualified professional for advice specific to your situation.
                </li>
                <li className="mb-[3rem]">
                  We reserve the right to modify or update this disclaimer at
                  any time without notice.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
