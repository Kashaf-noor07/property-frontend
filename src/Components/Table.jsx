import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import AddForm from "./AddForm";
import { FaEdit, FaTrash, FaImages } from "react-icons/fa";
import Swal from "sweetalert2";

function Table() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const [carouselImages, setCarouselImages] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const API_URL = import.meta.env.VITE_API_URL;

  const [columnSearch, setColumnSearch] = useState({
    propertyname: "",
    broker: "",
    bathrooms: "",
    bedrooms: "",
    parking: "",
    rent: "",
    address: "",
    isrent: "",
  });

  const fetchProperties = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/property/list`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProperties(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchProperties();
  }, []);

  const handleExportCSV = () => {
    if (filteredProperties.length === 0) {
      alert("No Properties to Export...");
      return;
    }

    const headers = [
      "Property",
      "Broker",
      "Bathrooms",
      "Bedrooms",
      "Parking",
      "Market Rent",
      "Address",
      "Is Rented",
    ];
    const rows = filteredProperties.map((p) => [
      p.propertyname,
      p.broker,
      p.bathrooms,
      p.bedrooms,
      p.parking,
      p.rent,
      p.address,
      p.isrent,
    ]);

    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "properties.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  //toggeling property
  const handleToggle = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(`${API_URL}/property/toggle/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProperties((prev) =>
        prev.map((p) =>
          p._id === id ? { ...p, isrent: res.data.property.isrent } : p
        )
      );
    } catch (err) {
      console.error("Error in toggleing property", err);
    }
  };

  

const handleDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to undo this action!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(`${API_URL}/property/delete/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProperties(properties.filter((p) => p._id !== id));

        Swal.fire("Deleted!", "Property has been removed.", "success");
      } catch (err) {
        console.error("Delete failed:", err);
        Swal.fire("Error!", "Failed to delete property.", "error");
      }
    }
  });
};


  const handleUpdateSuccess = (updatedProperty) => {
    setProperties((prev) =>
      prev.map((p) => (p._id === updatedProperty._id ? updatedProperty : p))
    );
    setShowEditModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".relative")) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${API_URL}/property/update/${selectedProperty._id}`,
        selectedProperty,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setShowEditModal(false);
      fetchProperties();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const filteredProperties = properties.filter((p) => {
    const brokerName =
      typeof p.broker === "object" ? p.broker?.broker || "" : p.broker || "";

    const globalMatch =
      search === "" ||
      [
        p.propertyname,
        brokerName,
        p.bathrooms,
        p.bedrooms,
        p.parking,
        p.rent,
        p.address,
        p.isrent ? "yes" : "no",
      ]
        .map((val) => val?.toString().toLowerCase())
        .some((val) => val.includes(search.toLowerCase()));

    const columnMatch =
      (columnSearch.propertyname === "" ||
        p.propertyname
          ?.toLowerCase()
          .includes(columnSearch.propertyname.toLowerCase())) &&
      (columnSearch.broker === "" ||
        brokerName.toLowerCase().includes(columnSearch.broker.toLowerCase())) &&
      (columnSearch.bathrooms === "" ||
        p.bathrooms?.toString().includes(columnSearch.bathrooms)) &&
      (columnSearch.bedrooms === "" ||
        p.bedrooms?.toString().includes(columnSearch.bedrooms)) &&
      (columnSearch.parking === "" ||
        p.parking
          ?.toLowerCase()
          .includes(columnSearch.parking.toLowerCase())) &&
      (columnSearch.rent === "" ||
        p.rent?.toString().includes(columnSearch.rent)) &&
      (columnSearch.address === "" ||
        p.address
          ?.toLowerCase()
          .includes(columnSearch.address.toLowerCase())) &&
      (columnSearch.isrent === "" ||
        (p.isrent ? "yes" : "no")
          .toLowerCase()
          .includes(columnSearch.isrent.toLowerCase()));

    return globalMatch && columnMatch;
  });

  return (
    <div>
      
      <div className="flex justify-between">
        <h2 className="p-4 font-bold">Buildings List</h2>

        {/* search + buttons */}
        <div className="flex justify-between items-center px-4 gap-3">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />

          <Link to={"/buildings/create"}>
            <button className="btn btn-primary outline-none border-none rounded px-4 py-2 focus:ring-0 focus:ring-blue-800 ">
              Add Property +
            </button>
          </Link>

          {/*  Export CSV button */}
          <button
            onClick={handleExportCSV}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Export as CSV
          </button>
         

        </div>
      </div>
      {/* Table */}
      <div className="fulltable overflow-x-auto shadow-md rounded-lg ml-2">
        <div className="tablebody min-w-full max-w-[900px]">
          <table className="min-w-[1100px] text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="text-center px-4 py-3">Property</th>
                <th className="text-center px-4 py-3">Broker</th>
                <th className="text-center px-4 py-3">Bathrooms</th>
                <th className="text-center px-4 py-3">Bedrooms</th>
                <th className="text-center px-4 py-3">Parking</th>
                <th className="text-center px-4 py-3">Market Rent $</th>
                <th className="text-center px-4 py-3">Address</th>

                <th className="text-center px-4 py-3">Is Rented</th>
                <th className="text-center px-2 py-3">Display</th>
                <th className="text-center px-12 py-3 w-44">Action</th>
              </tr>

              {/* column search row */}
              <tr className="bg-gray-50">
                {Object.entries(columnSearch).map(([key, value]) => (
                  <th key={key} className="text-center px-2 py-1">
                    <input
                      type="text"
                      placeholder={`Search ${key}`}
                      value={value}
                      onChange={(e) =>
                        setColumnSearch({
                          ...columnSearch,
                          [key]: e.target.value,
                        })
                      }
                      className="border px-2 py-1 w-full text-xs focus:outline-none focus:ring-1 focus:ring-blue-700 rounded"
                    />
                  </th>
                ))}
                <th></th>
              </tr>
            </thead>

            <tbody>
              {filteredProperties.map((p) => (
                <tr key={p._id} className="border-b hover:bg-gray-50">
                  <td className="text-center px-4 py-3">{p.propertyname}</td>
                  <td className="text-center px-4 py-3">
                    {p.broker?.broker || "N/A"}
                  </td>
                  <td className="text-center px-4 py-3">{p.bathrooms}</td>
                  <td className="text-center px-4 py-3">{p.bedrooms}</td>
                  <td className="text-center px-4 py-3">{p.parking}</td>
                  <td className="text-center px-4 py-3">${p.rent}</td>
                  <td className="text-center px-4 py-3">{p.address}</td>
                  <td className="text-center px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={p.isrent}
                          className="sr-only peer"
                          onChange={() => handleToggle(p._id)}
                        />
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
                        {p.isrent ? "Yes" : "No"}
                      </span>
                    </div>
                  </td>

                  {/* show two pic only */}
                  <td className="text-center px-4 py-3">
                    {p.images && p.images.length > 0 ? (
                      <div className="inline-flex items-center gap-2">
                        {p.images.slice(0, 2).map((img, index) => (
                          <img
                            key={index}
                            className="w-8 h-8 object-cover border rounded cursor-pointer hover:opacity-80"
                            src={img}
                            alt={`property-${index}`}
                            onClick={() => {
                              setCarouselImages(p.images);
                              setCarouselIndex(index);
                            }}
                          />
                        ))}

                        {/* if there are more than 2 images show a small +N button */}
                        {p.images.length > 2 && (
                          <button
                            onClick={() => {
                              setCarouselImages(p.images);
                              setCarouselIndex(0);
                            }}
                            className="w-8 h-8 flex items-center justify-center text-xs border rounded bg-white"
                            title={`${p.images.length - 2} more`}
                          >
                            +{p.images.length - 2}
                          </button>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">No images</span>
                    )}
                  </td>

                  <td className="text-center px-6 py-3">
                    <div className="actioncolumn relative inline-block text-left">
                      <button
                        onClick={() =>
                          setOpenDropdownId(
                            openDropdownId === p._id ? null : p._id
                          )
                        }
                        className="bg-gray-200 px-3 py-1 ml-2 rounded hover:bg-gray-300"
                      >
                        Action ▾
                      </button>

                      {openDropdownId === p._id && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                          {/* Edit */}
                          <button
                            onClick={() => {
                              setSelectedProperty(p);
                              setShowEditModal(true);
                              setOpenDropdownId(null);
                            }}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            <FaEdit className="text-blue-600" /> Edit
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() => {
                              handleDelete(p._id);
                              setOpenDropdownId(null);
                            }}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          >
                            <FaTrash /> Delete
                          </button>

                          <button
                            onClick={() => {
                              if (p.images && p.images.length > 0) {
                                setCarouselImages(p.images);
                                setCarouselIndex(0);
                              } else {
                                alert("No images to show");
                              }
                              setOpenDropdownId(null);
                            }}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            <FaImages className="text-green-600" /> Show Gallery
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

      {showEditModal && selectedProperty && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-3/4 max-h-[90vh] overflow-y-auto">
            <AddForm
              mode="edit"
              id={selectedProperty._id}
              inModal={true}
              onClose={() => setShowEditModal(false)}
              onUpdateSuccess={handleUpdateSuccess}
            />
          </div>
        </div>
      )}

      {carouselImages.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => {
                setCarouselImages([]);
                setCarouselIndex(0);
              }}
              className="absolute top-1 right-1 z-30 bg-red-500 text-white rounded px-2 py-2"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="relative flex items-center justify-center bg-transparent">
              {/* Prev */}
              <button
                onClick={() =>
                  setCarouselIndex((i) =>
                    i === 0 ? carouselImages.length - 1 : i - 1
                  )
                }
                className="absolute left-3 top-1/2 z-30 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
                aria-label="Previous"
              >
                ‹
              </button>

              <div className="flex items-center justify-center">
                {/* <img
                  src={
                    carouselImages[carouselIndex] &&
                    carouselImages[carouselIndex].startsWith("http")
                      ? carouselImages[carouselIndex]
                      : `${API_URL}/upload/${carouselImages[carouselIndex]}`
                  }
                  alt={`carousel-${carouselIndex}`}
                  className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-lg"
                /> */}<img
  src={carouselImages[carouselIndex]}
  alt={`carousel-${carouselIndex}`}
  className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-lg"
/>

              </div>

              {/* Next */}
              <button
                onClick={() =>
                  setCarouselIndex((i) =>
                    i === carouselImages.length - 1 ? 0 : i + 1
                  )
                }
                className="absolute right-3 top-1/2 z-30 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
                aria-label="Next"
              >
                ›
              </button>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto px-2">
              {/* {carouselImages.map((img, idx) => {
                const src =
                  img && img.startsWith("http")
                    ? img
                    : `${API_URL}/upload/${img}`;
                return (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`w-20 h-12 p-1 border rounded overflow-hidden ${
                      idx === carouselIndex ? "ring-2 ring-blue-500" : "ring-0"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`thumb-${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })} */}
              {carouselImages.map((img, idx) => {
  return (
    <button
      key={idx}
      onClick={() => setCarouselIndex(idx)}
      className={`w-20 h-12 p-1 border rounded overflow-hidden ${
        idx === carouselIndex ? "ring-2 ring-blue-500" : "ring-0"
      }`}
    >
      <img
        src={img}  // <-- change from `${API_URL}/upload/${img}` to img
        alt={`thumb-${idx}`}
        className="w-full h-full object-cover"
      />
    </button>
  );
})}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
