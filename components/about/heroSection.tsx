import HeroImg from "../../public/about/hero-section.png";
import HeroSectionMob from "../../public/about/hero-mob.png";

export const HeroSection = () => {
    return (
        <div className="relative flex flex-col items-center justify-center bg-gray-100">
            {/* Desktop Image */}
            <img
                src={HeroImg.src}
                alt="Hero Image"
                className="w-full h-full object-cover hidden md:block"
            />

            {/* Mobile Image */}
            <img
                src={HeroSectionMob.src}
                alt="Hero Image"
                className="w-full h-full object-cover md:hidden"
            />

            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-xl md:text-3xl font-bold">
                    About
                </h1>
            </div>
        </div>
    );
};
