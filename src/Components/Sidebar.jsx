import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Advising", link: "/advising" },
    { name: "Class and Exam Schedule", link: "/schedule" },
    { name: "Scholarship & Waiver History", link: "/scholarship-history" },
    { name: "Course Drop Application", link: "/course-drop" },
    { name: "Semester Drop Application", link: "/semester-drop" },
    { name: "Department Change", link: "/department-change" },
    { name: "Grade Sheet", link: "/grades" },
    { name: "Payslip", link: "/payslip" },
  ];

  return (
    <div className="relative">
      {/* Mobile toggle button */}
      <div className="md:hidden p-4 flex justify-between items-center bg-white shadow">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <button onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-white shadow-md h-screen w-64 p-4 absolute md:static z-20 transition-all duration-300 ${
          open ? "left-0" : "-left-full"
        } md:left-0`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-4 mb-4">
          <img src={logo} alt="Logo" className="w-20 h-20 hidden md:block" />
          <h2 className="font-semibold text-base hidden md:block">
            <span className="font-extrabold">S</span>tudent{" "}
            <span className="font-extrabold">L</span>ifecycle{" "}
            <span className="font-extrabold">M</span>anagement
          </h2>
        </div>

        {/* Menu */}
        <nav className="space-y-2 text-gray-700 font-medium">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 px-3 rounded-md transition text-sm truncate ${
                  isActive
                    ? "bg-blue-600 text-white font-semibold"
                    : "hover:bg-gray-100"
                }`
              }
              onClick={() => setOpen(false)} // close on mobile click
            >
              <span className="w-6 h-6 flex items-center justify-center text-base font-bold">
                {item.name[0]}
              </span>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
