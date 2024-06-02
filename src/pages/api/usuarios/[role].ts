import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { role } = req.query; // Obtener el parámetro 'role' de la URL

  try {
    switch (req.method) {
      case 'GET':
        return handleGet(req, res, role as string);
      case 'POST':
        return [405, { error: 'Método no permitido' }];
      case 'PUT':
        return [405, { error: 'Método no permitido' }];
      case 'DELETE':
        return [405, { error: 'Método no permitido' }];
      default:
        return res.status(405).json({ error: 'Método no permitido' });
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse, role: string) {
  const usuarios = await getAllUsuariosRole(role);
  res.status(200).json(usuarios);
}

async function getAllUsuariosRole(role: string) {
  const usuarios = await prisma.usuario.findMany({
    include: {
      rol: true,
    },
    where: {
      rol: {
        nombre: role // Asumiendo que `nombre` es el campo en el modelo `rol` que contiene el nombre del rol
      }
    },
  });
  return usuarios;
}