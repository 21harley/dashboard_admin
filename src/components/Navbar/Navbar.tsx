import Image from 'next/image';
import React from 'react';
import { logoIcon } from '@/src/assets/assets';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='mt-8 w-[90%] bg-white rounded-md px-4'>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 ">
        <div className='flex items-end'>
          <div className="flex items-center relative w-full rounded-md overflow-hidden" >
            <Image src={logoIcon} alt="logoIcon" width={50} height={50} />
            <Link href="/" passHref legacyBehavior>
              <a className="font-semibold  text-sm"> E.N. General Mariano Montilla y Díaz</a>
            </Link>
          </div>
          
        </div>
        <ul className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
          <Link href="#mision" passHref legacyBehavior>
            <a className="hover:text-secondary">Mision</a>
          </Link>
          <Link href="#valores" passHref legacyBehavior>
            <a className="hover:text-secondary">Valores</a>
          </Link>
          <Link href="#gente" passHref legacyBehavior>
            <a className="hover:text-secondary">Nuestra gente</a>
          </Link>
          <Link href="#historia" passHref legacyBehavior>
            <a href="#" className="hover:text-secondary">Historia</a>
          </Link>
          <Link href="#estudiantes" passHref legacyBehavior>
            <a href="#" className="hover:text-secondary">Estudiantes</a>
          </Link>
          <Link href="#locacion" passHref legacyBehavior>
            <a  className="hover:text-secondary">Locacion</a>
          </Link>
          <Link href="#redes" passHref legacyBehavior>
            <a className="hover:text-secondary">Redes</a>
          </Link>
        </ul>
        <Link href="/login" legacyBehavior >
            <a className="btn m-4 text-white bg-secondary border-none p-3 hover:border hover:border-orange-900 hover:bg-white hover:text-secondary capitalize rounded-md">
                Entrar
            </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;