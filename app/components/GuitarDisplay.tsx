import React from "react";
import { Guitar } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface GuitarDisplayProps {
  filteredGuitars: Guitar[];
  translate: number;
  filter: string;
}

const GuitarDisplay: React.FC<GuitarDisplayProps> = ({
  filteredGuitars,
  translate,
  filter,
}) => {
  return (
    <section
      style={{
        transform: `translateX(-${translate}vw)`,
        width: filteredGuitars.length * 100 + "vw",
      }}
      className="flex absolute z-40 h-screen transform transition-transform duration-700"
    >
      {filteredGuitars.map((guitar) => (
        <article
          key={guitar.id}
          className="w-[100vw] flex justify-center relative lg:items-center lg:top-0 top-[10%] h-full"
        >
          <Link
            className={`${filter === "LES PAUL" && "w-[90%] h-[60%]"} ${
              filter === "GIBSON SG" && "w-[55%] h-[45%]"
            } ${
              filter === "EPIPHONE RIVERA" && "w-[65%] h-[55%]"
            } lg:w-[35%] lg:h-[75%]`}
            href={`/details/${guitar.id}`}
          >
            <div
              className="relative w-full h-full cursor-pointer z-50 lg:mr-32 mr-32"
            >
              <Image
                src={guitar.image}
                alt="Guitar"
                className="transform z-[99999] -rotate-45 object-contain"
                fill
              />
              <div className="w-[40%] absolute bottom-20 lg:right-[10%] z-10 right-0 h-2 lg:blur-xl blur-xl bg-black/80" />
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
};

export default GuitarDisplay; 