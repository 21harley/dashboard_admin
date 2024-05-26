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
  const usuarios = await getAllUsuarios();
  res.status(200).json(usuarios);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { cedula, firstName, lastName, telefono, correo, rolId, birthdate, gender, address } = req.body;
  const nuevoUsuario = await createUsuario(cedula, firstName, lastName, telefono, correo, rolId, birthdate, gender, address);
  res.status(201).json(nuevoUsuario);
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { cedula, firstName, lastName, telefono, correo, rolId, birthdate, gender, address } = req.body;
  const usuarioActualizado = await updateUsuario(Number(id), {
    cedula,
    firstName,
    lastName,
    telefono,
    correo,
    rolId,
    birthdate,
    gender,
    address,
  });
  res.status(200).json(usuarioActualizado);
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const usuarioEliminado = await deleteUsuario(Number(id));
  res.status(200).json(usuarioEliminado);
}

async function createUsuario(
  cedula: string,
  firstName: string,
  lastName: string,
  telefono: string,
  correo: string,
  rolId: number,
  birthdate: Date,
  gender: string,
  address: string
) {
  const usuario = await prisma.usuario.create({
    data: {
      cedula,
      firstName,
      lastName,
      telefono,
      correo,
      rolId,
      birthdate,
      gender,
      address,
    },
  });
  return usuario;
}

async function getAllUsuarios() {
  const usuarios = await prisma.usuario.findMany({
    include: {
      rol: true,
    },
  });
  return usuarios;
}

async function updateUsuario(
  id: number,
  data: {
    cedula?: string;
    firstName?: string;
    lastName?: string;
    telefono?: string;
    correo?: string;
    rolId?: number;
    birthdate?: Date;
    gender?: string;
    address?: string;
  }
) {
  const usuario = await prisma.usuario.update({
    where: { id },
    data,
  });
  return usuario;
}

async function deleteUsuario(id: number) {
  const usuario = await prisma.usuario.delete({
    where: { id },
  });
  return usuario;
}
