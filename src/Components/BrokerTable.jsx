import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

function BrokerTable() {
  const navigate = useNavigate();
  const [brokers, setBrokers] = useState([]);
  const [actionDropdown, setActionDropdown] = useState(null);
  const [search, setSearch] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  // to fetch the brokers from database and display in table without id
  const fetchBrokers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/broker/listbroker`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBrokers(res.data);
    } catch (err) {
      console.error("Error Fetching Brokers", err);
    }
  };

  const filteredBrokers = brokers.filter((b) =>
    b.broker.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sue you want to delete this broker?"
    );
    if (!confirmDelete) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/broker/deletebroker/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBrokers((prev) => prev.filter((b) => b._id !== id));
      fetchBrokers();
    } catch (err) {
      console.error("Error deleting broker", err);
    }
  };

  useEffect(() => {
    fetchBrokers();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".relative")) {
        setActionDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        `${API_URL}/broker/broker/toggle/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setBrokers((prev) =>
        prev.map((b) =>
          b._id === id ? { ...b, isActive: res.data.broker.isActive } : b
        )
      );
    } catch (err) {
      console.error("Error in toggleing brokers", err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        {/* Left side: Heading */}
        <h2 className="text-2xl font-bold ">Brokers</h2>

        {/* Right side: Search + Button */}
        <div className="flex justify-between items-center px-4 gap-3">
          <input
            type="text"
            placeholder="Search broker..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-blue-700"
          />

          <Link to={"/broker/create"}>
            <button className=" btn btn-primary rounded px-4 py-2">
              Add Broker +
            </button>
          </Link>
        </div>
      </div>

      {/* Broker Table */}
      <div className="fulltable overflow-x-auto shadow-md rounded-lg ml-2">
        <div className="tablebody min-w-full max-w-[900px]">
          <table className="min-w-[1100px] text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="text-center px-4 py-3">Broker Name</th>
                {/* <th className="text-center px-4 py-3">property Name</th>
                <th className="text-center px-4 py-3">Address</th> */}
                <th className="text-center px-4 py-3">Status</th>
                <th className="text-center px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBrokers.map((b) => (
                <tr key={b._id} className="border-b hover:bg-gray-50">
                  <td className="text-center px-4 py-3">{b.broker}</td>
                  {/* <td className="text-center px-4 py-3">
                    {b.propertyname?.propertyname || "N/A"}
                  </td>
                  <td className="text-center px-4 py-3">
                    {b.address?.address || "N/A"}
                  </td> */}
                  <td className="text-center px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={b.isActive}
                          className="sr-only peer"
                          onChange={() => handleToggle(b._id)}
                        />
                        {/* toggle button */}
                        <div
                          className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 
                          rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                          rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                           after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white 
                         after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 
                        after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 
                         dark:peer-checked:bg-blue-600"
                        ></div>
                      </label>

                      <span className="text-sm font-medium mb-2">
                        {b.isActive ? "Active" : "InActive"}
                      </span>
                    </div>
                  </td>
                  <td className="text-center px-4 py-3">
                    <div className="relative inline-block text-left">
                      <button
                        onClick={() =>
                          setActionDropdown(
                            actionDropdown === b._id ? null : b._id
                          )
                        }
                        className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                      >
                        Action ▾
                      </button>

                      {actionDropdown === b._id && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                          <button
                            onClick={() => {
                              navigate(`/broker/edit/${b._id}`);
                              setActionDropdown(null);
                            }}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            <FaEdit className="text-blue-600" /> Edit
                          </button>

                          <button
                            onClick={() => {
                              handleDelete(b._id);
                              setActionDropdown(null);
                            }}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          >
                            <FaTrash /> Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BrokerTable;
