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
                    <div className="flex gap-3 w-full h-[3.125rem] items-center px-4 sm:px-6">
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
                                    <span className="text-[#1E90FF] font-[550] ">
                                        Muhammed Riyaz, <br />
                                    </span>
                                </Link>
                                MBBS Admission Expert
                            </p>
                        </div>
                        <div className=" relative bottom-[10px] right-12">
                            <Image src={tick} alt="profile" className="w-[23px] h-[23px]" />
                        </div>
                    </div>
                    <div className="text-justify text-[14px] sm:text-[16px] ">
                        <p className="">
                            <span className="">
                                {" "}
                                <span className="font-bold ">MBBS in Russia</span> is a popular option for Indian students because
                                of its affordable cost, accreditation, and high-quality
                                education. The total duration of an MBBS course is around 6
                                years. Indian students have to clear NEET and have at least 50%
                                marks in PCB for 10+2 exams to enter the Russian MBBS colleges.
                            </span>
                            <br /> <br />
                            <span className="">
                                {" "}
                                When considering options for pursuing medical education in
                                Russia, students can trust well-established institutions such as
                                Bashkir State Medical University, Crimea Federal University, Far
                                Eastern Federal University, and many more.
                            </span>
                            <br /> <br />
                            <span className="">
                                {" "}
                                The MBBS degrees in Russia are recognized by WHO, NMC, and other
                                medical councils of the world. The MBBS course fees in Russia
                                for a duration of 6 years range between ₹15 lacs to ₹25 lacs.
                                The medium of instruction in Russian medical universities is
                                English. Indian students opting to study MBBS in Russia must
                                have a valid NEET score.{" "}
                            </span>
                            <br /> <br />
                            <span className="">
                                Deciding to study in Russia is feasible for students who want to
                                get an education at an affordable price and are looking for a
                                better future in the medical field abroad.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Herosection;
