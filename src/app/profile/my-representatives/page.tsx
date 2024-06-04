"use client"
import React, { useEffect, useState } from 'react';
import useUserStore from '@/src/store/store';
import { User } from '@/src/types/types';

interface RepresentadoData {
  id: number;
  usuarioId: number;
  representanteId: number;
  usuario: User;
}

const Page = () => {
  const { user } = useUserStore();
  const [representadoData, setRepresentadoData] = useState<RepresentadoData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRepresentadoData = async () => {
      if (!user) return;
      
      try {
        const response = await fetch(`/api/representantes?id_representante=${user.id}`);
        if (!response.ok) {
          throw new Error('Error al obtener datos del representado');
        }
        
        const data: RepresentadoData[] = await response.json();
        console.log("Fetched data:", data);  // Log para ver los datos obtenidos
        setRepresentadoData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepresentadoData();
  }, [user]);

  useEffect(() => {
    if (representadoData) {
      console.log("representadoData:", representadoData);  // Log para ver representadoData completo
    }
  }, [representadoData]);

  if (loading) {
    return <p>Cargando datos del representado...</p>;
  }

  return (
    <div className="p-4">
      {representadoData && representadoData.length > 0 ? (
        <div>
          <h2>Detalles de los Representados:</h2>
          {representadoData.map((representado) => (
            <div key={representado.id}>
              <p>Nombre: {representado.usuario.firstName}</p>
              <p>Apellido: {representado.usuario.lastName}</p>
              {/* Agrega más campos según la estructura de los datos del representado */}
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron datos del representado.</p>
      )}
    </div>
  );
};

export default Page;
