import HeroImg from "../../public/homepage/herosection.png";
import HeroSectionMob from "../../public/homepage/hero-section-mob.png";
export const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img src={HeroImg.src} alt="Hero Image" className="w-full h-full object-cover hidden md:block " />
            <img src={HeroSectionMob.src} alt="Hero Image" className="w-full h-full object-cover md:hidden" />
        </div>
    );
};
