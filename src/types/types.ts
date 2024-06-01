// types/User.ts

export interface User {
  id: number;
  cedula: string;
  firstName: string;
  lastName: string;
  telefono: string;
  correo: string;
  rolId: number;
  birthdate: string;
  gender: string;
  address: string;
  password: string;
  rol: Rol;
}

export interface Rol {
  id: number;
  nombre: string;
  descripcion: string;
};
  

export interface Student {
    id: number;
    id_user: number;
    id_represent: number;
    id_aula: number;
    id_professor: number;
    grade: number;
  }
  
 
export  type RelatedStudentDetails = Student & User;


