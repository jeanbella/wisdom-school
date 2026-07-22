import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardCheck,
  BookOpen,
  Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />
    },

    {
      name: "Students",
      path: "/dashboard/students",
      icon: <Users size={20} />
    },

    {
      name: "Teachers",
      path: "/dashboard/teachers",
      icon: <GraduationCap size={20} />
    },

    {
      name: "Attendance",
      path: "/dashboard/attendance",
      icon: <ClipboardCheck size={20} />
    },

    {
      name: "Classes",
      path: "/dashboard/classes",
      icon: <BookOpen size={20} />
    },

    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <Settings size={20} />
    },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen fixed">
      <div className="text-center text-2xl font-bold py-6 border-b border-slate-700">
        Wisdom School
      </div>
      <nav className="mt-5">
        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.path}
            end={menu.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-4 transition ${isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {menu.icon}
            {menu.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;