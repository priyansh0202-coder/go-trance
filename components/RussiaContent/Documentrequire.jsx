import React from "react";
import rightsign from "../../public/charm_circle-tick.svg";
import Image from "next/image";

const Documentrequire = () => {
  return (
    <div className=" lg:mt-5 flex flex-col gap-5  p-1">
      <div className="flex flex-col justify-center items-start gap-2">
        <h2 className="text-[22px] lg:text-[28px] font-bold text-teal-600">
          Documents Needed to Study MBBS in Georgia
        </h2>
        <p className=" text-[14px] sm:text-[16px] font-semibold">
          Required Documents:
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
              10th & 12th Mark sheets and Certificates
            </p>
          </div>
          <div className="  flex gap-2">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
              NEET Scorecard

            </p>
          </div>
          <div className="  flex  gap-2">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
              Valid Passport (minimum 2 years validity)
            </p>
          </div>
          <div className="  flex gap-2 ">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
              Birth Certificate

            </p>
          </div>
          <div className="  flex  gap-2 ">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">Medical Check-up & HIV Test Reports.</p>
          </div>
          <div className="  flex  gap-2 ">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
              Passport-size photographs.
            </p>
          </div>
          <div className="  flex  gap-2 ">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
              School Leaving Certificate.
            </p>
          </div>
          <div className="  flex  gap-2 ">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">Bank Statement (for proof of funds)</p>
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
