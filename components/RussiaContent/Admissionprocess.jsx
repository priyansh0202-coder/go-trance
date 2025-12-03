import React from "react";
import Image from "next/image";
import Link from "next/link";

const AdmissionProcess = () => {
  const steps = [
    {
      number: 1,
      description:
        "Research & University Selection: Choose an NMC-approved university.",
    },
    {
      number: 2,
      description: "Application Submission: Fill the online application and submit scanned documents.",
    },
    {
      number: 3,
      description:
        "Receive Offer Letter: Upon eligibility review, the university issues an admission offer (invitation letter).",
    },
    {
      number: 4,
      description:
        "Fee Payment: Pay the first-year tuition fee to the university's official bank account.",
    },
    {
      number: 5,
      description:
        "Visa Application: Apply for a student visa at the Georgian Embassy with the offer letter and fee receipt.",
    },
    {
      number: 6,
      description:
        "Travel & Enrollment: Fly to Georgia, complete university registration, and begin studies.",
    },
  ];

  return (
    <div className="container mx-auto px-2 pt-8 pb-2">
      <h2 className="text-[20px] lg:text-[28px] font-bold text-teal-600 mb-3 text-left">
        Admission Process
      </h2>
      <p className=" text-[14px] sm:text-[16px] text-left font-semibold mb-4">
        The admission process is simple and typically follows these steps:
      </p>

      <div className="space-y-4 relative">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-wrap sm:flex-nowrap items-start sm:items-center space-x-2"
          >
            <div className="relative z-10 p-0">
              <div className="">
                <span className="text-[14px] text-teal-600 sm:text-[16px] font-bold whitespace-nowrap ">
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
      {/* <div className="mt-4">
        <p className="text-teal-600 py-2 px-1  text-sm rounded-md font-bold ">
          <span id="Eligibility" className=" text-black font-bold">
            Read More:
          </span>{" "}
          <Link
            href="/blog/mbbs-in-russia-admission"
            className="cursor-pointer hover:underline"
          >
            MBBS in Russia Admission                 </Link>
        </p>
      </div> */}
    </div>
  );
};

export default AdmissionProcess;
