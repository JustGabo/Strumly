import { RenderTypes } from "@/types";
import React, { useContext, createContext, useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const initialState = {
  activePage: "home" as "home" | "shop" | "contact",
  setActivePage: () => {},
};

interface NavbarState {
  activePage: "home" | "shop" | "contact";
  setActivePage: React.Dispatch<React.SetStateAction<"home" | "shop" | "contact">>;
}

export const UsingNavbarContext = ()=>{
  const context = useContext(NavbarContext)
  return context
}

const NavbarContext = createContext<NavbarState>(initialState);

export const NavbarContextProvider = ({ children }: Props) => {
  const [activePage, setActivePage] = useState<"home" | "shop" | "contact">("home");

  useEffect(()=>{
    console.log(activePage)
  },[activePage])

  const value = {
    activePage,
    setActivePage,
  };

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};
