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
  const profesores = await getAllProfesores();
  res.status(200).json(profesores);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { usuarioId, codigo, grado, area } = req.body;
  const nuevoProfesor = await createProfesor(usuarioId, codigo, grado, area);
  res.status(201).json(nuevoProfesor);
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { usuarioId, codigo, grado, area } = req.body;
  const profesorActualizado = await updateProfesor(Number(id), {
    usuarioId,
    codigo,
    grado,
    area,
  });
  res.status(200).json(profesorActualizado);
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const profesorEliminado = await deleteProfesor(Number(id));
  res.status(200).json(profesorEliminado);
}

async function createProfesor(
  usuarioId: number,
  codigo: string,
  grado: string,
  area: string
) {
  const profesor = await prisma.profesor.create({
    data: {
      usuarioId,
      codigo,
      grado,
      area,
    },
  });
  return profesor;
}

async function getAllProfesores() {
  const profesores = await prisma.profesor.findMany({
    include: {
      usuario: true,
    },
  });
  return profesores;
}

async function updateProfesor(
  id: number,
  data: {
    usuarioId?: number;
    codigo?: string;
    grado?: string;
    area?: string;
  }
) {
  const profesor = await prisma.profesor.update({
    where: { id },
    data,
  });
  return profesor;
}

async function deleteProfesor(id: number) {
  const profesor = await prisma.profesor.delete({
    where: { id },
  });
  return profesor;
}