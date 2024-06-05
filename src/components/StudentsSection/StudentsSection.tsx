import { imgStudents } from "@/src/assets/assets";
import Image from "next/image";
import React from "react";

const StudentsSection: React.FC = () => {
  const imageHeight = 260; // Ajusta esta altura según tus necesidades

  return (
    <div className="container mx-auto mt-12 px-4">
      <div>
        <p className="text-white text-base lg:text-xl font-medium uppercase">
          ESTUDIANTES
        </p>
        <p className="text-white text-3xl lg:text-5xl font-medium capitalize mt-3">
          Lo que dicen nuestros estudiantes
        </p>
      </div>
      <div className="flex flex-col lg:flex-row bg-secondary justify-center lg:justify-between items-center gap-6 mt-8 p-8 rounded-md">
        <div className="border-[5px] border-white p-6 rounded-md flex-shrink-0">
          <div className="relative w-60 h-60 lg:w-96 lg:h-96 rounded-md overflow-hidden">
            <Image src={imgStudents} alt="student" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start text-white bg-orange-500 p-6 rounded-md lg:ml-12">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
            SOFIA PEREZ
          </p>
          <div className="flex items-center gap-2">
            <div className="bg-slate-200 rounded-md p-4">
              <p className="text-blue-900 font-bold">
                6° Grado
              </p>
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-2xl">
            No hay forma de que hubiera logrado el mismo progreso aprendiendo sin la ayuda y el trabajo de los profes.
            La mejor parte es que ahora voy muy bien preparada para el siguiente paso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentsSection;
