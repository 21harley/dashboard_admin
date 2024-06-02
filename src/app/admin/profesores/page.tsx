"use client";
import React, { useState, ChangeEvent } from 'react';
import { User } from '@/src/types/types';

const ProfesoresPage: React.FC = () => {

  const test = {
    cedula: '',
    firstName: '',
    lastName: '',
    telefono: '',
    correo: '',
    rolId: 0,
    birthdate: '',
    gender: '',
    address: '',
    password: '',
    id: 0,
    rol: {
      descripcion: '',
      id: 1,
      nombre: '',
    },
  }

  const [profesor, setProfesor] = useState<User>(test);

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfesor({ ...profesor, [name]: value });
  };

  const handleCreate = () => {
    console.log('Crear Profesor:', profesor);
    setProfesor(test);
  };

  const handleUpdate = () => {
    if (profesor.id) {
      console.log('Actualizar Profesor:', profesor);
      setProfesor(test);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    if (profesor.id) {
      console.log('Eliminar Profesor con ID:', profesor.id);
      setProfesor(test);
      setIsEditing(false);
    }
  };

  const handleEdit = (profesorData: User) => {
    setProfesor(profesorData);
    setIsEditing(true);
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h2 className="text-2xl text-blue-600 font-bold mb-4">Profesores</h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-blue-600">Cédula</label>
          <input
            type="text"
            name="cedula"
            placeholder="Cédula"
            value={profesor.cedula}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-300 rounded"
          />
        </div>
        <div>
          <label className="block text-blue-600">Nombre</label>
          <input
            type="text"
            name="firstName"
            placeholder="Nombre"
            value={profesor.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-300 rounded"
          />
        </div>
        <div>
          <label className="block text-blue-600">Apellido</label>
          <input
            type="text"
            name="lastName"
            placeholder="Apellido"
            value={profesor.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-300 rounded"
          />
        </div>
        <div>
          <label className="block text-blue-600">Teléfono</label>
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={profesor.telefono}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-300 rounded"
          />
        </div>
        <div>
          <label className="block text-blue-600">Correo</label>
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={profesor.correo}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-300 rounded"
          />
        </div>
        <div>
          <label className="block text-blue-600">Rol ID</label>
          <input
            type="number"
            name="rolId"
            placeholder="Rol ID"
            value={profesor.rolId}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-300 rounded"
          />
        </div>
        <div>
          <label className="block text-blue-600">Fecha de Nacimiento</label>
          <input
            type="date"
            name="birthdate"
            placeholder="Fecha de Nacimiento"
            value={profesor.birthdate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-300 rounded"
          />
        </div>
        <div>
          <label className="block text-blue-600">Género</label>
          <input
            type="text"
            name="gender"
            placeholder="Género"
            value={profesor.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-300 rounded"
          />
        </div>
        <div>
          <label className="block text-blue-600">Dirección</label>
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={profesor.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-300 rounded"
          />
        </div>
        <div>
          <label className="block text-blue-600">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={profesor.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-300 rounded"
          />
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          {isEditing ? (
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handleUpdate}
                className="w-full px-4 py-2 bg-orange-500 text-white font-bold rounded mt-2 hover:bg-orange-600"
              >
                Actualizar
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="w-full px-4 py-2 bg-red-500 text-white font-bold rounded mt-2 hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleCreate}
              className="w-full px-4 py-2 bg-orange-500 text-white font-bold rounded mt-2 hover:bg-orange-600"
            >
              Crear
            </button>
          )}
        </div>
      </form>
      <div className="mt-6">
        <h3 className="text-xl text-blue-600 font-bold mb-2">Lista de Profesores</h3>
        <ul className="space-y-2">
          <li
            onClick={() =>
              handleEdit({
                id: 2,
                cedula: '0987654321',
                firstName: 'María',
                lastName: 'González',
                telefono: '0987654321',
                correo: 'maria@example.com',
                rolId: 2,
                birthdate: '1995-05-05',
                gender: 'F',
                address: 'Avenida 456, Ciudad',
                password: '123456',
                rol: {
                  id: 2,
                  nombre: 'profesor',
                  descripcion: 'Profesor de la institución',
                },
              })
            }
            className="cursor-pointer text-blue-600 font-bold hover:underline"
          >
            María González - Matemáticas
          </li>
          {/* Agrega más profesores aquí */}
        </ul>
      </div>
    </div>
  );
};

export default ProfesoresPage;
