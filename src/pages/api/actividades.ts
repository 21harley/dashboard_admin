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
  const actividades = await getAllActividades();
  res.status(200).json(actividades);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { fechaInicio, fechaFinal, nota, comentario, entregado } = req.body;
  const nuevaActividad = await createActividad(fechaInicio, fechaFinal, nota, comentario, entregado);
  res.status(201).json(nuevaActividad);
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { fechaInicio, fechaFinal, nota, comentario, entregado } = req.body;
  const actividadActualizada = await updateActividad(Number(id), {
    fechaInicio,
    fechaFinal,
    nota,
    comentario,
    entregado,
  });
  res.status(200).json(actividadActualizada);
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const actividadEliminada = await deleteActividad(Number(id));
  res.status(200).json(actividadEliminada);
}

async function createActividad(
  fechaInicio: Date,
  fechaFinal: Date,
  nota: number,
  comentario: string,
  entregado: boolean
) {
  const actividad = await prisma.actividad.create({
    data: {
      fechaInicio,
      fechaFinal,
      nota,
      comentario,
      entregado,
    },
  });
  return actividad;
}

async function getAllActividades() {
  const actividades = await prisma.actividad.findMany();
  return actividades;
}

async function updateActividad(
  id: number,
  data: {
    fechaInicio?: Date;
    fechaFinal?: Date;
    nota?: number;
    comentario?: string;
    entregado?: boolean;
  }
) {
  const actividad = await prisma.actividad.update({
    where: { id },
    data,
  });
  return actividad;
}

async function deleteActividad(id: number) {
  const actividad = await prisma.actividad.delete({
    where: { id },
  });
  return actividad;
}
