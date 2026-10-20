
import { BadgeCheck, Bell, Bookmark, CircleEllipsis, Home, MessageCircle, Phone, Search, UserRound } from "lucide-react";
import React from "react";
import { BsTwitterX } from "react-icons/bs";

const menuItems = [
  {
    id: "home",
    icon: Home, 
    label: "Home"
  },
    {
    id: "explore",
    icon: Search, 
    label: "Explore"
  },
    {
    id: "notifications",
    icon: Bell, 
    label: "Notifications"
  },
    {
    id: "chat",
    icon: MessageCircle, 
    label: "Chat"
  },
    {
    id: "calls",
    icon: Phone, 
    label: "Calls"
  },
    {
    id: "history",
    icon: Bookmark, 
    label: "History"
  },
    {
    id: "premium",
    icon: BadgeCheck, 
    label: "Premium"
  },
    {
    id: "profile",
    icon: UserRound, 
    label: "Profile"
  },
    {
    id: "more",
    icon: CircleEllipsis, 
    label: "More"
  },

]

const Sidebar = () => {
  return (
    <div className="w-72 border-r">
      <div className="h-screen flex flex-col justify-between pl-8">
        <div className="p-5">
          <BsTwitterX size={30}/>
        </div>

        <nav className="bg-amber-300 flex-1 ">
          {
            menuItems.map((item) => (
              <div key={item.id} className="bg-blue-600">
                <button className="w-full flex items-center p-3 space-x-3">
                  <item.icon/> 
                  <span>{item.label}</span>

                </button>
              </div>
            ))
          }
        </nav>

        <div className="py-2">
          <button className="py-5 px-25  rounded-4xl bg-white text-black font-bold text-xl ">Post</button>
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
