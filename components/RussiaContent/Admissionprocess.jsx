import React from "react";
import Image from "next/image";
import Link from "next/link";

const AdmissionProcess = () => {
  const steps = [
    {
      number: 1,
      description:
        "Visit the official university to complete the online application",
    },
    {
      number: 2,
      description: "Upload the necessary documents required for admission",
    },
    {
      number: 3,
      description:
        "Receive an acceptance letter from the university based on eligibility",
    },
    {
      number: 4,
      description:
        "Apply for a student visa at the Russian embassy using the acceptance letter",
    },
    {
      number: 5,
      description:
        "Pay the first-year tuition fees after receiving the acceptance letter",
    },
    {
      number: 6,
      description:
        "Complete university registration and attend orientation before starting MBBS classes",
    },
  ];

  return (
    <div className="container mx-auto px-2 pt-8 pb-2">
      <h2 className="text-[20px] lg:text-[28px] font-bold text-[#1E90FF] mb-3 text-left">
        How to Apply for MBBS Admission in Russia ?
      </h2>
      <p className=" text-[14px] sm:text-[16px] text-left font-semibold mb-4">
        Follow these comprehensive steps for a smooth admission process
      </p>

      <div className="space-y-4 relative">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-wrap sm:flex-nowrap items-start sm:items-center space-x-2"
          >
            <div className="relative z-10 p-0">
              <div className="">
                <span className="text-[14px] text-[#1E90FF] sm:text-[16px] font-bold whitespace-nowrap ">
                  Step {step.number} :
                </span>
              </div>
            </div>

            <div className=" flex-1">
              <p className="text-[14px] sm:text-[16px] ">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-[#1E90FF] py-2 px-1  text-sm rounded-md font-bold ">
          <span id="Eligibility" className=" text-black font-bold">
            Read More:
          </span>{" "}
          <Link
            href="/blog/mbbs-in-russia-admission"
            className="cursor-pointer hover:underline"
          >
            MBBS in Russia Admission                 </Link>
        </p>
      </div>
    </div>
  );
};

export default AdmissionProcess;
