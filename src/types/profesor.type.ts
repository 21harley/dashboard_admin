export interface Usuario {
    id: number;
    cedula: string;
    firstName: string;
    lastName: string;
    telefono: string;
    correo: string;
    rolId: number;
    birthdate: string; // O Date si se prefiere
    gender: string;
    address: string;
    password: string;
  }
  
  export interface Representante {
    id: number;
    usuarioId: number;
    direccion: string;
    ocupacion: string;
    estadoCivil: string;
    edad: number;
    usuario: Usuario;
  }
  
  export  interface Estudiante {
    id: number;
    usuarioId: number;
    representanteId: number;
    usuario: Usuario;
    representante: Representante;
  }
  
  export  interface Actividad {
    id: number;
    fechaInicio: string; // O Date si se prefiere
    fechaFinal: string; // O Date si se prefiere
    nota: number;
    comentario?: string;
    entregado: boolean;
    aulaId: number;
  }
  
  export  interface Aula {
    id: number;
    profesorId: number;
    nombre: string;
    estudiantes: Estudiante[];
    actividades: Actividad[];
  }
  
  export  interface Profesor {
    id: number;
    usuarioId: number;
    codigo: string;
    grado: string;
    area: string;
    usuario: Usuario;
    aulas: Aula[];
    actividades: Actividad[];
  }