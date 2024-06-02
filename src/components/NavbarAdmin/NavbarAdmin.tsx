"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

interface Props {
  isAdmin: boolean;
}

const Navbar: React.FC<Props> = ({ isAdmin }) => {
  const pathname = usePathname();
  const title = pathname ? pathname.split("/").pop() : "Home";

  return (
    <div className={`${isAdmin ? "bg-secondary" : "bg-blue-600" } p-5 rounded-lg mb-5 text-white flex flex-col sm:flex-row items-center justify-between border-2 border-blue-200`}>
      <div className="font-bold uppercase mb-3 sm:mb-0">{title}</div>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto">
        <div className="flex items-center gap-3 bg-white text-gray-600 p-2 rounded-lg w-full sm:w-auto">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none text-black w-full sm:w-auto"
          />
        </div>
        <div className="flex gap-3 sm:gap-5 mt-3 sm:mt-0">
          <MdOutlineChat
            size={20}
            className="hover:text-gray-200 cursor-pointer"
          />
          <MdNotifications
            size={20}
            className="hover:text-gray-200 cursor-pointer"
          />
          <MdPublic
            size={20}
            className="hover:text-gray-200 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
