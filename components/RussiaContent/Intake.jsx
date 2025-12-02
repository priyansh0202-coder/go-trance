import React from "react";
import hands from "../../public/assets/hands.png";
import Image from "next/image";
import Link from "next/link";
import rightsign from "../../public/charm_circle-tick.svg";
import hat from "../../public/assets/hat3.png";
const Intake = () => {
  return (
    <>
      {/* intake */}
      <div className=" overflow-x-auto mt-5">
        <h2 className="font-bold text-[22px] lg:text-[28px] text-[#1E90FF]">
          MBBS in Russia - Intake Date & Deadlines 2025
        </h2>
        <p className="font-semibold mt-1 text-[14px] sm:text-[16px]">
          Students must know about the intake & admisison dates of Russian MBBS
          colleges. The table below contains related information.
        </p>
        <table className="w-full text-[14px] sm:text-[16px] text-center border border-black mt-5 ">
          <tbody className="">
            <tr className="odd:bg-[#D6EAFF] even:bg-white border  ">
              <td className="px-4 py-2 border border-black  font-semibold">
                Aspect
              </td>
              <td className="px-4 py-2 border border-black font-semibold">
                Details
              </td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white text-left">
              <td className="px-4 py-2 border border-black">Intake Month</td>
              <td className="px-4 py-2 border border-black">September </td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white text-left">
              <td className="px-4 py-2 border border-black">
                Semester Duration
              </td>
              <td className="px-4 py-2 border border-black">
                Approximately 6 months each{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white text-left">
              <td className="px-4 py-2 border border-black">
                Application Period
              </td>
              <td className="px-4 py-2 border border-black">June to July </td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white text-left">
              <td className="px-4 py-2 border border-black">
                Visa Processing Time
              </td>
              <td className="px-4 py-2 border border-black">4 to 6 weeks</td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white text-left">
              <td className="px-4 py-2 border border-black">
                Recommended Visa Application
              </td>
              <td className="px-4 py-2 border border-black">
                2 to 3 months before the session starts
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Accreditation */}
      <div className="bg-[#D6EAFF] hidden md:block p-6 md:p-12 rounded-md mt-7 shadow-lg ">
        <h2 className="text-[#1E90FF] text-[22px] lg:text-[28px] font-semibold mb-4 ">
          MBBS in Russia: Accreditation & Recognition
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          Russian medical universities are recognized by the following key
          organizations:
        </p>

        <div className="flex justify-center items-center mt-4">
          <div className="relative ">
            <Image
              src={hands}
              alt="img"
              className="w-52 ml-[-24%] mb-[-15%] rounded-b-lg  h-60"
            />
          </div>
          <ul className="space-y-2   text-[14px] sm:text-[16px]">
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">⭐</span>
              World Health Organization (WHO)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">⭐</span>
              National Medical Commission (NMC)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">⭐</span>
              Educational Commission for Foreign Medical Graduates (ECFMG)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">⭐</span>
              General Medical Council (GMC)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">⭐</span>
              Russian Federation Ministry of Health
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">⭐</span>
              Federal Service for Supervision in Education and Science
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#D6EAFF] p-6 md:p-12 mt-7 md:hidden rounded-md shadow-lg ">
        <h2 className="text-[#1E90FF] text-[22px] lg:text-[28px] font-bold mb-4 ">
          Accreditation & Recognitions Of Medical Universities In Russia
        </h2>
        <p className="text-[14px] sm:text-[16px]">
          Degrees from Russian MBBS universities are offered, and they are
          accepted all around the world. These prestigious organizations that
          endorse these universities are:
        </p>

        <div className="flex justify-center items-center mb-6">
          <div className="relative ">
            <Image src={hat} alt="img" className="w-44  h-32" />
          </div>
        </div>

        <ul className="space-y-2 text-[14px] sm:text-[16px]">
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            World Health Organization (WHO)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            National Medical Commission (NMC)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Educational Commission for Foreign Medical Graduates (ECFMG)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            General Medical Council (GMC)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Russian Federation Ministry of Health
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⭐</span>
            Federal Service for Supervision in Education and Science
          </li>
        </ul>
      </div>

      {/* russia vs india */}
      <div className="mt-7">
        <h2 className="font-bold text-[22px] lg:text-[28px] text-[#1E90FF]">
          MBBS in Russia vs MBBS in India
        </h2>
        <p className="text-[14px] sm:text-[16px] font-semibold">
          Here is the table comparing MBBS in Russia vs MBBS in India:
        </p>
        <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right border mt-5 border-black ">
          <tbody className="">
            <tr className="odd:bg-[#D6EAFF] even:bg-white border  text-center font-semibold">
              <td className="px-4 py-2 border border-black ">Particulars </td>
              <td className="px-4 py-2 border border-black">MBBS in Russia</td>
              <td className="px-4 py-2 border border-black">MBBS in India</td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                Seat Availability
              </td>
              <td className="px-4 py-2 border border-black">Not Limited</td>
              <td className="px-4 py-2 border border-black">Limited</td>
            </tr>

            <tr className="odd:bg-[#D6EAFF] even:bg-white ">
              <td className="px-4 py-2 border border-black">Fees Structure </td>
              <td className="px-4 py-2 border border-black">
                Starting fees: ₹2.5 lacs/year to ₹5.5 lacs/year
              </td>
              <td className="px-4 py-2 border border-black">
                Government College: ₹11,000 - ₹7.5 lacs (Complete Course)
                Private College: ₹20 lacs - ₹80 lacs (Complete Course)
              </td>
            </tr>

            <tr className="odd:bg-[#D6EAFF] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                Course Duration{" "}
              </td>
              <td className="px-4 py-2 border border-black">
                6 Years (5 years + 1-year Internship){" "}
              </td>
              <td className="px-4 py-2 border border-black">
                5.5 Years (4.5 years academics + 1-year Internship)
              </td>
            </tr>

            <tr className="odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black">Donation</td>
              <td className="px-4 py-2 border border-black">
                Donation not required
              </td>
              <td className="px-4 py-2 border border-black">
                Some colleges take donations for admissions
              </td>
            </tr>

            <tr className="odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black">Entrance Exam</td>
              <td className="px-4 py-2 border border-black">
                NEET score required (no separate exam)
              </td>
              <td className="px-4 py-2 border border-black">NEET required</td>
            </tr>

            <tr className="odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Clinical Exposure
              </td>
              <td className="px-4 py-2 border border-black">
                Practical training begins in the 3rd year; exposure in diverse
                healthcare settings
              </td>
              <td className="px-4 py-2 border border-black">
                Broad practical exposure in university-affiliated healthcare
                facilities
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <p className="text-[#1E90FF]  py-2 px-1 text-sm sm:text-base rounded-md font-bold ">
          <span id="Eligibility" className=" text-black font-bold">
            Read More:
          </span>{" "}
          <Link
            href="/blog/mbbs-in-russia-vs-india"
            className="cursor-pointer hover:underline"
          >
            MBBS in Russia vs India
          </Link>
        </p>
      </div>

      {/* course offered */}
      <div className="mt-5">
        <h2 className="font-bold text-[22px] lg:text-[28px] text-[#1E90FF]">
          Courses Offered by Russian Medical Universities
        </h2>
        <p className="mt-1 text-[14px] sm:text-[16px] font-semibold">
          Russian Universities are popular for offering a variety of medical
          courses. Here is a table summarizing the courses and their durations
          offered by the top medical universities in Russia.
        </p>
        <table className="w-full text-[14px] sm:text-[16px] mt-5 text-left rtl:text-right border border-black ">
          <tbody className="">
            <tr className="odd:bg-[#D6EAFF] even:bg-white border  text-center font-semibold">
              <td className="px-4 py-2 border border-black ">Course</td>
              <td className="px-4 py-2 border border-black  ">Duration</td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                MBBS (Bachelor of Medicine, Bachelor of Surgery)
              </td>
              <td className="px-4 py-2 border border-black">6 Years </td>
            </tr>

            <tr className="odd:bg-[#D6EAFF] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                Dentistry (BDS - Bachelor of Dental Surgery)
              </td>
              <td className="px-4 py-2 border border-black">5 Years </td>
            </tr>

            <tr className="odd:bg-[#D6EAFF] even:bg-white ">
              <td className="px-4 py-2 border border-black">Pharmacy </td>
              <td className="px-4 py-2 border border-black">5 Years </td>
            </tr>

            <tr className="odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Nursing (Bachelor's Degree)
              </td>
              <td className="px-4 py-2 border border-black">4 Years </td>
            </tr>

            <tr className="odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Veterinary Medicine
              </td>
              <td className="px-4 py-2 border border-black">5-6 Years </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* medium of teaching */}
      <div className="  lg:mt-7 flex flex-col gap-3 mt-[40px]  p-1">
        <div className="flex flex-col justify-center items-start  gap-2">
          <h2 className="text-[22px] lg:text-[28px] font-bold text-[#1E90FF]">
            Medium of Teaching in Russia
          </h2>
        </div>
        <div className="text-[14px] sm:text-[16px] flex flex-col gap-2 ">
          <div className="text-[14px] sm:text-[16px] flex flex-col gap-2">
            <div className="flex  gap-2">
              <p className="flex gap-2 text-justify text-[14px] sm:text-[16px]">
                The medium of instruction for MBBS courses in Russia is English.
                This helps international students to have a proper grasp of the
                course without any language barriers. However, it is recommended
                for students to learn the Russian language for professional
                convenience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cost of Living in  */}
      <div className="mt-7">
        <h2 className="font-bold text-[22px] lg:text-[28px] text-[#1E90FF]">
          Cost of Living in Russia
        </h2>
        <p className="mt-1 text-[14px] sm:text-[16px] font-semibold">
          Here’s an overview of the cost of living in Russia, broken down into
          various categories:
        </p>
        <table className="w-full text-[14px] sm:text-[16px] mt-5 text-left rtl:text-right border border-black ">
          <tbody className="">
            <tr className="odd:bg-[#D6EAFF] even:bg-white border  ">
              <td className="px-4 py-2 border border-black font-semibold text-center">
                Category
              </td>
              <td className="px-4 py-2 border font-semibold border-black text-center">
                Average Cost
              </td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white ">
              <td className="px-4 py-2 border border-black">Accommodation </td>
              <td className="px-4 py-2 border border-black">
                $120 - $200 per month
              </td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white ">
              <td className="px-4 py-2 border border-black">Utilities </td>
              <td className="px-4 py-2 border border-black">
                $30 - $60 per month{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                Food (Groceries){" "}
              </td>
              <td className="px-4 py-2 border border-black">
                $100 - $129 per month{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#D6EAFF] even:bg-white">
              <td className="px-4 py-2 border border-black">Transportation</td>
              <td className="px-4 py-2 border border-black">
                $10 - $15 per month{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* About */}
      <div className=" w-full mt-5 flex flex-col gap-2 ">
        <h2 className="text-[22px] lg:text-[28px] font-bold  text-[#1E90FF]">
          About Russia
        </h2>

        <div className="text-[14px] sm:text-[16px] flex flex-col gap-2 mt-3 ">
          <div className="text-[14px] sm:text-[16px] flex flex-col gap-2">
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="text-[14px] sm:text-[16px] flex gap-2 text-justify">
                Russia is an enormous country occupying the eastern part of
                Europe and the northern half of Asia. It borders 16
                jurisdictions.
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px]mt-1"
              />
              <p className=" text-[14px] sm:text-[16px] flex gap-2 text-justify">
                Moscow is the capital and the biggest city in the world.
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className=" text-[14px] sm:text-[16px] flex gap-2 text-justify">
                The official language is Russian and it is spoken almost all
                over the country.
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="text-[14px] sm:text-[16px] flex gap-2 text-justify">
                Russia has been an independent country since the USSR was
                dissolved in 1991.
              </p>
            </div>
          </div>
        </div>

        <table className="w-full text-[14px] sm:text-[16px] text-left rtl:text-right mt-5 border border-black">
          <thead>
            <tr className="odd:bg-[#D6EAFF] even:bg-white border  ">
              <th className="px-4 py-2 border border-black text-center">
                Attribute
              </th>
              <th className="px-4 py-2 border border-black text-center">
                Details
              </th>
            </tr>
          </thead>

          <tbody className="">
            <tr className="even:bg-[#D6EAFF] odd:bg-white border  ">
              <td className="px-4 py-2 border border-black font-medium">
                Religion
              </td>
              <td className="px-4 py-2 border border-black">
                Predominantly Eastern Orthodox Christianity, with a significant
                Muslim minority.
              </td>
            </tr>

            <tr className="even:bg-[#D6EAFF] odd:bg-white ">
              <td className="px-4 py-2 border border-black">Currency</td>
              <td className="px-4 py-2 border border-black">
                Russian Ruble (RUB)
              </td>
            </tr>

            <tr className="even:bg-[#D6EAFF] odd:bg-white ">
              <td className="px-4 py-2 border border-black">Language </td>
              <td className="px-4 py-2 border border-black">
                Official language: Russian, with regional languages spoken.
              </td>
            </tr>

            <tr className="even:bg-[#D6EAFF] odd:bg-white ">
              <td className="px-4 py-2 border border-black">Exchange Rate </td>
              <td className="px-4 py-2 border border-black">
                Approx. 1 USD = 100 RUB (varies)
              </td>
            </tr>

            <tr className="even:bg-[#D6EAFF] odd:bg-white">
              <td className="px-4 py-2 border border-black">Population</td>
              <td className="px-4 py-2 border border-black">
                Around 146 million
              </td>
            </tr>

            <tr className="even:bg-[#D6EAFF] odd:bg-white">
              <td className="px-4 py-2 border border-black">Climate</td>
              <td className="px-4 py-2 border border-black">
                Continental climate: cold winters and mild summers in coastal
                regions.
              </td>
            </tr>

            <tr className="odd:bg-[#D6EAFF] odd:bg-white">
              <td className="px-4 py-2 border border-black">
                Time Difference (from India)
              </td>
              <td className="px-4 py-2 border border-black">
                2.5 hours behind India (Moscow time).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Intake;
