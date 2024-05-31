const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
dotenv.config();

const prisma = new PrismaClient();

async function cargarDatosPrueba() {
  try {
    // Cargar roles
    const roles = [
      { nombre: 'Admin', descripcion: 'Administrador del sistema' },
      { nombre: 'Profesor', descripcion: 'Profesor de la institución' },
      { nombre: 'Estudiante', descripcion: 'Estudiante de la institución' },
      { nombre: 'Representante', descripcion: 'Representante de un estudiante' },
      { nombre: 'Usuario', descripcion: 'Usuario genérico del sistema' }
    ];
    await prisma.rol.createMany({ data: roles });

    // Cargar usuarios
    const usuarios = [
      { cedula: '1234567890', firstName: 'Juan', lastName: 'Pérez', telefono: '1234567890', correo: 'juan@example.com', rolId: 1, birthdate: new Date('1990-01-01T00:00:00Z'), gender: 'M', address: 'Calle 123, Ciudad', password: '123456' },
      { cedula: '0987654321', firstName: 'María', lastName: 'González', telefono: '0987654321', correo: 'maria@example.com', rolId: 2, birthdate: new Date('1995-05-05T00:00:00Z'), gender: 'F', address: 'Avenida 456, Ciudad', password: '123456' },
      { cedula: '1357924680', firstName: 'Carlos', lastName: 'López', telefono: '1357924680', correo: 'carlos@example.com', rolId: 3, birthdate: new Date('2000-10-10T00:00:00Z'), gender: 'M', address: 'Plaza 789, Ciudad', password: '123456' },
      { cedula: '2468013579', firstName: 'Ana', lastName: 'Martínez', telefono: '2468013579', correo: 'ana@example.com', rolId: 4, birthdate: new Date('1998-07-15T00:00:00Z'), gender: 'F', address: 'Carrera 012, Ciudad', password: '123456' },
      { cedula: '3692581470', firstName: 'Pedro', lastName: 'Sánchez', telefono: '3692581470', correo: 'pedro@example.com', rolId: 5, birthdate: new Date('1993-03-20T00:00:00Z'), gender: 'M', address: 'Calle 456, Ciudad', password: '123456' }
    ];
    await prisma.usuario.createMany({ data: usuarios });

    console.log('Datos de prueba cargados correctamente. Parte 1');
    await cargarDatosPrueba1();
  } catch (error) {
    console.error('Error al cargar los datos de prueba:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function cargarDatosPrueba1() {
  try {
    // Cargar profesores
    const profesor = { usuarioId: 2, codigo: 'PROF001', grado: 'Licenciatura', area: 'Matemáticas' };
    await prisma.profesor.create({ data: profesor });

    // Cargar representantes
    const representante = { usuarioId: 4, direccion: 'Av. Principal, Urbanización X', ocupacion: 'Ingeniero', estadoCivil: 'Casado', edad: 45 };
    await prisma.representante.create({ data: representante });

    console.log('Datos de prueba cargados correctamente. Parte 2');
    await cargarDatosPrueba2();
  } catch (error) {
    console.error('Error al cargar los datos de prueba:', error);
  }
}

async function cargarDatosPrueba2() {
  try {
    // Cargar estudiantes
    const estudiante = { usuarioId: 3, representanteId: 1 };
    await prisma.estudiante.create({ data: estudiante });

    // Cargar aulas
    const aula = { profesorId: 1, estudianteId: 1, nombre: 'Aula 101' };
    await prisma.aula.create({ data: aula });

    // Cargar actividades
    const actividades = [
      { fechaInicio: new Date('2024-06-01T08:00:00Z'), fechaFinal: new Date('2024-06-01T10:00:00Z'), nota: 85, comentario: 'Buena participación', entregado: true },
      { fechaInicio: new Date('2024-06-02T08:00:00Z'), fechaFinal: new Date('2024-06-02T10:00:00Z'), nota: 90, comentario: 'Excelente trabajo', entregado: true },
      { fechaInicio: new Date('2024-06-03T08:00:00Z'), fechaFinal: new Date('2024-06-03T10:00:00Z'), nota: 75, comentario: 'Necesita mejorar la presentación', entregado: true },
      { fechaInicio: new Date('2024-06-04T08:00:00Z'), fechaFinal: new Date('2024-06-04T10:00:00Z'), nota: 95, comentario: 'Excelente desempeño', entregado: true },
      { fechaInicio: new Date('2024-06-05T08:00:00Z'), fechaFinal: new Date('2024-06-05T10:00:00Z'), nota: 80, comentario: 'Buen trabajo en equipo', entregado: true }
    ];
    await prisma.actividad.createMany({ data: actividades });

    console.log('Datos de prueba cargados correctamente. Parte 3');
  } catch (error) {
    console.error('Error al cargar los datos de prueba:', error);
  }
}

cargarDatosPrueba();

