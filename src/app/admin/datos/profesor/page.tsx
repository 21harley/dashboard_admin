"use client"
import { LoadingSpinner } from '@/src/components/LoadingSpinner';
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Define el tipo para los datos de profesores
interface Profesor {
  id: number;
  usuarioId: number;
  codigo: string;
  grado: string;
  area: string;
  usuario: {
    id: number;
    cedula: string;
    firstName: string;
    lastName: string;
    telefono: string;
    correo: string;
    rolId: number;
    birthdate: string;
    gender: string;
    address: string;
    password: string;
  };
}

const PageProfesor: React.FC = () => {
  // Define el estado para los datos de profesores
  const [data, setData] = useState<Profesor[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/profesores");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parsea los datos como Profesor[]
        const responseData: Profesor[] = await response.json();
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner/>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const totalProfesores = data.length;

  const distributionGender = data.reduce((acc, profesor) => {
    const gender = profesor.usuario.gender;
    acc[gender] = (acc[gender] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const genderData = Object.entries(distributionGender).map(([gender, count]) => ({
    name: gender === 'M' ? 'Masculino' : 'Femenino',
    value: count,
  }));

  const currentYear = new Date().getFullYear();
  const ages = data.map(profesor => currentYear - new Date(profesor.usuario.birthdate).getFullYear());
  const averageAge = (ages.reduce((acc, age) => acc + age, 0) / ages.length).toFixed(2);

  const ageDistribution = ages.reduce((acc, age) => {
    acc[age] = (acc[age] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const ageData = Object.entries(ageDistribution).map(([age, count]) => ({
    age: parseInt(age),
    count,
  }));

  const areaFrequency = data.reduce((acc, profesor) => {
    acc[profesor.area] = (acc[profesor.area] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const areaData = Object.entries(areaFrequency).map(([area, count]) => ({
    area,
    count,
  }));

  return (
    <div className="container mx-auto p-4 bg-blue-300">
      <h1 className="text-2xl font-bold mb-4">Estadísticas de Profesores</h1>
      <p className="mb-4">Total de Profesores: {totalProfesores}</p>
      
      <div className="flex flex-wrap mb-8">
        <div className="w-full lg:w-1/3 bg-white rounded-md p-2 mr-8">
          <h2 className="text-xl font-semibold mb-2">Distribución por Género</h2>
          <PieChart width={300} height={300}>
            <Pie data={genderData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
              {genderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        
        <div className="w-full lg:w-1/2 bg-white rounded-md p-2">
          <h2 className="text-xl font-semibold mb-2">Edad Promedio</h2>
          <p className="mb-4">{averageAge} años</p>
          <h2 className="text-xl font-semibold mb-2">Distribución de Edades</h2>
          <BarChart width={400} height={300} data={ageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="age" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
      
      <div className="mb-8 bg-blue-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Distribución por Área</h2>
        <BarChart width={600} height={300} data={areaData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="area" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default PageProfesor;
