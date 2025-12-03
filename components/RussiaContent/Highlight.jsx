import Image from "next/image";
import React from "react";
import rightsign from "../../public/charm_circle-tick.svg";
import Planningform from "./Planningform";
import Link from "next/link";

const highlights = [
  { label: "Intake for MBBS Course", value: "September" },
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
  "The cost of studying MBBS in Russia is lower as compared to private medical colleges in India.",
  "The degrees offered by these leading institutes are recognized by the World Health Organization (WHO), National Medical Commission (NMC), formerly known as the Medical Council of India, and other international medical bodies.",
  "The Indian students studying at medical universities in Russia can practice anywhere in India.",
  "The Russian medical colleges have all the basic amenities, including laboratory facilities, library facilities, and well-equipped classrooms. This maintains the standard of education.",
  "The hostels and accommodation of the medical colleges situated in Russia are comfortable and secure for Indian students.",
];

const Highlight = () => {
  return (
    <>
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

      <Planningform />
      <div className="w-full mt-7 flex flex-col gap-2">
        <h2 className="text-[22px] lg:text-[28px] font-bold text-teal-600">
          Why Study MBBS in Russia for Indian Students?
        </h2>
        <p className="font-semibold text-[14px] sm:text-[16px]">
          Here are some reasons why Indian students must opt to study MBBS in
          Russia:
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

        <div className="mt-4">
          <p className="text-teal-600  py-2 px-1 text-sm font-bold rounded-md  ">
            <span id="Eligibility" className=" text-black font-bold">
              Read More:
            </span>{" "}
            <Link
              href="/blog/benefits-of-studying-mbbs-in-russia"
              className="cursor-pointer hover:underline"
            >
              20 Benefits of Studying MBBS in Russia
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Highlight;
