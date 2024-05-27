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
  const aulas = await getAllAulas();
  res.status(200).json(aulas);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { userId, representId, actividadId, nombre } = req.body;
  const nuevaAula = await createAula(userId, representId, actividadId, nombre);
  res.status(201).json(nuevaAula);
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { userId, representId, actividadId, nombre } = req.body;
  const aulaActualizada = await updateAula(Number(id), {
    userId,
    representId,
    actividadId,
    nombre,
  });
  res.status(200).json(aulaActualizada);
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const aulaEliminada = await deleteAula(Number(id));
  res.status(200).json(aulaEliminada);
}

async function createAula(
  profesorId: number,
  estudianteId: number,
  actividadId: number,
  nombre: string
) {
  const aula = await prisma.aula.create({
    data: {
      profesorId,
      estudianteId,
      actividad: { connect: { id: actividadId } }, // Conectar con la actividad existente mediante su ID
      nombre,
    },
  });
  return aula;
}

async function getAllAulas() {
  const aulas = await prisma.aula.findMany({
    include: {
      profesor: true,
      estudiante: true,
      actividad: true,
    },
  });
  return aulas;
}

async function updateAula(
  id: number,
  data: {
    userId?: number;
    representId?: number;
    actividadId?: number;
    nombre?: string;
  }
) {
  const aula = await prisma.aula.update({
    where: { id },
    data,
  });
  return aula;
}

async function deleteAula(id: number) {
  const aula = await prisma.aula.delete({
    where: { id },
  });
  return aula;
}