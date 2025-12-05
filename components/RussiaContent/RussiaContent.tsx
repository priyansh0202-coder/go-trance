import HeroSection from "./HeroSection";
import Highlight from "./Highlight";
import FeeStructure from "./Feestructure";
import AdmissionProcess from "./Admissionprocess";
import Documentrequire from "./Documentrequire";
import Syllabus from "./Syllabus";
import Universitysection from "./Universitysection";
import Intake from "./Intake";
import MbbsRussia from "./MbbsRussia";
import Career from "./Career";

const RussiaContent = () => {
    return (
        <div className="w-[95%] mx-auto lg:w-[85%]">
        <HeroSection />
        <Highlight />
        <Universitysection />
        <FeeStructure />
        <AdmissionProcess />
            <Documentrequire />
            <Career />
        {/* <Syllabus /> */}
        {/* <Intake /> */}
        <MbbsRussia />
        </div>
    );
};

export default RussiaContent;