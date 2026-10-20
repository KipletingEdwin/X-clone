
import { ZapIcon } from "lucide-react";
import React from "react";
import { BsTwitterX } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="w-72 border-r">
      <div className="h-screen flex flex-col justify-between pl-8">
        <div className="p-5">
          <BsTwitterX size={30}/>
        </div>

        <div className="p-4">
          <div className="flex items-center space-x-5 p-3 rounded-4xl cursor-pointer hover:bg-slate-800 transition-colors duration-300">
            <img
              src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
              className="w-10 h-10 rounded-full  "
            />
            <div>
              <div>
                <p className="text-sm">Edwin</p>
                <p className="text-xs">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
