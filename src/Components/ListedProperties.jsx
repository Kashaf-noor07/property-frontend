import React, { useEffect, useState } from "react";
import axios from "axios";

function ListedProperties() {
  const [rented, setRented] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const role = localStorage.getItem("role");

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchRentedProperties = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/customer/rented-list`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setRented(res.data);
        setFiltered(res.data);

        const uniqueCustomers = [];
        res.data.forEach((item) => {
          const cust = item.customer;
          if (cust && !uniqueCustomers.some((c) => c.name === cust.name)) {
            uniqueCustomers.push(cust);
          }
        });
        setCustomers(uniqueCustomers);
      } catch (err) {
        console.error("Error in fetching rented properties", err);
      }
    };
    fetchRentedProperties();
  }, [API_URL]);

  //   to select unique customers in dropdown

  const handleCustomerChange = (e) => {
    const value = e.target.value;
    setSelectedCustomer(value);
    if (value === "") {
      setFiltered(rented);
    } else {
      const filteredList = rented.filter(
        (item) => item.customer?.name === value
      );
      setFiltered(filteredList);
    }
  };

  return (
    <div className="p-2">
      <div className="flex justify-between p-4">
          <div className="flex items-center gap-3">
        <h2 className="font-bold text-lg">Rented Properties</h2>
      </div>
      <div>
          {role === "admin" && (
        <>
          <div >
            <div className="flex items-center gap-3">
              {/* Customer dropdown */}
              <select
                value={selectedCustomer}
                onChange={(e) => setSelectedCustomer(e.target.value)}
                className="border border-gray-300 rounded px-2 py-2"
              >
                <option value="">All Customers</option>
                {customers.map((cust, index) => (
                  <option key={index} value={cust.name}>
                    {cust.name}
                  </option>
                ))}
              </select>
              <button
                onClick={() => {
                  if (selectedCustomer === "") {
                    setFiltered(rented);
                  } else {
                    const filteredList = rented.filter(
                      (item) => item.customer?.name === selectedCustomer
                    );
                    setFiltered(filteredList);
                  }
                }}
                className="btn btn-primary text-white px-3 py-2 rounded hover:bg-blue-700"
              >
                Filter
              </button>
            </div>
          </div>
        </>
      )}
      </div>
    
      </div>
    

      <div className="fulltable overflow-x-auto shadow-md rounded-lg ml-2">
        <div className="tablebody min-w-full max-w-[900px]">
          <table className="min-w-[1100px] text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                <th className="px-2 py-2">Property name</th>
                <th className="px-2 py-2">Rent($)</th>
                <th className="px-2 py-2">Customer name</th>
                <th className="px-2 py-2">Customer Address</th>
                <th className="px-2 py-2">Contract Start Date</th>
                <th className="px-2 py-2">Contract End Date</th>
                <th className="px-2 py-2">Payment Status</th>
                <th className="px-2 py-2">Contract Status</th>
              </tr>
            </thead>

            <tbody>
              {filtered.length > 0 ? (
                filtered.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-4">
                      {item.property?.propertyname || "N/A"}
                    </td>
                    <td className="px-4 py-2">
                      ${item.property?.rent || "N/A"}
                    </td>
                    <td className="px-4 py-2">
                      {item.customer?.name || "N/A"}
                    </td>
                    <td className="px-4 py-2">
                      {item.customer?.address || "N/A"}
                    </td>
                    <td className="px-4 py-2">
                      {item.contract?.startDate
                        ? new Date(item.contract.startDate).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-4 py-2">
                      {item.contract?.endDate
                        ? new Date(item.contract.endDate).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-10 py-2 text-center">
                      <span
                        className={`px-4 py-1 rounded text-white ${
                          item.paymentStatus === "paid"
                            ? "bg-green-600"
                            : item.paymentStatus === "pending"
                            ? "bg-yellow-500 text-black"
                            : "bg-red-600"
                        }`}
                      >
                        {item.paymentStatus || "N/A"}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded text-white ${
                          item.contractStatus === "ended"
                            ? "bg-red-600"
                            : "bg-green-600"
                        }`}
                      >
                        {item.contractStatus}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-gray-500 py-3">
                    No rented properties yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListedProperties;
