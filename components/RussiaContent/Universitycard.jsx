"use client";
import Image from "next/image";
import React, { useState } from "react";
import { universities } from "../../app/data/universityData";
import LeadFormModalPopup from "../../components/lead-form/LeadFormModalPopup";
import Link from "next/link";

const Universitycard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="grid grid-cols-1 gap-5">
      {universities.map((university, index) => (
        <div
          key={university.id}
          className="shadow-xl rounded-lg overflow-hidden mt-5 border p-5 flex flex-col gap-2"
        >
          <h3 className="text-[16px] sm:text-[22px] font-bold">
            {index + 1}. {university.title}
          </h3>
          <div className="flex flex-col md:flex-row gap-4  pb-2 mb-2">
            {/* <Image
              src={university.logo}
              alt={university.title}
              className="w-[150px] h-[130px] object-contain mx-auto sm:mx-0 rounded-lg"
            /> */}
            {university.logo ? (
              <Image
                src={university.logo}
                alt={university.title}
                width={150}
                height={130}
                className="object-contain mx-auto sm:mx-0 rounded-lg"
              />
            ) : null}

            <div  >
              <ul className="list-disc text-[14px] sm:text-[16px] p-3">
                {university.disc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black">
            <tbody>
              {university.tableData.map((row, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-[#D6EAFF]" : "bg-white"
                  } border`}
                >
                  <td className="px-4 py-2 border border-black font-medium">
                    {row.heading}
                  </td>
                  <td className="px-4 py-2 border border-black">{row.row}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center gap-2 mt-2">
            <button
              onClick={handleOpenModal}
              className=" bg-[#1E90FF] w-[132px] cursor-pointer h-[40px]  rounded-md text-white text-[14px] sm:text-[16px] "
            >
              Apply Now
            </button>
            <button
              className="border border-black w-[132px] cursor-pointer h-[40px] rounded-md text-[14px] sm:text-[16px]"
            >
              <Link
                href="#"
                className="cursor-pointer ">
                Read More
              </Link>
            </button>
          </div>
        </div>
      ))}

      {isOpen && (
        <LeadFormModalPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default Universitycard;
