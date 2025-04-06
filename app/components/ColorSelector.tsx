import React from "react";
import { Guitar } from "@/types";

interface ColorSelectorProps {
  filteredGuitars: Guitar[];
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setColorTranslate: React.Dispatch<React.SetStateAction<number>>;
  setTranslate: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: Guitar;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  filteredGuitars,
  step,
  setStep,
  setColorTranslate,
  setTranslate,
  activeIndex,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <p className={`${activeIndex.contrast === "white" ? "text-neutral-400" : "text-neutral-700"} uppercase text-[9px] font-bold transition duration-1000`}>
        Select color
      </p>
      <article
        style={{ width: filteredGuitars.length * 25 + "px" }}
        className="flex relative gap-3"
      >
        {filteredGuitars.map((guitar, index) => {
          const boxWidth = filteredGuitars.length * 25;
          const eachColorWidth = boxWidth / filteredGuitars.length;

          return (
            <div
              key={guitar.id}
              style={{ width: eachColorWidth + "px" }}
              className="flex z-50 items-center justify-center"
            >
              <div
                onClick={() => {
                  setStep(index);
                  setColorTranslate(index * 25 + index * 12);
                  setTranslate(index * 100);
                }}
                style={{ backgroundColor: guitar.bgColor }}
                className="w-[25px] h-[25px] cursor-pointer rounded-full"
              ></div>
            </div>
          );
        })}

        <div
          style={{ width: filteredGuitars.length * 25 + "px" }}
          className="flex z-0 absolute"
        >
          <div
            style={{
              transform: `translateX(${step * 25 + step * 12}px)`,
            }}
            className="w-[25px] h-[25px] transform outline outline-1 outline-offset-1 transition-all duration-700 rounded-full"
          ></div>
        </div>
      </article>
    </div>
  );
};

export default ColorSelector; 