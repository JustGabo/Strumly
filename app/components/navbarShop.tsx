"use client";
import Biography from "@/app/create/components/Biography";
import { AudioLines, Contact, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { UsingNavbarContext } from "@/app/context/navbarContext";
import { UsingShopContext } from "@/app/context/shopContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Guitar } from "@/types";

type RenderTypes = "home" | "shop" | "contact";

const menu = [
  {
    title: "home",
    options: ["Les Paul"],
  },
  {
    title: "shop",
    options: ["LES PAUL", "GIBSON SG", "EPIPHONE RIVERA"],
  },
  {
    title: "contact",
    options: ["Us"],
  },
];

interface Props {
  activeIndex: Guitar;
}

const Navbar = ({ activeIndex }: Props) => {
  const { activePage, setActivePage } = UsingNavbarContext();
  const [totalHeight, setTotalHeight] = useState(0);
  const [activeBorder, setActiveBorder] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Set totalHeight after component mounts (client-side only)
    setTotalHeight(window.innerHeight);
    
    const toggleSticky = () => {
      if (window.scrollY < totalHeight) {
        setActiveBorder(false);
      } else if (window.scrollY >= totalHeight) {
        setActiveBorder(true);
      } else if (window.screenY >= totalHeight * 2) {
        setActiveBorder(false);
      }
    };

    window.addEventListener("scroll", toggleSticky);

    return () => {
      window.removeEventListener("scroll", toggleSticky);
    };
  }, [totalHeight]);

  const isRenderType = (title: string): title is RenderTypes => {
    return ["home", "shop", "contact"].includes(title);
  };

  return (
    <nav
      className={`
          text-white rounded-xl z-50  px-5 py-2 w-full transition-all menu1  duration-1000 flex flex-col gap-5 items-start justify-between`}
    >
      <div
        className={` text-black w-full h-full flex  lg:gap-0 gap-5 items-center  justify-between`}
      >
        <div
          className={`${
            activeIndex.contrast === "black" ? "text-black" : "text-neutral-300"
          } transition-all duration-1000`}
        >
          <AudioLines className="lg:w-6  lg:h-6 w-5 h-5" />
        </div>
        <div className="relative lg:w-1/3 h-10 w-full">
          <ul
            className={`${
              activeIndex.contrast === "black"
                ? "text-neutral-600"
                : "text-neutral-400"
            }  flex text-[9px]   font-semibold w-full  absolute lg:text-[10px] uppercase h-10  group   transition-all duration-300 overflow-hidden px-3 gap-2 z-50  py-3 `}
          >
            {menu.map((option) => {
              return (
                <Link
                  className="flex-1"
                  key={option.title}
                  href={`/${option.title}`}
                >
                  <div className="flex flex-col gap-5   items-center  px-1 z-50">
                    <li
                      onClick={() => {
                        if (isRenderType(option.title)) {
                          setActivePage(option.title);
                        }
                      }}
                      className={`   
                       ${option.title === "shop" && "text-black font-bold"}
                        
                        ${
                          activeIndex.contrast === "white" &&
                          "text-white font-semibold"
                        }
                       ${
                         activeIndex.contrast === "black" &&
                         option.title !== "shop" &&
                         "text-neutral-600 font-semibold"
                       }

                    text-center  lg:text-start   hover:text-neutral-500 cursor-pointer   transition-all px-2  duration-1000`}
                    >
                      {option.title}
                    </li>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>
        <div
          className={`${
            activeIndex.contrast === "black" ? "text-black" : "text-neutral-300"
          } transition-all duration-1000`}
        >
          <User className="w-5 h-5" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
