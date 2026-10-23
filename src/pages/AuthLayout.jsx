
import {
  BadgeCheck,
  Bell,
  Bookmark,
  CircleEllipsis,
  Ellipsis,
  Home,
  MessageCircle,
  Phone,
  Search,
  UserRound,
} from "lucide-react";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { Link, NavLink, Outlet } from "react-router";

const menuItems = [
  {
    id: "home",
    icon: Home,
    label: "Home",
    link: "/",
  },
  {
    id: "explore",
    icon: Search,
    label: "Explore",
    link: "/explore",
  },
  {
    id: "notifications",
    icon: Bell,
    label: "Notifications",
    link: "/notifications",
  },
  {
    id: "chat",
    icon: MessageCircle,
    label: "Chat",
    link: "/chat",
  },
  {
    id: "calls",
    icon: Phone,
    label: "Calls",
    link: "/calls",
  },
  {
    id: "history",
    icon: Bookmark,
    label: "History",
    link: "/history",
  },
  {
    id: "premium",
    icon: BadgeCheck,
    label: "Premium",
    link: "/premium",
  },
  {
    id: "profile",
    icon: UserRound,
    label: "Profile",
    link: "/profile",
  },
  {
    id: "more",
    icon: CircleEllipsis,
    label: "More",
    link: "/more",
  },
];

export const AuthLayout = () => {
  return (
    <div className="flex ">
      <div className="w-90 border-r border-slate-500">
        <div className="h-screen flex flex-col justify-between pl-25">
          <Link className="p-5">
            <BsTwitterX size={30} />
          </Link>

          <nav className="flex flex-col flex-1 w-full gap-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center space-x-5 py-2 w-fit px-4 rounded-full text-xl transition duration-200 hover:bg-slate-600 ${isActive ? "font-bold" : "text-zinc-200"}  `
                }
              >
                <item.icon />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="py-2">
            <button className="py-5 px-25  rounded-4xl bg-white text-black font-bold text-xl cursor-pointer ">
              Post
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between space-x-5 p-3 rounded-4xl cursor-pointer hover:bg-slate-800 transition-colors duration-300">
             <div className="flex gap-2  ">
              <img
                src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                className="w-10 h-10 rounded-full  "
              />

              
                <div>
                  <p className="text-sm font-bold ">#NikoKadi</p>
                  <p className="text-xs text-slate-500  ">@RotichKEdwin</p>
                </div>
              </div>

              <div>
                <Ellipsis/>
              </div>

            </div>
          </div>

        </div>
      </div>

      <main className="flex-1 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};
