import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function authenticate(req: NextApiRequest, res: NextApiResponse) {
  const { cedula, correo } = req.body;

  try {
    // Busca al usuario por cédula o correo
    const usuario = await prisma.usuario.findFirst({
      where: {
        OR: [
          { cedula: cedula },
          { correo: correo }
        ]
      }
    });

    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Genera un token de acceso
    const token = jwt.sign({ cedula: usuario.cedula, rolId: usuario.rolId }, 'secreto', { expiresIn: '1h' });

    // Set the token in the Authorization header
    res.setHeader('Authorization', `Bearer ${token}`);

    // Return a success response
    return res.status(200).json({ success: true, token: token });

  } catch (error) {
    console.error('Error al autenticar usuario:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
