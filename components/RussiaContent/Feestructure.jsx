import Image from "next/image";
import React from "react";
// import rightsign from "/public/aboutus/charm_circle-tick.svg";
import rightsign from "../../public/charm_circle-tick.svg";
import Link from "next/link";
const Feestructure = () => {
  return (
    <>
      <div className=" w-full  flex flex-col gap-5 mt-5">
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-bold text-teal-600">
            Eligibility Criteria for Indian Students
          </h2>
          <p className="text-[14px] sm:text-[16px] font-semibold">
            To secure admission for MBBS in Georgia, Indian students must fulfill:

          </p>
        </div>
        <div className="text-lg sm:text-[18px] bg-[#D6EAFF] flex flex-col gap-1 p-5">
          <div className="text-sm sm:text-[16px] flex flex-col gap-2">
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className=" h-[20px] w-[20px] mt-1"
              />

              <p className="text-[14px] sm:text-[16px] flex gap-2 text-justify">
                Academic Qualification: Minimum 50% aggregate marks in Physics, Chemistry, and Biology (PCB) in 10+2 (40% for reserved categories as per NMC rules).

              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className=" h-[20px] w-[20px] mt-1"
              />

              <p className=" text-[14px] sm:text-[16px] flex gap-2 text-justify">
                Age Requirement: Must be 17 years old on or before 31st December of the admission year.

              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className=" h-[20px] w-[20px] mt-1"
              />

              <p className=" text-[14px] sm:text-[16px] flex gap-2 text-justify">
                NEET Qualification: Mandatory to have qualified the NEET exam in the current or previous year (for licensing in India).
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className=" h-[20px] w-[20px] mt-1"
              />

              <p className=" text-[14px] sm:text-[16px] flex gap-2 text-justify">
                Valid Passport.
              </p>
            </div>
          </div>
        </div>



      </div>
      <div className=" overflow-x-auto  sm:rounded-lg  mt-5">
        <h2 className="text-[22px] lg:text-[28px] lg:font-semibold font-bold text-teal-600">
          Fee Structure for MBBS in Georgia (Approximate)
        </h2>
        <p className="text-[14px] sm:text-[16px] mt-2 font-semibold">
          The cost of studying MBBS in Georgia is highly affordable. Below is a general breakdown:

        </p>
        <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black mt-5">
          {/* <thead className="text-sm ">
            <tr className="odd:bg-[rgb(10,239,255)] even:bg-white">
              <th
                scope="col"
                className="px-4 py-2 border border-black text-center"
              >
                University Name
              </th>
              <th
                scope="col"
                className="px-4 py-2 border border-black text-center"
              >
                Annual Fees (Approx)
              </th>
            </tr>
          </thead> */}
          <tbody className="">
            <tr className="odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <p  className="text-teal-600 ">
                  Tuition Fees per year
                </p>
              </td>
              <td className="px-4 py-2 border border-black text-center">$4,000 - $8,000 USD</td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <p  className="text-teal-600 ">
                  Hostel Accommodation per year
                </p>
              </td>
              <td className="px-4 py-2 border border-black text-center">$1,500 - $3,000 USD</td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <p  className="text-teal-600 ">
                  Living Expenses (food, transport, etc.)
                </p>
              </td>
              <td className="px-4 py-2 border border-black text-center"> $1,500 - $2,500 USD per year</td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <p  className="text-teal-600 ">
                  Total Approximate Annual Cost
                </p>
              </td>
              <td className="px-4 py-2 border border-black text-center">$7,000 - $13,500 USD (approx. ₹5.8L - ₹11.2L INR)</td>
            </tr>


          </tbody>
        </table>
        <p className="text-[14px] sm:text-[16px] mt-4">
          <span className="font-semibold">Note:</span> Tuition fees of the
          medical universities mentioned in the table are subject to
          fluctuation.{" "}
        </p>
      </div>

      
    </>
  );
};

export default Feestructure;
