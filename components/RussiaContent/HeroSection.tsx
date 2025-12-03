import React from "react";
import Profile from "../../public/muhammad_riyaz.jpg";
import tick from "../../public/greentick.png";
import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-5 ">
        <div className="h-fit  flex flex-col gap-4  ">
          {/* <div className="flex gap-3 w-full h-[3.125rem] items-center px-4 sm:px-6">
                        <div className="w-[3.125rem] h-[3.125rem]">
                            <Image
                                src={Profile}
                                alt="profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="font-semibold  text-[14px] sm:text-[16px] ">
                            <p>
                                <Link
                                    href="https://www.linkedin.com/in/muhammed-riyaz-0a3223139?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#4dc8d8] font-[550] ">
                                        Muhammed Riyaz, <br />
                                    </span>
                                </Link>
                                MBBS Admission Expert
                            </p>
                        </div>
                        <div className=" relative bottom-[10px] right-12">
                            <Image src={tick} alt="profile" className="w-[23px] h-[23px]" />
                        </div>
                    </div> */}
          <div className="text-justify text-[14px] sm:text-[16px] ">
            <p className="">
              <span className="">
                Pursuing an <span className="font-bold ">MBBS in Georgia</span>{" "}
                has become a premier choice for Indian students seeking
                high-quality, affordable medical education abroad. Georgian
                medical universities offer English-medium programs recognized by
                the World Health Organization (WHO), the National Medical
                Commission (NMC) of India, and other major global medical
                councils. With state-of-the-art infrastructure,
              </span>
              <br /> <br />
              <span className="">
                {" "}
                European-standard curricula, and no donation or entrance exam
                barriers, Georgia provides a direct pathway to a successful
                medical career. This comprehensive guide covers everything you
                need to know about studying MBBS in Georgia.
              </span> 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
