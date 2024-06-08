import React from "react";
import Image, { StaticImageData } from "next/image";
import { imgMision, imgVision } from "@/src/assets/assets";

interface CardOurValuesProps {
  iconSrc: StaticImageData;
  title: string;
  paragraph: string;
}

const CardOurValues: React.FC<CardOurValuesProps> = ({ iconSrc, title, paragraph }) => {
  return (
    <div className="flex flex-col w-full max-w-lg gap-5 h-full text-white border-[2px] border-white bg-secondary rounded-md p-4 shadow-md items-center justify-start">
      {title && <h3 className="text-2xl lg:text-4xl font-extrabold text-center bg-orange-500 w-full rounded-md">{title}</h3>}
      <Image src={iconSrc} alt={title} width={420} height={300} className="rounded-md" />
      <div className="flex-grow flex justify-start  bg-orange-500   h-full rounded-md p-4">
        {paragraph && <p className="text-white font-medium text-start">{paragraph}</p>}
      </div>
    </div>
  );
};

const MisionVisionSection = () => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-8 justify-center p-8 ">
      <div>
        <p className="text-3xl lg:text-5xl font-semibold text-white text-center mt-3">
          Misión y Visión
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16">
        <CardOurValues
          iconSrc={imgMision}
          title="Misión"
          paragraph="La Escuela Nacional General Mariano Montilla y Díaz forma de manera
          integral estudiantes de alta calidad académica, ciudadanos 
          críticos, creativos, participativos, reflexivos, investigadores,
          útiles en su entorno, que promueven valores de justicia y equidad,
          solidaridad, compañerismo y responsabilidad, además; organiza, planifica y 
          desarrolla la práctica pedagógica abierta, reflexiva y constructiva, tomando
          en cuenta cada uno de los espacios de aprendizaje de la nueva escuela. Promueve 
          la participación e integración de la familia, escuela y comunidad (Triada) autores
          del acto educativo en lo social y cultural 
          garantizando el desarrollo intelectual y creativo como eje de crecimiento personal"
        />
        <CardOurValues
          iconSrc={imgVision}
          title="Visión"
          paragraph="La Escuela Nacional General Mariano Montilla y Díaz es una institución educativa excelente
          que contribuye a la formación del nuevo republicano, fundamentada en valores como
          respeto, amor, responsabilidad, solidaridad y justicia. Garantiza una educación
          y formación integral democrática y participativa donde se involucran todos sus
          actores con el fin de mejorar la calidad de vida a los estudiantes y comunidad 
          a través de la enseñanza y práctica del pensamiento Bolivariano"
        />
      </div>
    </div>
  );
};

export default MisionVisionSection;
