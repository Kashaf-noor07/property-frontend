import React from "react";
import { useState } from "react";

import "./Navbar.css";

import { Link } from "react-router-dom";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const role = localStorage.getItem("role");
  return (
    <div
      className={`${
        sidebarOpen ? "w-60" : "w-28"
      } bg-blue-950 text-white transition-all duration-300 flex flex-col h-screen`}
    >
      {/* Sidebar Header */}
      <div className="py-4 flex items-center justify-between px-4 border-b border-blue-700">
        <h1 className="text-lg  font-bold text-white">
          {sidebarOpen ? "Menu" : ""}
        </h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-300"
        >
          {sidebarOpen ? "←" : "Menu"}
        </button>
      </div>

      {/* Sidebar Content  */}
      <div className="flex p-4 mt-4 ">
        <ul
          className={` flex flex-col list-none !pl-4 !space-y-6  ${
            sidebarOpen ? "items-start" : "items-center"
          }`}
        >
          {/* Dashboard */}
       <li className=" hover:bg-blue-700 rounded-md cursor-pointer">
                <Link
                  to="/home"
                  className="flex items-center space-x-2 text-white p-2"
                >
                 <svg
                className=" icons h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 12h14v2H3v-2zm0-5h14v2H3V7zm0 10h14v2H3v-2z" />
              </svg>

                  {sidebarOpen && <span>Dashboard</span>}
                </Link>
              </li>

          {role === "admin" && (
            <>
              {/* Buildings */}
              <li className=" hover:bg-blue-700 rounded-md cursor-pointer">
                <Link
                  to="/buildings"
                  className="flex items-center space-x-2 text-white p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="icons h-5 w-5 text-white"
                  >
                    <path d="M4 3h10v18H4V3Zm2 2v14h6V5H6Zm10 2h4v2h-4V7Zm0 4h4v2h-4v-2Zm0 4h4v2h-4v-2Z" />
                  </svg>

                  {sidebarOpen && <span>Buildings</span>}
                </Link>
              </li>

              {/* broker */}
              <li className=" hover:bg-blue-700 rounded-md cursor-pointer">
                <Link
                  to="/broker"
                  className="flex items-center space-x-2 text-white p-2"
                >
                  <svg
                    className="icons h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
               1.79-4 4 1.79 4 4 4zm0 2c-2.67 
               0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                  </svg>

                  {sidebarOpen && <span>Brokers</span>}
                </Link>
              </li>
            </>
          )}

          {/* rent property */}
          <li className="hover:bg-blue-700 rounded-md cursor-pointer">
            <Link
              to="/rented"
              className="flex items-center space-x-2 text-white p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="icons h-5 w-5 text-white"
              >
                <path d="M4 22V10l8-6 8 6v12h-5v-5H9v5H4Zm7-2v-5h2v5h3V11l-4-3-4 3v9h3ZM9 12h2v2H9v-2Zm4 0h2v2h-2v-2Z" />
              </svg>
              {/* <svg
                className="icons h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 3h16v18H4V3zm4 2v2h2V5H8zm0 4v2h2V9H8zm0 4v2h2v-2H8zm0 4v2h2v-2H8zm6-12v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z" />
              </svg> */}

              {sidebarOpen && <span>Rent Property</span>}
            </Link>
          </li>

          {/* rented property */}
          <li className="hover:bg-blue-700 rounded-md cursor-pointer">
            <Link
              to="/rented-list"
              className="flex items-center space-x-2 text-white p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="icons h-5 w-5 text-white"
              >
                <path d="M3 21V9l9-6 9 6v12h-6v-6H9v6H3zm6 0v-4h6v4h3V10.2L12 5.3 6 10.2V21h3zm10.6-10.3 1.4 1.4-4.6 4.6-2.6-2.6 1.4-1.4 1.2 1.2 3.2-3.2z" />
              </svg>

              {sidebarOpen && <span>Rented Properties</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
