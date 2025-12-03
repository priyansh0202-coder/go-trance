import HeroSection from "./HeroSection";
import Highlight from "./Highlight";
import FeeStructure from "./Feestructure";
import AdmissionProcess from "./Admissionprocess";
import Documentrequire from "./Documentrequire";
import Syllabus from "./Syllabus";
import Universitysection from "./Universitysection";
import Intake from "./Intake";
import MbbsRussia from "./MbbsRussia";

const RussiaContent = () => {
    return (
        <div className="w-[95%] mx-auto lg:w-[85%]">
        <HeroSection />
        <Highlight />
        <FeeStructure />
        <AdmissionProcess />
        <Documentrequire />
        <Syllabus />
        <Universitysection />
        <Intake />
        {/* <MbbsRussia /> */}
        </div>
    );
};

export default RussiaContent;