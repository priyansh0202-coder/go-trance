import Image from "next/image";
import React from "react";
import rightsign from "../../public/charm_circle-tick.svg";
import Planningform from "./Planningform";
import Link from "next/link";

const highlights = [
  {
    label: "Course Duration",
    value: "6 Years (including 1 year of internship)",
  },
  { label: "Medium of Instruction", value: "English" },
  {
    label: "Recognition",
    value: "NMC, WHO, WFME, ECFMG, FAIMER, etc.)",
  },
  { label: "Average Annual Tuition", value: "$4,000 - $8,000 USD" },
  { label: "Average Living Cost", value: "$3,000 - $4,000 USD per year" },
  { label: "Eligibility", value: "50% in PCB in 12th, NEET Qualified (for Indians)" },
  { label: "Intake Season", value: "September (Main), February (Limited)r" },
];

const reasonsToStudyMBBS = [
  "Globally Recognized Degrees: Degrees are recognized by WHO, NMC (formerly MCI), ECFMG (USA), WFME, and many European councils.",
  "Affordable Tuition Fees: Significantly lower costs compared to private medical colleges in India or other Western countries.",
  "No Entrance Exam: Admission is based on Class 12 marks (PCB) and eligibility, with no complex entrance tests like NEET for admission (NEET qualification is mandatory for practice in India).",
  "English Medium Instruction: The entire MBBS program is taught in English, eliminating language barriers.",
  "High-Quality Education & Infrastructure: European-standard education with modern labs, hospitals, and teaching methodologies.",
  "Safe & Welcoming Environment: Georgia is known for its safety, low crime rate, and hospitable attitude towards international students.",
  "Simple Admission Process: Straightforward documentation and a streamlined visa process with high approval rates.",
  "Clinical Exposure: Early patient contact and practical training in affiliated hospitals.",
];


const Highlight = () => {
  return (
    <>
      <div className="w-full mt-7 flex flex-col gap-2">
        <h2 className="text-[22px] lg:text-[28px] font-bold text-teal-600">
          Why Choose Georgia for MBBS?
        </h2>
        <p className="font-semibold text-[14px] sm:text-[16px]">
          Georgia stands out as a top destination for medical studies due to its unique advantages:
        </p>
        <div className="text-[14px] sm:text-[16px] flex flex-col gap-2 mt-3">
          {reasonsToStudyMBBS.map((reason, index) => (
            <div key={index} className="flex gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] text-teal-600 w-[18px] mt-1"
              />
              <p className="flex gap-2 text-justify">{reason}</p>
            </div>
          ))}
        </div>

       
      </div>
      <Planningform />
      <div className="relative overflow-x-auto mt-7 sm:rounded-lg">
        <h2 className="text-[22px] lg:text-[28px] font-bold text-teal-600 lg:font-semibold ">
          Quick Facts: MBBS in Georgia
        </h2>
        <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black mt-5">
          <thead>
            <tr className="odd:bg-teal-500 even:bg-white border text-white ">
              <th className="px-4 py-2 border border-black text-center">Feature</th>
              <th className="px-4 py-2 border border-black text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {highlights.map((item, index) => (
              <tr
                key={index}
                className="odd:bg-[#D6EAFF] even:bg-white text-[14px] sm:text-[16px]"
              >
                <td className="px-4 py-2 border border-black">{item.label}</td>
                <td className="px-4 py-2 border border-black">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default Highlight;
