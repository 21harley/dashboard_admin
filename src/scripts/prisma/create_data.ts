const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
dotenv.config();

const prisma = new PrismaClient();

async function cargarDatosPrueba() {
  try {
    // Cargar roles
    const roles = [
      { nombre: 'admin', descripcion: 'Administrador del sistema' },
      { nombre: 'profesor', descripcion: 'Profesor de la institución' },
      { nombre: 'estudiante', descripcion: 'Estudiante de la institución' },
      { nombre: 'representante', descripcion: 'Representante de un estudiante' },
      { nombre: 'usuario', descripcion: 'Usuario genérico del sistema' }
    ];
    await prisma.rol.createMany({ data: roles });

    // Cargar usuarios
    const usuarios = [];
    const nombres = ['Juan', 'Pedro', 'Luis', 'Carlos', 'José', 'Miguel', 'Jorge', 'Mario', 'Sergio', 'Andrés', 'Francisco', 'David', 'Alejandro', 'Fernando', 'Ricardo', 'Gabriel', 'Rafael', 'Antonio', 'Manuel', 'Enrique', 'Alberto', 'Eduardo', 'Héctor', 'Iván', 'Javier', 'Raúl', 'Diego', 'Hugo', 'Oscar', 'Martín'];
    const apellidos = ['Pérez', 'García', 'López', 'Martínez', 'González', 'Rodríguez', 'Sánchez', 'Ramírez', 'Torres', 'Flores', 'Vásquez', 'Castillo', 'Romero', 'Morales', 'Herrera', 'Ríos', 'Ortiz', 'Cruz', 'Gómez', 'Salazar', 'Mendoza', 'Jiménez', 'Silva', 'Castro', 'Mora', 'Chávez', 'Guerrero', 'Maldonado', 'Reyes', 'Vargas'];

        // Cargar usuarios con rol admin
        for (let i = 0; i < 1; i++) {
          let user = {
            cedula: (1000000000 + i).toString(),
            firstName: nombres[i % nombres.length],
            lastName: apellidos[i % apellidos.length],
            telefono: (2000000000 + i).toString(),
            correo: `${nombres[i % nombres.length].toLowerCase()}${i + 1}@example.com`,
            rolId: 1,
            birthdate: new Date(`1999-01-01T00:00:00Z`),
            gender: i % 2 === 0 ? 'M' : 'F',
            address: `Calle ${i + 1}, Ciudad`,
            password: (100000 + i).toString()
          };
          usuarios.push(user);
        }

        // Cargar usuarios con rol user
        for (let i = 1; i < 5; i++) {
          let user = {
            cedula: (1000000000 + i).toString(),
            firstName: nombres[i % nombres.length],
            lastName: apellidos[i % apellidos.length],
            telefono: (2000000000 + i).toString(),
            correo: `${nombres[i % nombres.length].toLowerCase()}${i + 1}@example.com`,
            rolId: 5,
            birthdate: new Date(`1999-01-01T00:00:00Z`),
            gender: i % 2 === 0 ? 'M' : 'F',
            address: `Calle ${i + 1}, Ciudad`,
            password: (100000 + i).toString()
          };
          usuarios.push(user);
        }     
        // Cargar usuarios con rol profesor
        for (let i = 5; i < 10; i++) {
          let user = {
            cedula: (1000000000 + i).toString(),
            firstName: nombres[i % nombres.length],
            lastName: apellidos[i % apellidos.length],
            telefono: (2000000000 + i).toString(),
            correo: `${nombres[i % nombres.length].toLowerCase()}${i + 1}@example.com`,
            rolId: 2,
            birthdate: new Date(`1999-01-01T00:00:00Z`),
            gender: i % 2 === 0 ? 'M' : 'F',
            address: `Calle ${i + 1}, Ciudad`,
            password: (100000 + i).toString()
          };
          usuarios.push(user);
        }   

    // Cargar usuarios con rol de estudiante
    for (let i = 10; i < 40; i++) {
      let user = {
        cedula: (1000000000 + i).toString(),
        firstName: nombres[i % nombres.length],
        lastName: apellidos[i % apellidos.length],
        telefono: (2000000000 + i).toString(),
        correo: `${nombres[i % nombres.length].toLowerCase()}${i + 1}@example.com`,
        rolId: 3,
        birthdate: new Date(`1999-01-01T00:00:00Z`),
        gender: i % 2 === 0 ? 'M' : 'F',
        address: `Calle ${i + 1}, Ciudad`,
        password: (100000 + i).toString()
      };
      usuarios.push(user);
    }

    // Cargar usuarios con rol de representante
    for (let i = 40; i < 67; i++) {
      let user = {
        cedula: (1400200000 + i).toString(),
        firstName: nombres[i % nombres.length],
        lastName: apellidos[i % apellidos.length],
        telefono: (2000000000 + i).toString(),
        correo: `${nombres[i % nombres.length].toLowerCase()}${i + 1}@example4.com`,
        rolId: 4, //representante
        birthdate: new Date(`1998-07-15T00:00:00Z`),
        gender: i % 2 === 0 ? 'M' : 'F',
        address: `Calle ${i + 1}, Ciudad`,
        password: (100000 + i).toString()
      };
      usuarios.push(user);
    }


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
    const profesores = [
      { usuarioId: 6, codigo: 'PROF001', grado: 'Licenciatura', area: 'Matemáticas' },
      { usuarioId: 7, codigo: 'PROF003', grado: 'Licenciatura', area: 'Química' },
      { usuarioId: 8, codigo: 'PROF004', grado: 'Licenciatura', area: 'Psicología' },
      { usuarioId: 9, codigo: 'PROF005', grado: 'Licenciatura', area: 'General' },
      { usuarioId: 10, codigo: 'PROF006', grado: 'Licenciatura', area: 'Historia' }
    ];
    await prisma.profesor.createMany({ data: profesores });

    // Cargar representantes
    const representantes = [];

    for (let i = 41; i <= 67; i++) {
      representantes.push({ usuarioId: i, direccion: 'Av. Principal, Urbanización X', ocupacion: 'Ingeniero/a', estadoCivil: 'Casado/a', edad: Math.floor(Math.random() * (60 - 22)) + 22 });
    }

    await prisma.representante.createMany({ data: representantes });

    console.log('Datos de prueba cargados correctamente. Parte 2');
    await cargarDatosPrueba2();
  } catch (error) {
    console.error('Error al cargar los datos de prueba:', error);
  }
}

