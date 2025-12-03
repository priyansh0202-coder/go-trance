import React from "react";
import Universitycard from "./Universitycard";

const Universitysection = () => {
  return (
    <>
      <div className="">
        <div>
          <h2 className=" text-[22px] lg:text-[28px] font-bold mt-5 text-teal-600">
            Top Medical Universities in Russia (NMC Approved)
          </h2>
          <p className="mt-2 font-semibold text-[14px] sm:text-[16px]">
            Here is a list of popular medical Universities in Russia:
          </p>

          <Universitycard />
        </div>
      </div>
    </>
  );
};

export default Universitysection;
