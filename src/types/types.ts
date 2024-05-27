// types/User.ts
export interface User {
    id: number;
    avatar: string;
    ci: string;
    firstName: string;
    password: string;
    lastName: string;
    phone: string;
    email: string;
    id_rol: number;
    birthdate: string;
    gender: string;
    address: string;
}
  

interface Student {
    id: number;
    id_user: number;
    id_represent: number;
    id_aula: number;
    id_professor: number;
    grade: number;
  }
  
 
export  type RelatedStudentDetails = Student & User;