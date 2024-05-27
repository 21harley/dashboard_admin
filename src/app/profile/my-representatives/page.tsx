"use client"
import React from 'react';
import Image from 'next/image';
import { RxAvatar } from 'react-icons/rx';

import students from '../../../data/test/students.json';
import users from '../../../data/test/users.json';
import useUserStore from '@/src/store/store';
import { RelatedStudentDetails } from '@/src/types/types';

const Page = () => {
  const { user } = useUserStore();

  // Filtrar los estudiantes relacionados con el representante actual
  const relatedStudents = students.filter(student => student.id_represent === user?.id);

  // Obtener los detalles del usuario para cada estudiante
  const relatedStudentDetails: RelatedStudentDetails[] = relatedStudents.map(student => {
    const userDetails = users.find(u => u.id === student.id_user);
    return { ...student, ...userDetails } as RelatedStudentDetails;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Estudiantes relacionados</h1>
      {relatedStudentDetails.length > 0 ? (
        <div className="w-full h-auto border border-green-900 mt-4 p-4">
          <h2 className="text-lg font-semibold mb-4">Estudiantes:</h2>
          {relatedStudentDetails.map(student => (
            <div key={student.id} className="flex flex-col mb-4 p-2 border border-gray-300">
              <div className="flex items-center mb-2">
                {student.avatar ? (
                  <Image 
                    src={student.avatar} 
                    alt={`${student.firstName} ${student.lastName}`} 
                    width={32} 
                    height={32} 
                    className="rounded-full"
                  />
                ) : (
                  <RxAvatar className="w-8 h-8 rounded-full" />
                )}
                <div className="ml-2">
                  <p>CI: {student.ci}</p>
                  <p>Nombre: {student.firstName}</p>
                  <p>Apellido: {student.lastName}</p>
                </div>
              </div>
              <p>Teléfono: {student.phone}</p>
              <p>Email: {student.email}</p>
              <p>Fecha de nacimiento: {student.birthdate}</p>
              <p>Género: {student.gender}</p>
              <p>Dirección: {student.address}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay estudiantes relacionados con este representante.</p>
      )}
    </div>
  );
};

export default Page;
