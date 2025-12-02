import React from "react";
import Form from "./Form";
import RussiaContent from "../RussiaContent/RussiaContent";

const Fullpage = () => {
    return (
        <div className="w-[95%] lg:w-[85%] mx-auto flex gap-20 relative pb-6">
            <RussiaContent />
            <Form />
        </div>
    );
};

export default Fullpage;
