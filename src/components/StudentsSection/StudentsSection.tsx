import { iconV1, imgStudent2 } from "@/src/assets/assets";
import Image from "next/image";
import React from "react";

const StudentsSection: React.FC = () => {
  const imageHeight = 260; // Ajusta esta altura según tus necesidades

  return (
    <div className="container mx-auto py-10">
      <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
      TOP STUDYING
      </p>
      <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize mt-3">
        Lo que dicen nuestros estudiantes
      </p>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 py-10 lg:py-20">
        <div className="relative w-60 h-60 lg:w-96 lg:h-96 rounded-full overflow-hidden">
          <Image src={imgStudent2} alt="student" />
        </div>
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Martin Watson</p>
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6">
              <Image src={iconV1} alt="icon" />
            </div>
            <p className="text-gray-500">
              Profesor de inglés
            </p>
          </div>
          <p className="text-base w-[600px] sm:text-lg md:text-2xl lg:text-3xl">            
              No hay forma de que hubiera logrado el mismo
              progreso aprendiendo español sin usar Lingua.
              La mejor parte es que ahora aprender español se
              ha convertido en uno de mis pasatiempos favoritos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentsSection;
