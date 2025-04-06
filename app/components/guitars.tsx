"use client";
import {
  AreaChartIcon,
  ArrowRight,
  AudioLines,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import { UsingShopContext } from "@/app/context/shopContext";
import NavbarShop from "./navbarShop";
import Link from "next/link";
import guitars from "@/guitars.json";
import GuitarDetails from "./GuitarDetails";
import ColorSelector from "./ColorSelector";
import GuitarTitle from "./GuitarTitle";
import GuitarDisplay from "./GuitarDisplay";
import NavigationControls from "./NavigationControls";
// import FilterOption from "./FilterOption";

interface Step {
  image: string;
  color: string;
}

const menu = [
  {
    title: "Biography",
    options: ["Les Paul"],
  },
  {
    title: "Shop",
    options: ["LES PAUL", "GIBSON SG", "EPIPHONE RIVERA"],
  },
  {
    title: "Contact",
    options: ["Us"],
  },
];

const about: Record<string, string> = {
  "LES PAUL":
    "Equipped with humbucker pickups, they offer a warm, rich, and sustained sound, ideal for a variety of musical genres such as rock, blues, and jazz.",
  "GIBSON SG":
    "Gibson SG guitars combine an ergonomic and lightweight design with robust construction and a powerful sound. Their versatility, comfort, and aesthetic appeal make them a popular choice among guitarists worldwide.",
  "EPIPHONE RIVERA":
    "The Epiphone Riviera combines a classic design with modern features, offering a versatile and attractive guitar both in terms of tone and aesthetics.",
};

const Guitars = () => {
  const [filter, setFilter] = useState<string>("EPIPHONE RIVERA");
  const filteredGuitars = guitars.filter(
    (guitar) => guitar.type === filter.toUpperCase()
  );
  const [translate, setTranslate] = useState(0);
  const [step, setStep] = useState<number>(0);
  const [colorTranslate, setColorTranslate] = useState(0);
  const [activeIndex, setActiveIndex] = useState(filteredGuitars[step]);

  const removingTranslate = () => {
    if (translate === 0) {
      return;
    } else {
      setTranslate((current) => current - 100);
      setStep((prev) => prev - 1);
      setColorTranslate((current) => current - 37);
    }
  };

  const addingTranslate = () => {
    if (translate === filteredGuitars.length * 100 - 100) {
      return;
    } else {
      setTranslate((current) => current + 100);
      setStep((prev) => prev + 1);
      setColorTranslate((current) => current + 37);
    }
  };

  const settingFilter = (newFilter: string) => {
    if (step === 0) {
      setStep(1);
      setTimeout(() => {
        setStep(0);
        setTranslate(0);
        setColorTranslate(0);
        setActiveIndex(filteredGuitars[step]);
        setFilter(newFilter);
      }, 100);
    } else {
      setStep(0);
      setTranslate(0);
      setColorTranslate(0);
      setActiveIndex(filteredGuitars[step]);
      setFilter(newFilter);
    }
  };

  useEffect(() => {
    setActiveIndex(filteredGuitars[step]);
  }, [step]);

  // const {
  //   activeIndex,
  //   settingFilter,
  //   filter,
  //   addingTranslate,
  //   colorTranslate,
  //   removingTranslate,
  //   setActiveIndex,
  //   setColorTranslate,
  //   setStep,
  //   setTranslate,
  //   step,
  //   translate,
  //   filteredGuitars
  // } = UsingShopContext();

  // const filteredGuitars = guitars.filter(
  //   (guitar) => guitar.type === filter.toUpperCase()
  // )

  return (
    <main
      style={{ backgroundColor: `${activeIndex.bgColor}` }}
      className="relative overflow-hidden h-screen flex flex-col transition duration-1000 gap-10"
    >
      <section className="h-[100dvh] flex flex-col justify-between p-7 lg:px-10 lg:py-7">
        <div className="opacity-0">
          <NavbarShop activeIndex={activeIndex} />

        </div>

        <div className="flex flex-col gap-5">
          {/* Filter options - Commented out but kept as per requirement */}
          {/* <FilterOption 
            options={menu[1].options}
            activeFilter={filter}
            setFilter={settingFilter}
          /> */}

          {/* Guitar details section */}
          <GuitarDetails activeIndex={activeIndex} filteredGuitars={filteredGuitars} step={step} />

          {/* Color selector section */}
          <ColorSelector
            filteredGuitars={filteredGuitars}
            step={step}
            setStep={setStep}
            setColorTranslate={setColorTranslate}
            setTranslate={setTranslate}
            activeIndex={activeIndex}
          />
        </div>
      </section>

      {/* Guitar title with overlapping effect */}
      <GuitarTitle activeIndex={activeIndex} filter={filter} />

      {/* Guitar display section */}
      <GuitarDisplay
        filteredGuitars={filteredGuitars}
        translate={translate}
        filter={filter}
      />

      {/* Navigation controls */}
      <NavigationControls
        step={step}
        activeIndex={activeIndex}
        filteredGuitars={filteredGuitars}
        removingTranslate={removingTranslate}
        addingTranslate={addingTranslate}
      />
    </main>
  );
};

export default Guitars;
