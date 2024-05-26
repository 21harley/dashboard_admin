import Image from 'next/image';
import React from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { logoIcon } from '@/src/assets/assets';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='my-8 bg-white rounded-md px-4'>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 ">
        <div className='flex items-end'>
          <div className="flex items-center relative w-full rounded-md overflow-hidden" >
            <Image src={logoIcon} alt="logoIcon" width={50} height={50} />
            <a href="#" className="font-semibold  text-xl"> E.B MACHIRI</a>
          </div>
          
        </div>
        <ul className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
          <li>
            <a href="#" className="hover:text-secondary">Mision</a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">Valores</a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">Nuestra gente</a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">Historia</a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">Estudiantes</a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">Locacion</a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">Redes</a>
          </li>
        </ul>
        <Link href="/login" legacyBehavior>
            <a className="btn m-4 text-white bg-secondary border-none p-3 hover:border hover:border-orange-900 hover:bg-white hover:text-secondary capitalize rounded-md">
                Entrar
            </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;