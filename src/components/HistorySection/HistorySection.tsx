import React from "react";
import { fachada, logoIconMd } from "@/src/assets/assets";
import Image from "next/image";

const HistorySection = () => {
  return (
    <div className="bg-[#fff5f1] px-4 lg:px-8 py-8 lg:py-12 rounded-md container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
        <div className="flex flex-col gap-5 w-full lg:w-[50%] lg:mr-5">
          <h2 className="text-lg lg:text-xl font-semibold mb-4">Resumen de la Historia de La Escuela Nacional General Mariano Montilla y Díaz</h2>
          
          <p className="text-sm lg:text-base mb-4">
          La Escuela Nacional General Mariano Montilla y Díaz, arraigada en la aldea del mismo nombre junto al río Machirí al norte del Municipio San Cristóbal, tiene una historia marcada por la perseverancia y el compromiso. Desde sus modestos inicios en 1935, cuando las clases se impartían en una caballeriza, hasta su establecimiento definitivo en 1940 en una casa adquirida por el consejo municipal, ha sido un símbolo de educación en la región. Con una matrícula inicial de 40 estudiantes, quienes también participaban en el cultivo de un huerto para sufragar gastos, la escuela ha experimentado un notable crecimiento, aplicando medidas para garantizar la asistencia regular y convirtiéndose en un pilar fundamental para la comunidad.
          </p>
          
          <p className="text-sm lg:text-base mb-4">
          A lo largo de los años, La Escuela Nacional General Mariano Montilla y Díaz ha demostrado su compromiso con el desarrollo educativo y social de su entorno. Desde su mudanza a un trapiche en 1937-1938 hasta su ubicación actual, ha sido testigo de un crecimiento constante. Más allá de enseñar materias básicas, ha cultivado valores comunitarios y responsabilidad, aplicando sanciones a estudiantes ausentes para fomentar la asistencia regular. Su evolución refleja no solo el progreso educativo de la región, sino también el firme compromiso de la escuela con el bienestar de sus estudiantes y la comunidad en general.
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
          <p className="text-sm lg:text-base mb-4">
          La Escuela Nacional General Mariano Montilla y Díaz, junto con otras 15 escuelas de aldeas y caseríos, formó parte del Núcleo Escolar Rural 107 establecido en 1962. A lo largo del tiempo, algunas de estas escuelas se independizaron y gestionaron su propio personal directivo. En el año 2000, la escuela adoptó el modelo bolivariano, ampliando su horario y lanzando el Programa Alimentario Escolar. Se realizaron mejoras en la infraestructura, incluyendo la construcción de aulas, laboratorios y baños, así como la implementación del Programa de Alimentación Escolar Bolivariano.
          </p>
          
          <p className="text-sm lg:text-base mb-4">
          Además, con el respaldo del MPPE, se introdujeron innovaciones tecnológicas como el Plan Canaima en 2010, proporcionando mini laptops a los estudiantes de primer y segundo grado para fortalecer sus habilidades analíticas y creativas. En el año escolar 2010-2011, se creó el programa de Atención Educativa No Convencional, dirigido a embarazadas, familias y niños de 0 a 6 años que no asistían a instituciones educativas. En 2008, se diseñó el logotipo de la institución, un hito en su identidad visual, reflejando su notable evolución desde sus modestos inicios hasta adaptarse a nuevas tecnologías y programas educativos para mejorar la calidad de la educación y el bienestar de su comunidad estudiantil.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default HistorySection;


/*



*/