"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import guitars from "@/guitars.json";
import { UsingNavbarContext } from "./navbarContext";
import { Guitar } from "@/types";

interface Props {
  children: React.ReactNode;
}

const inialState = {
  translate: 0,
  setTranslate: () => {},
  step: 0,
  setStep: () => {},
  colorTranslate: 0,
  setColorTranslate: () => {},
  activeIndex: {
    image: "",
    bgColor: "",
    model: "",
    price: "",
    contrast: "",
    type: "",
    branch: "",
    id: ""
  },
  setActiveIndex: () => {},
  removingTranslate: () => {},
  addingTranslate: () => {},
  settingFilter: () => {},
  filter: "LES PAUL",
  filteredGuitars : guitars.filter((guitar)=> guitar.type === 'LES PAUL')
};

interface ShopState {
  translate: number;
  setTranslate: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  colorTranslate: number;
  setColorTranslate: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: {
    image: string;
    bgColor: string;
    model: string;
    price: string;
    contrast: string;
    type: string;
    branch: string
    id: string
  };
  setActiveIndex: React.Dispatch<
    React.SetStateAction<{
      image: string;
      bgColor: string;
      model: string;
      price: string;
      contrast: string;
      type: string;
      branch: string
      id: string
    }>
  >;
  removingTranslate: () => void;
  addingTranslate: () => void;
  settingFilter: (filter: string) => void;
  filter: string
  filteredGuitars: Guitar[]

}

export const UsingShopContext = ()=>{
    const context = useContext(ShopContext)
    return context
} 

export const ShopContext = createContext<ShopState>(inialState);

export const ShopContextProvider = ({ children }: Props) => {
  const [filter, setFilter] = useState<string>("LES PAUL");
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
      setColorTranslate((current) => current - 42);
    }
  };

  const addingTranslate = () => {
    if (translate === filteredGuitars.length * 100 - 100) {
      return;
    } else {
      setTranslate((current) => current + 100);
      setStep((prev) => prev + 1);
      setColorTranslate((current) => current + 42);
    }
  };

  const settingFilter = (filter: string) => {
    if (step === 0) {
      setStep(1);
      setTimeout(() => {
        setStep(0);
        setTranslate(0);
        setColorTranslate(0);
        setActiveIndex(filteredGuitars[step]);
        setFilter(filter);
      }, 100);
    } else {
      setStep(0);
      setTranslate(0);
      setColorTranslate(0);
      setActiveIndex(filteredGuitars[step]);
      setFilter(filter);
    }
  };

  useEffect(() => {
    setActiveIndex(filteredGuitars[step]);
  }, [step]);

  useEffect(()=>{
    console.log(filteredGuitars)
  },[])

  const value = {
    translate,
    setTranslate,
    step,
    setStep,
    colorTranslate,
    setColorTranslate,
    activeIndex,
    setActiveIndex,
    removingTranslate,
    addingTranslate,
    settingFilter,
    filter,
    filteredGuitars
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
