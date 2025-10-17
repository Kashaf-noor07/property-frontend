import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./Navbar.css";

function Header() {
    const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const role = localStorage.getItem("role")
 const token = localStorage.getItem("token");
 const name = localStorage.getItem("name")
     if (!token) {
      navigate("/")};


   const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (

  
 
        <div className="flex-1 flex flex-col bg-gray-50" >
           <nav className="w-full bg-white shadow-md px-6 py-3 flex justify-end items-center">
          <div className="text-xl font-bold text-gray-800"></div>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
    onClick={() => setOpen(!open)}
   className="dropdown1 flex items-center space-x-2 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 "

  >
  {role === "admin" ? "Profile" : name || "User" }
    <svg
      className="h-5 w-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  </button>

            {open && (
              <div className="logdrop absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <ul className="loghead text-sm text-gray-700">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
        </div>
  )
}

export default Header
