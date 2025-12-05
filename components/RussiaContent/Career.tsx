import React from "react";
import rightsign from "../../public/charm_circle-tick.svg";
import Image from "next/image";

const Career = () => {
  return (
    <div className=" lg:mt-5 flex flex-col gap-5  p-1">
      <div className="flex flex-col justify-center items-start gap-2">
        <h2 className="text-[22px] lg:text-[28px] font-bold text-teal-600">
                  Career Opportunities After MBBS in Georgia
        </h2>
        <p className=" text-[14px] sm:text-[16px] font-semibold">
                  An MBBS degree from Georgia opens multiple global career paths:
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
                          Practice in India: Clear the NEXT (National Exit Test) to practice or pursue PG in India.
            </p>
          </div>
          <div className="  flex gap-2">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
                          Post-Graduation (PG) in USA/UK: Clear USMLE or PLAB exams to pursue residency in the USA or UK.

            </p>
          </div>
          <div className="  flex  gap-2">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
                          Post-Graduation in Georgia/EU: Options to continue specialization (MD/MS) in Georgia or other European countries.
            </p>
          </div>
          <div className="  flex gap-2 ">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

            <p className="flex gap-2 text-justify">
                          Practice in Other Countries: Graduates can appear for licensing exams in countries like Canada, Australia, or Germany.


            </p>
          </div>
          <div className="  flex  gap-2 ">
            <Image
              src={rightsign}
              alt="vector"
              className="h-[18px] w-[18px] mt-1"
            />

                      <p className="flex gap-2 text-justify">Clinical Research & Healthcare Management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
