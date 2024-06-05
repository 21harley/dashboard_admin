"use client"
import { Sidebar } from "@/src/components/Admin/Sidebar";
import { AuthComponent } from "@/src/components/AuthComponent";
import { FooterAdmin } from "@/src/components/FooterAdmin";
import { LoadingSpinner } from "@/src/components/LoadingSpinner";
import { NavbarAdmin } from "@/src/components/NavbarAdmin";
import useUserStore from "@/src/store/store";
import { Profesor } from "@/src/types/profesor.type";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { user } = useUserStore();
  const [profesor, setProfesor] = useState<Profesor | null >(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  
  useEffect(() => {
    const fetchProfesorData = async () => {
      if (!user) return;
  
      try {
        // Llama a la API para obtener los datos del profesor asociado al usuario
        const response = await fetch(`/api/profesores?id_usuario=${user.id}`);
  
        if (!response.ok) {
          throw new Error('Error al obtener datos del profesor');
        }
  
        // Parsea la respuesta como JSON
        const data = await response.json();
  
        // Aquí puedes hacer lo que quieras con los datos
        console.log(data);
  
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProfesorData();
  }, [user]);
  

  return (
    <AuthComponent>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col lg:flex-row">
          <div className="bg-primary p-5 h-full lg:h-screen lg:w-1/4">
            <Sidebar isAdmin={false} />
          </div>
          <div className="flex-1 p-5 flex flex-col gap-3">
            <NavbarAdmin isAdmin={false} title={"PROFESOR: "+ user?.firstName +" "+ user?.lastName } />
            <div className="flex-grow overflow-auto bg-white rounded-md border-[2px] border-gray-300 px-5">
              {children}
            </div>
            <FooterAdmin />
          </div>
        </div>
      )}
    </AuthComponent>
  );
};

export default Layout;
