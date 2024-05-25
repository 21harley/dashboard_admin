"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { imgLogin } from '@/src/assets/assets';
import dataUser from '@/src/data/test/users.json';
import useUserStore from '@/src/store/store';


interface UserData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const setUser = useUserStore(state => state.setUser); // Obtiene la función setUser del store
  const router = useRouter(); // Obtiene el objeto de router para la navegación
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    const user = dataUser.find((userData: UserData) => userData.email === email && userData.password === password);

    if (user) {
      toast.success('¡Inicio de sesión exitoso!');
      setUser(user); // Guarda el usuario en el store
      // Redirección a /profile después de 5 segundos
      setTimeout(() => {
        router.push('/profile');
      }, 5000);
    } else {
      toast.error('Credenciales incorrectas. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* lado izquierdo */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Bienvenido de nuevo</span>
          <span className="font-light text-gray-400 mb-8">
            ¡Bienvenido de nuevo! Por favor ingresa tus datos
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Correo electrónico</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Contraseña</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <span className="font-bold text-md">¿Olvidaste tu contraseña?</span>
          </div>
          <button onClick={handleLogin} className="w-full bg-secondary text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-secondary hover:border hover:border-gray-300">
            Iniciar sesión
          </button>
        </div>
        {/* lado derecho */}
        <div className="relative">
          <div className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover">
            <Image
              src={imgLogin}
              alt="Visual de inicio de sesión"
              fill
              objectFit="cover"
              className="rounded-r-2xl"
            />
          </div>
          {/* texto en la imagen */}
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
            <span className="text-white text-xl">
              Estamos orgullosos de nuestra escuela Bienvenidos a tu hogar, tu escuela.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;