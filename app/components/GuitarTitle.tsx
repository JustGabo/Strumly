import React from "react";
import { Guitar } from "@/types";

interface GuitarTitleProps {
  activeIndex: Guitar;
  filter: string;
}

const GuitarTitle: React.FC<GuitarTitleProps> = ({ activeIndex, filter }) => {
  return (
    <div className="absolute flex flex-col items-center font-black lg:text-[10rem] z-0 md:text-xl text-[4rem] text-white uppercase lg:justify-center w-full h-full">
      <div
        className="relative cursor-pointer z-50 flex-col select-none lg:top-0 top-[20%] lg:h-[50dvh] h-[40dvh] flex items-center justify-center"
      >
        <h1 className="z-50">
          <span
            className={`${
              activeIndex.contrast === "white"
                ? "text-white"
                : "text-[#050505]"
            } transition-all duration-1000 text-[13dvw]`}
          >
            {filter === "LES PAUL" && "Les"}
            {filter === "GIBSON SG" && "Gibson"}
            {filter === "EPIPHONE RIVERA" && "Epiphone"}
          </span>
          <span
            style={{ color: activeIndex.bgColor }}
            className={`${
              activeIndex.contrast === "white" ? "base-white" : "base-black"
            } transition-all w-full text-[13dvw] duration-1000`}
          >
            {filter === "LES PAUL" && "paul"}
            {filter === "GIBSON SG" && "sg"}
          </span>
        </h1>

        <p className="z-40 absolute text-[13dvw] lg:-top-[5%] leading-none top-[125px]">
          <span className="opacity-0">
            {filter === "LES PAUL" && "Les"}
            {filter === "GIBSON SG" && "Gibson"}
          </span>
          <span
            style={{ color: activeIndex.bgColor }}
            className={`${
              activeIndex.contrast === "white"
                ? "base-white"
                : "base-black"
            } ${
              filter === "EPIPHONE RIVERA" && "hidden"
            } transition-all w-full duration-1000`}
          >
            {filter === "LES PAUL" && "paul"}
            {filter === "GIBSON SG" && "sg"}
          </span>
        </p>
        <p className="z-30 absolute lg:top-[4%] text-[13dvw] leading-none top-[110px]">
          <span className="opacity-0">
            {filter === "LES PAUL" && "Les"}
            {filter === "GIBSON SG" && "Gibson"}
          </span>
          <span
            style={{ color: activeIndex.bgColor }}
            className={`${
              activeIndex.contrast === "white"
                ? "base-white"
                : "base-black"
            } ${
              filter === "EPIPHONE RIVERA" && "hidden"
            } transition-all w-full duration-1000`}
          >
            {filter === "LES PAUL" && "paul"}
            {filter === "GIBSON SG" && "sg"}
          </span>
        </p>
        <p className="z-20 absolute lg:top-[13%] text-[13dvw] leading-none top-[100px]">
          <span className="opacity-0">
            {filter === "LES PAUL" && "Les"}
            {filter === "GIBSON SG" && "Gibson"}
          </span>
          <span
            style={{ color: activeIndex.bgColor }}
            className={`${
              activeIndex.contrast === "white"
                ? "base-white"
                : "base-black"
            } ${
              filter === "EPIPHONE RIVERA" && "hidden"
            } transition-all w-full duration-1000`}
          >
            {filter === "LES PAUL" && "paul"}
            {filter === "GIBSON SG" && "sg"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default GuitarTitle; 