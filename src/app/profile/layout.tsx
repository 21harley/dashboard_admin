"use client"
import React, { ReactNode } from "react";


import { RxAvatar } from 'react-icons/rx';
import { User } from "@/src/types/types";
import { NavigationCard } from "@/src/components";
import { AuthComponent } from "@/src/components/AuthComponent";
import useUserStore from "@/src/store/store";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const user: User | null = useUserStore((state) => state.user);

  const getRole = (id_rol: number) => {
    switch (id_rol) {
      case 1:
        return "Representante";
      case 2:
        return "Estudiante";
      case 3:
        return "Profesor";
      default:
        return "Desconocido";
    }
  };

  let rightColumnClasses = "mx-4 md:mx-0 md:w-full border border-gray-300 p-4 rounded-md";

  return (
    <AuthComponent>
    <div className="md:flex mt-4 max-w-4xl mx-auto gap-6 mb-24 md:mb-0">
      <div className="fixed md:static w-full bottom-0 md:w-3/12 -mb-5">
        <NavigationCard />
      </div>
      <div className="w-full flex flex-col bg-white shadow-md shadow-gray-300 rounded-md mb-5 transition-all duration-300 hover:shadow-lg">
        <div className="w-full h-auto flex bg-blue-300 p-4 rounded-md">
          {user && (
            <div className="flex flex-col p-4">
              <div className="flex items-center mb-4 bg-secondary rounded-md text-white p-4 transition-all duration-300 hover:bg-secondary-light">
                <RxAvatar className="w-16 h-16 rounded-full" />
                <div className="ml-4 font-semibold">
                  <p>CI: {user.cedula}</p>
                  <p>Nombre: {user.firstName}</p>
                  <p>Apellido: {user.lastName}</p>
                </div>
              </div>
              <p className="mb-2">Teléfono: {user.telefono}</p>
              <p className="mb-2">Email: {user.correo}</p>
              <p className="mb-2">Rol: {getRole(user.rolId)}</p>
              <p className="mb-2">Fecha de nacimiento: {user.birthdate}</p>
              <p className="mb-2">Género: {user.gender}</p>
              <p className="mb-2">Dirección: {user.address}</p>
            </div>
          )}
        </div>
        <div className={rightColumnClasses}>{children}</div>
      </div>
    </div>
    </AuthComponent>
  );
}
