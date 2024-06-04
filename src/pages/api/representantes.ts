import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        return handleGet(req, res);
      case 'POST':
        return handlePost(req, res);
      case 'PUT':
        return handlePut(req, res);
      case 'DELETE':
        return handleDelete(req, res);
      default:
        return res.status(405).json({ error: 'Método no permitido' });
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const { id_representante } = req.query;

  if (id_representante) {
    return getEstudiantesByRepresentante(Number(id_representante), res);
  } else {
    const representantes = await getAllRepresentantes();
    return res.status(200).json(representantes);
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { usuarioId, direccion, ocupacion, estadoCivil, edad } = req.body;
  const nuevoRepresentante = await createRepresentante(usuarioId, direccion, ocupacion, estadoCivil, edad);
  res.status(201).json(nuevoRepresentante);
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { usuarioId, direccion, ocupacion, estadoCivil, edad } = req.body;
  const representanteActualizado = await updateRepresentante(Number(id), {
    usuarioId,
    direccion,
    ocupacion,
    estadoCivil,
    edad,
  });
  res.status(200).json(representanteActualizado);
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const representanteEliminado = await deleteRepresentante(Number(id));
  res.status(200).json(representanteEliminado);
}

async function createRepresentante(
  usuarioId: number,
  direccion: string,
  ocupacion: string,
  estadoCivil: string,
  edad: number
) {
  const representante = await prisma.representante.create({
    data: {
      usuarioId,
      direccion,
      ocupacion,
      estadoCivil,
      edad,
    },
  });
  return representante;
}

async function getAllRepresentantes() {
  const representantes = await prisma.representante.findMany({
    include: {
      usuario: true,
    },
  });
  return representantes;
}

async function updateRepresentante(
  id: number,
  data: {
    usuarioId?: number;
    direccion?: string;
    ocupacion?: string;
    estadoCivil?: string;
    edad?: number;
  }
) {
  const representante = await prisma.representante.update({
    where: { id },
    data,
  });
  return representante;
}

async function deleteRepresentante(id: number) {
  const representante = await prisma.representante.delete({
    where: { id },
  });
  return representante;
}

async function getEstudiantesByRepresentante(id_representante: number, res: NextApiResponse) {
  const representante = await prisma.representante.findUnique({
    where: { id: id_representante },
    include: {
      estudiantes: {
        include: {
          usuario: true
        }
      }
    }
  });

  if (!representante) {
    return res.status(404).json({ error: 'Representante no encontrado' });
  }

  const estudiantesRelacionados = representante.estudiantes.map(estudiante => ({
    id: estudiante.id,
    usuarioId: estudiante.usuarioId,
    representanteId: estudiante.representanteId,
    usuario: estudiante.usuario // Datos del usuario relacionados
  }));

  return res.status(200).json(estudiantesRelacionados);
}
