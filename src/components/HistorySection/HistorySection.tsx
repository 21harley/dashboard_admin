import React from "react";
import { fachada, logoIconMd } from "@/src/assets/assets";
import Image from "next/image";

const HistorySection = () => {
  return (
    <div className="bg-[#fff5f1] px-4 lg:px-8 py-8 lg:py-12 rounded-md container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
        <div className="flex flex-col gap-5 w-full lg:w-[50%] lg:mr-5">
          <h2 className="text-lg lg:text-xl font-semibold mb-4">HISTORIA LOCAL</h2>
          <p className="text-sm lg:text-base mb-4">
            En cuanto a la historia local, primeramente, se explicará en forma descendente empezando con la reseña histórica de nuestro Municipio, luego de nuestra comunidad y por último nuestra escuela.
          </p>
          <p className="text-sm lg:text-base mb-4">
            Así mismo, es necesario explicar un poco la fundación de la ciudad de San Cristóbal; fue fundada por el capitán español Juan Maldonado y Ordóñez de Villaquirán junto con 35 soldados el 31 de marzo de 1561 en las riberas del río Torbes. La recién fundada villa recibía constantes ataques de los pobladores indígenas de la región, hasta 1578, año en el cual el capitán Rodrigo de Paradas, quien para entonces era alcalde de la ciudad, detuvo dichos ataques luego de enfrentar a las poblaciones hostiles, recibiendo por ello el reconocimiento de Felipe II. San Cristóbal fue nombrada capital del mismo.
          </p>
          <p className="text-sm lg:text-base mb-4">
            El 18 de mayo de 1875 la ciudad sufrió graves daños a causa del Terremoto de Cúcuta. Durante los gobiernos de Cipriano Castro y Juan Vicente Gómez
          </p>
        </div>
        <div className="bg-secondary rounded-md shadow-md  relative overflow-hidden">
          <Image src={logoIconMd} alt="logomd" width={420} height={300} />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-5 mt-5 lg:mt-10">
        <div className="bg-secondary rounded-md shadow-md  relative overflow-hidden">
          <Image src={fachada} alt="fachada" width={420} height={300} />
        </div>
        <div className="flex flex-col gap-5 w-full lg:w-[50%] lg:ml-5">
          <h2 className="text-lg lg:text-xl font-semibold mb-4">Datos y origen del Municipio</h2>
          <p className="text-sm lg:text-base mb-4">
            Su fundación data del 31 de marzo del año 1561 cuando el Capitán español Juan Maldonado acompañado de treinta y cinco hombres, tomó el Valle de Santiago y lo fundó con el nombre de San Cristóbal.
          </p>
          <p className="text-sm lg:text-base mb-4">
            El 6 de agosto de 1921 se crea el distrito San Cristóbal que cubría los municipios de Torbes, San Cristóbal, Cárdenas, Junín, Bolívar, Independencia, Libertad y Rafael Urdaneta. En 1930 se formó el distrito Cárdenas, tras la separación del Municipio San Cristóbal. En 1940 una nueva separación da forma al distrito Capacho y en 1941, al Distrito Junín. Cuando el gobierno venezolano creó la figura de los municipios en 1989, se creó el Municipio San Cristóbal, el cual desde 1996 está conformado por 5 Parroquias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
