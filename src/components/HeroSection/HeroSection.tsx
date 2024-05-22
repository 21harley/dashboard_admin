import React from "react";
import { Navbar } from "../Navbar";
import { imgHero } from "@/src/assets/assets";
import Image from "next/image";


const HeroSection = () => {
  return (
    <div className="container mx-auto my-10 ">
      <Navbar />
      <div className="bg-[#fff5f1] px-6 lg:px-16 py-10  rounded-3xl">
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className="  text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            Unidad Educativa Bolivariana Machiri  <br className="lg:flex hidden"/> San Cristóbal  <br className="lg:flex hidden" />  Venezuela
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              En el desarrollo del futuro y una buena educacion 
            </p>
            <button className="btn btn-sm lg:btn-lg bg-secondary text-white rounded-md p-3 border-none w-36 lg:w-44 hover:bg-orange-400 capitalize">Get Started</button>
          </div>
          <div className="bg-secondary rounded-md  shadow-md w-[600px] h-[400px] relative overflow-hidden">
            <Image src={imgHero} alt="hero" fill style={{objectFit: "cover"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;