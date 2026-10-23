
import { BadgeCheck, Bell, Bookmark, CircleEllipsis, Home, MessageCircle, Phone, Search, UserRound } from "lucide-react";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { NavLink, Outlet } from "react-router";

const menuItems = [
  {
    id: "home",
    icon: Home, 
    label: "Home",
    link: './home'
  },
    {
    id: "explore",
    icon: Search, 
    label: "Explore",
    link: './explore'
  },
    {
    id: "notifications",
    icon: Bell, 
    label: "Notifications",
    link: './notifications'
  },
    {
    id: "chat",
    icon: MessageCircle, 
    label: "Chat",
    link: './chat'
  },
    {
    id: "calls",
    icon: Phone, 
    label: "Calls",
    link: './calls'
  },
    {
    id: "history",
    icon: Bookmark, 
    label: "History",
    link: './history'
  },
    {
    id: "premium",
    icon: BadgeCheck, 
    label: "Premium",
    link: './premium'
  },
    {
    id: "profile",
    icon: UserRound, 
    label: "Profile",
    link: './profile'
  },
    {
    id: "more",
    icon: CircleEllipsis, 
    label: "More",
    link: './more'
  },

]

const Sidebar = () => {
  return (
    <div className="flex " > 
    <div className="w-72 border-r">
      <div className="h-screen flex flex-col justify-between pl-8">
        <div className="p-5">
          <BsTwitterX size={30}/>
        </div>

        <nav className="flex flex-col flex-1">
          {
            menuItems.map((item) => (
              <div className="flex-1" key={item.id} >  
              <NavLink 
                 key={item.id}  
                 to={item.link}
                 className="flex items-center space-x-3 w-full"

                 > 
                 <item.icon/> 
                 <span>{item.label}
                 </span>
                 </NavLink>
                 </div>
            ))
          }
        </nav>

        <div className="py-2">
          <button className="py-5 px-20  rounded-4xl bg-white text-black font-bold text-xl cursor-pointer ">Post</button>
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
    
    <div>
      <Outlet/>
    </div>
    </div>
  );
};

export default Sidebar;













