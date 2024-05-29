import React from "react";
import { imgHero } from "@/src/assets/assets";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="container mx-auto mt-10 mb-36 px-4">
      <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
        <div className="flex flex-col items-center lg:flex-row justify-center lg:justify-between gap-5">
          <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-10">
            <p className="text-center md:text-start text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium">
              Escuela Nacional General Mariano Montilla y Díaz<br className="lg:flex hidden" />
              San Cristóbal<br className="lg:flex hidden" />
              Venezuela
            </p>
            <p className="text-sm text-center md:text-start sm:text-base lg:text-lg text-gray-500">
              En el desarrollo del futuro y una buena educación
            </p>
            <Link href="/#gente" legacyBehavior>
              <a className="btn flex justify-center btn-sm lg:btn-lg bg-secondary text-white rounded-md p-3 border-none w-36 lg:w-44 hover:bg-orange-400 capitalize">
                Nuestra Gente
              </a>
            </Link>
          </div>
          <div className="w-full max-w-lg h-64 sm:h-80 md:h-96 lg:h-[400px] relative overflow-hidden bg-secondary rounded-md shadow-md">
            <Image src={imgHero} alt="hero" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

