import React from "react";
import rightsign from "../../public/charm_circle-tick.svg";
import Image from "next/image";

const Documentrequire = () => {
  return (
    <div className=" lg:mt-5 flex flex-col gap-5  p-1">
      <div className="flex flex-col justify-center items-start gap-2">
        <h2 className="text-[22px] lg:text-[28px] font-bold text-[#1E90FF]">
          Documents Needed to Study MBBS in Russia
        </h2>
        <p className=" text-[14px] sm:text-[16px] font-semibold">
          Candidates need to submit the following documents for admission to
          MBBS institutes in Russia:
        </p>
      </div>
      <div className="text-[14px] sm:text-[16px] flex flex-col gap-2 ">
        <div className="text-[14px] sm:text-[16px] flex flex-col gap-2">
          <div className="  flex  gap-2">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
              A passport must be with at least 18 months of validity from the
              date of application.
            </p>
          </div>
          <div className="  flex gap-2">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
              Mark sheets and certificates of class X and class XII
            </p>
          </div>
          <div className="  flex  gap-2">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
              Photocopy of the NEET scorecard.
            </p>
          </div>
          <div className="  flex gap-2 ">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
              Eight to ten photographs that are the size of a passport.
            </p>
          </div>
          <div className="  flex  gap-2 ">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">A health certificate</p>
          </div>
          <div className="  flex  gap-2 ">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
              Original Birth Certificate
            </p>
          </div>
          <div className="  flex  gap-2 ">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
              An admission letter from the university.
            </p>
          </div>
          <div className="  flex  gap-2 ">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">Download the Visa</p>
          </div>
          <div className="  flex  gap-2 ">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
              Receipt of payment on the first-year tuition fee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentrequire;
