import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="right-0 top-0 flex flex-col  p-6">
      
      <div className="relative bg-gradient-to-t from-blue-900 to-blue-700 p-6 rounded-lg">
        
        <div className="flex flex-col gap-3">
          <span className="font-bold text-sm">🔥 Available Now</span>
          <h3 className="font-bold text-sm">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-gray-400">Takes 4 minutes to learn</span>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-700 text-white rounded-md">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>


    </div>
  );
};

export default Rightbar;
