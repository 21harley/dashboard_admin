import React from 'react';
import { FaPencilAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className=' my-8'>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
        <div className='flex items-end'>
          <FaPencilAlt className='text-labelBg text-4xl mr-2' />  <a href="#" className="font-bold text-2xl"> E.B MACHIRI</a>
        </div>
        <ul className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
          <li>
            <a href="#" className="hover:text-labelBg">Courses</a>
          </li>
          <li>
            <a href="#" className="hover:text-labelBg">About Us</a>
          </li>
          <li>
            <a href="#" className="hover:text-labelBg">Teacher</a>
          </li>
          <li>
            <a href="#" className="hover:text-labelBg">Pricing</a>
          </li>
          <li>
            <a href="#" className="hover:text-labelBg">Careers</a>
          </li>
          <li>
            <a href="#" className="hover:text-labelBg">Blog</a>
          </li>
        </ul>
        <button className='btn  m-4 text-white bg-labelBg border-none px-4 hover:border hover:border-purple-500 hover:bg-white hover:text-labelBg capitalize rounded-full'>
        Entrar
        </button>
      </div>
    </div>
  );
};

export default Navbar;
