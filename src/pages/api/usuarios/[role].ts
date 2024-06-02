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
        return handlePost(req, res, role as string);
      case 'PUT':
        return handlePut(req, res, role as string);
      case 'DELETE':
        return handleDelete(req, res, role as string);
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

async function handlePost(req: NextApiRequest, res: NextApiResponse, role: string) {
  // Lógica para manejar POST
  res.status(200).json({ message: `POST request for role: ${role}` });
}

async function handlePut(req: NextApiRequest, res: NextApiResponse, role: string) {
  // Lógica para manejar PUT
  res.status(200).json({ message: `PUT request for role: ${role}` });
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse, role: string) {
  // Lógica para manejar DELETE
  res.status(200).json({ message: `DELETE request for role: ${role}` });
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