async function cargarDatosPrueba2() {
  try {
    // Cargar estudiantes
    const estudiantes: { usuarioId: number; representanteId: number }[] = [];

    // Asignar representantes a los estudiantes
    let representanteId = 1;
    let estudiantesConUnRepresentante = 0;

    for (let i = 11, j=1; i <= 35; i++,j++) {
      estudiantes.push({ usuarioId: i, representanteId:j });
    }
    estudiantes.push({ usuarioId: 36, representanteId:26 });
    estudiantes.push({ usuarioId: 37, representanteId:26 });

    estudiantes.push({ usuarioId: 38, representanteId:27 });
    estudiantes.push({ usuarioId: 39, representanteId:27 });
    estudiantes.push({ usuarioId: 40, representanteId:27 });

    await prisma.estudiante.createMany({ data: estudiantes });


    // Cargar aulas
    const aula = await prisma.aula.create({
      data: {
        profesorId: 1,
        nombre: 'Aula 101',
      },
    });

    // Obtener estudiantes
    const estudiantesAula:any = await prisma.estudiante.findMany({
      where: {
        id: {
          in: [1, 2, 3], // IDs de los estudiantes que deseas asociar
        },
      },
    });

// Conectar estudiantes al aula
await prisma.aula.update({
  where: {
    id: aula.id,
  },
  data: {
    estudiantes: {
      connect: estudiantesAula.map((estudiante: { id: number }) => ({
        id: estudiante.id || 1,
      })),
    },
  },
});


    // Cargar actividades
    const actividades = [
      { fechaInicio: new Date('2024-06-01T08:00:00Z'), fechaFinal: new Date('2024-06-01T10:00:00Z'), aulaId: 1, nota: 85, comentario: 'Buena participación', entregado: true },
      { fechaInicio: new Date('2024-06-02T08:00:00Z'), fechaFinal: new Date('2024-06-02T10:00:00Z'), aulaId: 1, nota: 90, comentario: 'Excelente trabajo', entregado: true },
      { fechaInicio: new Date('2024-06-03T08:00:00Z'), fechaFinal: new Date('2024-06-03T10:00:00Z'), aulaId: 1, nota: 75, comentario: 'Necesita mejorar la presentación', entregado: true },
      { fechaInicio: new Date('2024-06-04T08:00:00Z'), fechaFinal: new Date('2024-06-04T10:00:00Z'), aulaId: 1, nota: 95, comentario: 'Excelente desempeño', entregado: true },
      { fechaInicio: new Date('2024-06-05T08:00:00Z'), fechaFinal: new Date('2024-06-05T10:00:00Z'), aulaId: 1, nota: 80, comentario: 'Buen trabajo en equipo', entregado: true }
    ];
    await prisma.actividad.createMany({ data: actividades });

    console.log('Datos de prueba cargados correctamente. Parte 3');
  } catch (error) {
    console.error('Error al cargar los datos de prueba:', error);
  }
}

cargarDatosPrueba();

