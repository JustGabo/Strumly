import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Guitar } from "@/types";

interface NavigationControlsProps {
  step: number;
  activeIndex: Guitar;
  filteredGuitars: Guitar[];
  removingTranslate: () => void;
  addingTranslate: () => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  step,
  activeIndex,
  filteredGuitars,
  removingTranslate,
  addingTranslate,
}) => {
  return (
    <div className="flex items-center text-white pb-10 absolute lg:bottom-0 bottom-[30%] left-1/2 right-1/2 gap-12 z-50 justify-center">
      <button
        onClick={removingTranslate}
        className={`${
          step === 0 && "text-neutral-500 cursor-default"
        } lg:text-5xl font-extralight ${
          activeIndex.contrast === "white" ? "text-neutral-300" : "text-black"
        } transition duration-1000`}
      >
        <ChevronLeft />
      </button>
      <p className="lg:text-xs text-sm tracking-wider">
        <span
          className={`${
            activeIndex.contrast === "white" ? "text-white" : "text-black"
          } font-medium duration-1000 transition`}
        >
          0{step + 1}
        </span>
        <span
          className={`${
            activeIndex.contrast === "white"
              ? "text-neutral-400"
              : "text-neutral-700"
          } transition duration-1000`}
        >
          /0{filteredGuitars.length}
        </span>
      </p>
      <button
        onClick={addingTranslate}
        className={`${
          filteredGuitars.length - 1 === step && "text-neutral-500 cursor-default"
        } text-5xl font-extralight ${
          activeIndex.contrast === "white"
            ? "text-neutral-300"
            : "text-neutral-800"
        } transition duration-1000`}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default NavigationControls; 