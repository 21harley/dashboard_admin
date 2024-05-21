import React from "react";
import Image from "next/image";
import { iconV1, iconV2, iconV3 } from "@/src/assets/assets";

interface CardOurValuesProps {
    iconSrc: string;
    title: string;
    paragraph: string;
  }
  
const CardOurValues: React.FC<CardOurValuesProps> = ({ iconSrc, title, paragraph }) => {
return (
    <div className="flex flex-col gap-5 items-center justify-center">
    <Image src={iconSrc} alt="v" />
    {title && <h3 className="text-2xl font-semibold flex justify-center text-center">{title}</h3>}
    {paragraph && <p className="text-gray-500 text-center">{paragraph}</p>}
    </div>
);
};

const ValuesSection = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        ESTUDIA CON NOSOTROS
      </p>
      <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
        Nuestros Valores
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <CardOurValues
          iconSrc={iconV1}
          title="Valores Tricolores"
          paragraph="En la escuela primaria Machiri, promovemos los valores tricolores de respeto, responsabilidad y compromiso. ¡Únete a nosotros y crece en un ambiente de integridad y excelencia académica!"
        />
        <CardOurValues
          iconSrc={iconV2}
          title="Desarrollo de Familias"
          paragraph="En la escuela primaria Machiri, fomentamos el desarrollo integral de las familias, creando un entorno de apoyo y colaboración mutua. ¡Forma parte de nuestra comunidad y fortalece los lazos familiares!"
        />
        <CardOurValues
          iconSrc={iconV3}
          title="Formación de Buenos Ciudadanos"
          paragraph="En la escuela primaria Machiri, trabajamos en la formación de buenos ciudadanos comprometidos con la sociedad y el bienestar común. ¡Desarrolla tus habilidades cívicas y contribuye positivamente a tu comunidad!"
        />
      </div>
    </div>
  );
};

export default ValuesSection;
