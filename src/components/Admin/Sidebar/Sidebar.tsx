"use client";
import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { MenuLink } from "./MenuLink";
import { useRouter } from "next/navigation";
import { logoIconMd } from "@/src/assets/assets";

const menuItemsAdmin = [
  {
    title: "Usuarios",
    list: [
      {
        title: "Todos",
        path: "/dashboard/todos",
        icon: <MdAttachMoney />,
      },
      {
        title: "Profesores",
        path: "/dashboard/profesores",
        icon: <MdDashboard />,
      },
      {
        title: "Representantes",
        path: "/dashboard/Representantes",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Estudiantes",
        path: "/dashboard/estudiantes",
        icon: <MdShoppingBag />,
      },
    ],
  },
  {
    title: "Estadísticas",
    list: [
      {
        title: "Datos Aula",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Datos Profesores",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Datos Representantes",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Configuración",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Ayuda",
        path: "/dashboard/ayuda",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const menuItemsProfesores = [
  {
    title: "Mi Aula",
    list: [
      {
        title: "Todos",
        path: "/dashboard/todos",
        icon: <MdAttachMoney />,
      },
      {
        title: "Alumnos",
        path: "/dashboard/profesores",
        icon: <MdDashboard />,
      },
      {
        title: "Representantes",
        path: "/dashboard/Representantes",
        icon: <MdSupervisedUserCircle />,
      },
    ],
  },
  {
    title: "Tareas",
    list: [
      {
        title: "Crear tarea",
        path: "/dashboard/crear-tarea",
        icon: <MdWork />,
      },
      {
        title: "Mis tareas",
        path: "/dashboard/mis-tareas",
        icon: <MdAnalytics />,
      },
      {
        title: "Notas",
        path: "/dashboard/notas",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Configuración",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Ayuda",
        path: "/dashboard/ayuda",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

interface Props {
  isAdmin: boolean;
}

const Sidebar: React.FC<Props> = ({ isAdmin }) => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const menuItems = isAdmin ? menuItemsAdmin : menuItemsProfesores;

  return (
    <div className={`sticky top-10 ${isAdmin ? "bg-secondary" : "bg-blue-600" } p-6 rounded-md border-[2px] border-blue-200 text-white max-w-full md:max-w-xs`}>
      <div
        onClick={() => {
          router.push("/admin");
        }}
        className="flex flex-col md:flex-row justify-center items-center p-4 rounded-md bg-white text-black mb-6 cursor-pointer"
      >
        <Image
          src={logoIconMd}
          alt={`Directivo`}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div className="flex flex-col mt-2 md:mt-0 md:ml-4">
          <span className="font-bold">Directivos</span>
          <span className="text-sm">Administrator</span>
        </div>
      </div>
      <ul className="list-none mt-4">
        {menuItems.map((cat) => (
          <li key={cat.title} className={`mb-4 p-2 ${ isAdmin ? "bg-orange-500" : "bg-blue-500"}  rounded-md`} >
            <span className="font-bold text-gray-200 mb-2 block">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button
        onClick={logout}
        className="p-4 flex items-center gap-2 bg-gray-700 text-white rounded-md w-full hover:bg-gray-500 mt-4"
      >
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
