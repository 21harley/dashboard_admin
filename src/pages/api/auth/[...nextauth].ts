// pages/api/auth/[...nextauth].ts

import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // Configura tus proveedores de autenticación aquí si los necesitas
  
  // SQLite como almacenamiento
  database: process.env.DATABASE_URL,

  // Opcional: Personaliza las rutas
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', 
    verifyRequest: '/auth/verify-request',
    newUser: null // No es necesario si no permites el registro
  },
});