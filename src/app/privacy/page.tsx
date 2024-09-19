import * as React from "react";
import ComingSoonSection from "../components/ComingSoonSection";

export default function Home() {
  return (
    <div className="w-full bg-white flex-col justify-start items-center inline-flex">
      <div className="privacy-policy-container bg-white justify-center items-center inline-flex flex-col md:flex-col py-[120px] px-12">
        <div className="order-1 md:order-none grow shrink basis-0 px-12 py-[36px] md:py-[0px] flex-col justify-center items-center gap-8 inline-flex">
          <div className="self-stretch h-full flex-col justify-center items-start gap-2 md:gap-10 flex">
            <div className="self-stretch h-full flex-col justify-center items-start gap-4 flex">
              <div className={`self-stretch textStyle`}>
                <h2 className="font-bold text-[3rem] mb-[5rem]">
                  Privacy Policy
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="order-2 md:order-none grow shrink basis-0 h-full justify-center items-center gap-2 flex flex-col">
          <div className="text-black font-normal leading-[27px] sm:max-w-[70%] md:max-w-[100%] grow shrink basis-0 self-stretch">
            <div className="mb-[3rem]">
              <p className="text-xl mb-[0.5rem]">
                <strong>Information We Collect</strong>
              </p>

              <ul>
                <li>
                  <strong>Personal Information:</strong> We may collect personal
                  information that you voluntarily provide to us through contact
                  forms or email inquiries, such as your name and email
                  address.&nbsp;
                </li>
                <li>
                  <strong>Usage Data:</strong> We may collect information about
                  how you access and use our website, including your IP address,
                  browser type, device information, and pages visited. We may
                  use cookies or similar technologies to collect this
                  data.&nbsp;
                </li>
              </ul>
            </div>

            <div className="mb-[3rem]">
              <p className="text-xl mb-[0.5rem]">
                <strong>How We Use Your Information</strong>
              </p>

              <ul>
                <li>
                  <strong>Communication:</strong> We may use your personal
                  information to respond to your inquiries and provide customer
                  support.
                </li>
                <li>
                  <strong>Website Improvement:</strong> We may use usage data to
                  analyze trends, track user interactions, and improve our
                  website&apos;s content and functionality.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> We may process your
                  information to comply with applicable laws and regulations.
                </li>
              </ul>
            </div>

            <div className="mb-[3rem]">
              <p className="text-xl mb-[0.5rem]">
                <strong>Sharing Your Information</strong>
              </p>

              <ul>
                <li>
                  <strong>Third-Party Service Providers:</strong> We may share
                  your information with third-party service providers who help
                  us operate our website and provide services to you (e.g.,
                  website hosting, analytics). These providers are contractually
                  obligated to protect your information.&nbsp;
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your
                  information if required by law or in response to a valid legal
                  request (e.g., court order, subpoena).&nbsp;
                </li>
              </ul>
            </div>

            <div className="mb-[3rem]">
              <p className="text-xl mb-[0.5rem]">
                <strong>Data Security</strong>
              </p>

              <p>
                We take reasonable measures to protect your information from
                unauthorized access, loss, or misuse. However, no method of data
                transmission or storage is completely secure, and we cannot
                guarantee the absolute security of your information.&nbsp;
              </p>
            </div>

            <div className="mb-[3rem]">
              <p className="text-xl mb-[0.5rem]">
                <strong>Your Choices</strong>
              </p>

              <ul>
                <li>
                  <strong>Cookies:</strong> You can manage your cookie
                  preferences through your browser settings.
                </li>
                <li>
                  <strong>Access and Correction:</strong> You can request access
                  to or correction of your personal information by contacting
                  us.
                </li>
              </ul>
            </div>

            <div className="mb-[3rem]">
              <p className="text-xl mb-[0.5rem]">
                <strong>Changes to this Policy</strong>
              </p>

              <p>
                We may update this privacy policy from time to time. We will
                notify you of any material changes by posting the updated policy
                on our website.&nbsp;
              </p>
            </div>

            <div className="mb-[3rem]">
              <p className="text-xl mb-[0.5rem]">
                <strong>Contact Us</strong>
              </p>

              <p>
                If you have any questions about this privacy policy, please
                contact us.&nbsp;
              </p>
            </div>

            <div className="mb-[3rem]">
              <p className="text-xl mb-[0.5rem]">
                <strong>Important Notes</strong>
              </p>

              <ul>
                <li>
                  <strong>Children&apos;s Privacy:</strong> This website is not
                  intended for children under the age of 13. We do not knowingly
                  collect personal information from children under 13.&nbsp;
                </li>
                <li>
                  <strong>International Users:</strong> If you are accessing our
                  website from outside the United States, your information may
                  be transferred to and processed in the United States. By using
                  our website, you consent to this transfer.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
