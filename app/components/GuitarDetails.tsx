import React from "react";
import { Guitar } from "@/types";

interface GuitarDetailsProps {
    activeIndex: Guitar;
    filteredGuitars: Guitar[];
    step: number;
}

const GuitarDetails: React.FC<GuitarDetailsProps> = ({ activeIndex, filteredGuitars, step }) => {
    return (
        <section className="flex flex-col gap-5 lg:w-[40%] w-full">
            <div className="flex flex-col gap-2">
                <p className={`${activeIndex.contrast === "white" ? "text-neutral-400" : "text-neutral-700"} transition duration-1000 text-[9px] font-bold uppercase`}>
                    Model
                </p>
                <div className="bg-red- h-5 flex flex-col overflow-hidden">
                    <div className="transition-all  duration-700 " style={{transform: `translateY(-${step * 20}px)`}}>
                        {filteredGuitars.map((guitar, id) => (
                            <p key={id} className={`${activeIndex.contrast === "white" ? "text-white" : "text-black"} ${step === id ? "opacity-100" : "opacity-0"} font-bold transition duration-200 h-[20px] text-sm `}>
                                {guitar.branch}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className={`${activeIndex.contrast === "white" ? "text-neutral-400" : "text-neutral-700"} text-[9px] font-bold uppercase transition duration-1000`}>
                    Price
                </p>
                <div className="bg-red- h-5 flex flex-col overflow-hidden">
                    <div className="transition-all  duration-700 " style={{transform: `translateY(-${step * 20}px)`}}>
                        {filteredGuitars.map((guitar, id) => (
                            <p key={id} className={`${activeIndex.contrast === "white" ? "text-white" : "text-black"} ${step === id ? "opacity-100" : "opacity-0"} font-bold transition duration-200 h-[20px] text-sm `}>
                                ${guitar.price}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuitarDetails; 