import Image from "next/image";
import React from "react";
// import rightsign from "/public/aboutus/charm_circle-tick.svg";
import rightsign from "../../public/charm_circle-tick.svg";
import Link from "next/link";
const Feestructure = () => {
  return (
    <>
      <div className=" overflow-x-auto  sm:rounded-lg  mt-5">
        <h2 className="text-[22px] lg:text-[28px] lg:font-semibold font-bold text-teal-600">
          MBBS in Russia Fee Structure 2025-26
        </h2>
        <p className="text-[14px] sm:text-[16px] mt-2 font-semibold">
          The total fees for MBBS programs in Russia range between $4,000 and
          $6,000 per year. This covers both hostel fees and tuition fees. The
          fees of some top universities are listed below:
        </p>
        <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border border-black mt-5">
          <thead className="text-sm ">
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
          </thead>
          <tbody className="">
            <tr className="odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/samara-state-medical-university" className="text-teal-600 hover:underline">
                  Samara State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">4000 USD</td>
            </tr>
            <tr className="  odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/pskov-state-university" className="text-teal-600 hover:underline">
                  Pskov State University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">4000 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/altai-state-medical-university" className="text-teal-600 hover:underline">
                  Altai State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">4500 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/chechen-state-university" className="text-teal-600 hover:underline">
                  Chechen State  University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">2300 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/kuban-state-medical-university" className="text-teal-600 hover:underline">
                  Kuban State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">3500 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/tver-state-medical-university" className="text-teal-600 hover:underline">
                  Tver State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">3200 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/dagestan-state-medical-university" className="text-teal-600 hover:underline">
                  Dagestan State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">3500 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/bashkir-state-medical-university" className="text-teal-600 hover:underline">
                  Bashkir State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">5600 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/tambov-state-university" className="text-teal-600 hover:underline">
                  Tambov State University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">4200 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/ivanovo-state-medical-academy" className="text-teal-600 hover:underline">
                  Ivanovo State Medical Academy
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">2000 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/penza-state-medical-university" className="text-teal-600 hover:underline">
                  Penza State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">4000 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/smolensk-state-medical-university" className="text-teal-600 hover:underline">
                  Smolensk State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">3500 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/tyumen-state-medical-university" className="text-teal-600 hover:underline">
                  Tyumen State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">4500 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/stavropol-state-medical-university" className="text-teal-600 hover:underline">
                  Stavropol State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">4000 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/voronezh-state-medical-university" className="text-teal-600 hover:underline">
                  Voronezh State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">5000 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/ural-state-medical-university" className="text-teal-600 hover:underline">
                  Ural State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">4200 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/belgorod-state-university" className="text-teal-600 hover:underline">
                  Belgorod State University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">4900 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/siberian-state-medical-university" className="text-teal-600 hover:underline">
                  Siberian State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">3200 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/novosibirsk-national-research-state-university" className="text-teal-600 hover:underline">
                  Novosibirsk National Research State University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">4000 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/first-moscow-state-medical-university" className="text-teal-600 hover:underline">
                  First Moscow State Medical University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">10000 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/lomonosov-moscow-state-university" className="text-teal-600 hover:underline">
                  Lomonosov Moscow State University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">7500 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/kabardino-balkarian-state-university" className="text-teal-600 hover:underline">
                  Kabardino Balkarian State University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">2800 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/tula-state-university" className="text-teal-600 hover:underline">
                  Tula State University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">3300 USD</td>
            </tr>
            <tr className=" odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black text-[14px] sm:text-[16px]">
                <Link href="/kursk-state-medical-university" className="text-teal-600 hover:underline">
                  Kursk State University
                </Link>
              </td>
              <td className="px-4 py-2 border border-black text-center">5500 USD</td>
            </tr>

          </tbody>
        </table>
        <p className="text-[14px] sm:text-[16px] mt-4">
          <span className="font-semibold">Note:</span> Tuition fees of the
          medical universities mentioned in the table are subject to
          fluctuation.{" "}
        </p>
      </div>

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

        {/* <div className="mt-0">
          <p className="text-teal-600 px-1 text-sm sm:text-base rounded-md font-bold ">
            <span id="Eligibility" className=" text-black font-bold">
              Read More:
            </span>{" "}
            <Link
              href="/blog/mbbs-in-russia-eligibility"
              className="cursor-pointer hover:underline"
            >
              MBBS in Russia Eligibility                        </Link>
          </p>
        </div> */}

      </div>
    </>
  );
};

export default Feestructure;
