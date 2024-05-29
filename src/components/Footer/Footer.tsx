import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-6 sm:px-8 lg:px-12 py-8 lg:py-10 rounded-3xl items-center justify-center">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <div id="locacion" className="bg-blue-200 rounded-md p-4 shadow-md">
            <iframe
              width="100%"
              height="280"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Via+principal+machiri%2C+escuela+machiri&t=&z=7&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              title="Google Maps"
            ></iframe>
          </div>
          <p className="text-sm text-center lg:text-left">RQ4F+5JQ, Vla Principal Machiri, San Cristóbal 5001, Táchira, Venezuela</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-3">
          <p className="text-lg font-medium">Directora</p>
          <p className="text-base">Careers</p>
          <p className="text-base">Teachers</p>
          <p className="text-base">Support</p>
          <p className="text-base">Contact</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-3">
          <p className="text-lg font-medium">Desarrollado Por</p>
          <p className="text-base">Courses</p>
          <p className="text-base">Pricing</p>
          <p className="text-base">Blog</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-3">
          <p className="text-lg font-medium">Legal</p>
          <p className="text-base">Terms & Conditions</p>
          <p className="text-base">Privacy policy</p>
        </div>
        <div id="redes" className="flex items-center justify-center lg:justify-start gap-5">
          <BsFacebook className="text-3xl text-gray-500" />
          <BsTwitter className="text-3xl text-gray-500" />
          <BsInstagram className="text-3xl text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Footer;