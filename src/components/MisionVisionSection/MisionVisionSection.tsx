import React from "react";
import Image, { StaticImageData } from "next/image";
import {  iconV2, iconV3, imgMision, imgVision } from "@/src/assets/assets";

interface CardOurValuesProps {
  iconSrc: StaticImageData;
  title: string;
  paragraph: string;
}

const CardOurValues: React.FC<CardOurValuesProps> = ({ iconSrc, title, paragraph }) => {
  return (
    <div className="flex flex-col gap-5 text-white bg-secondary rounded-md p-4 shadow-md items-center justify-start">
      {title && <h3 className="text-2xl font-extrabold flex justify-center text-center">{title}</h3>}
      <Image src={iconSrc} alt="v" width={320} height={200} />
      {paragraph && <p className="text-white text-center">{paragraph}</p>}
    </div>
  );
};

const MisionVisionSection = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-white text-center">
        Mision y Vision
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 lg:gap-16 py-20">

        <CardOurValues
          iconSrc={imgMision}
          title="Mision"
          paragraph=" La Escuela Bolivariana Machirí forma de manera
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
          title="Vision"
          paragraph="La Escuela Bolivariana Machirí es una institución educativa excelente
           que contribuye a la formación del nuevo republicano, fundamentada en valores como
            respeto, amor, responsabilidad, solidaridad y justicia. Garantiza una educación
             y formación integral democrática y participativa donde se involucran todos sus
              actores con el fin de mejorar la calidad de vida a los estudiantes y comunidad 
              a través de la enseñanza y practica del pensamiento Bolivariano"
        />
      </div>
    </div>
  );
};

export default MisionVisionSection;


/**
 * 
 *





VISION



 * 
 */