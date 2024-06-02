"use client"
import { Sidebar } from "@/src/components/Admin/Sidebar";
import { AuthComponent } from "@/src/components/AuthComponent";
import { FooterAdmin } from "@/src/components/FooterAdmin";
import { NavbarAdmin } from "@/src/components/NavbarAdmin";
import useUserStore from "@/src/store/store";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { user } = useUserStore(); // Obtén el usuario del store
  
  return (
    <AuthComponent>
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
    </AuthComponent>
  );
};

export default Layout;

