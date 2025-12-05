import React from "react";
// import collegeBgImg from "../../../../public/collegeimage/Group 1707485528.svg";
import mbbsinRussia from "../../public/mbbs-in-russia/banner-image.png"
// import mbbsinrussia from "../../../../public/bannerimg-mobile/mbbs-in-russia.png"
// import collegeImg from "../../../../public/assets/collegeImg.png";
import Image from "next/image";
const Header = () => {
    return (
        <>
            <div className="relative  w-full h-[300px] sm:h-[400px]">
                {/* Bg Image */}
                <div className="absolute h-[400px] w-full">
                    <Image
                        src={mbbsinRussia}
                        alt="mbbs-in-russia"
                        className="w-full object-cover block sm:hidden h-[300px]"
                    />
                    <Image
                        src={mbbsinRussia}
                        alt="mbbs-in-russia"
                        className="w-full h-full object-cover hidden sm:block sm:h-[380px]"
                    />
                    <div className="h-[300px] sm:h-[380px] w-full  absolute top-0 bg-black opacity-60"></div>
                </div>
                <div className="absolute top-24 sm:top-24 text-white left-5 lg:left-[10%] text-sm font-semibold">
                    <p>
                        Home /<span className="text-gray-400"> MBBS in Georgia</span>
                    </p>
                </div>
                {/* Heading */}
                <div className="text-white absolute top-32 sm:top-44 w-[90%] sm:w-[50%] left-5 lg:left-[10%] flex flex-col gap-1">
                    <h1 className="text-4xl sm:text-5xl font-semibold mt-3  w-full">
                        MBBS in Georgia
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Header;
