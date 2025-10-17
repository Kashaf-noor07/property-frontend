//  <form onSubmit={handleSubmit}>
//                   {/* About Property */}
//                   <h5 className="headheading fw-bold  mb-2">About Property</h5>
//                   <div className="row g-2">
//                     <div className="col-md-6">
//                       <label htmlFor="propertyname" className="form-label small">
//                         Property Name <span className="text-danger">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="input_fields form-control form-control-sm"
//                         id="propertyname"
//                         name="propertyname"
//                         placeholder="Enter property name"
//                         value={formData.propertyname}
//                         onChange={handleChange}
//                       />
//                       {error && !formData.propertyname && (
//                         <span className="text-danger small">
//                           Property is required
//                         </span>
//                       )}
//                     </div>

//                     <div className="col-md-6">
//                       <label htmlFor="address" className="form-label small">
//                         Address <span className="text-danger">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control form-control-sm input_fields"
//                         id="address"
//                         name="address"
//                         placeholder="Enter address"
//                         value={formData.address}
//                         onChange={handleChange}
//                       />
//                       {error && !formData.address && (
//                         <span className="text-danger small">
//                           Address is required
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Facilities */}
//                   <h5 className="headheading fw-bold mt-3 mb-2">Facilities</h5>
//                   <div className="row g-2">
//                     <div className="col-md-4">
//                       <label htmlFor="bathrooms" className="form-label small">
//                         Bathrooms <span className="text-danger">*</span>
//                       </label>
//                       <input
//                         type="number"
//                         className="form-control form-control-sm input_fields"
//                         id="bathrooms"
//                         name="bathrooms"
//                         placeholder="Enter bathrooms"
//                         value={formData.bathrooms}
//                         onChange={handleChange}
//                       />
//                       {error && !formData.bathrooms && (
//                         <span className="text-danger small">
//                           Bathrooms are required
//                         </span>
//                       )}
//                     </div>
//                     <div className="col-md-4">
//                       <label htmlFor="bedrooms" className="form-label small">
//                         Bedrooms <span className="text-danger">*</span>
//                       </label>
//                       <input
//                         type="number"
//                         className="input_fields form-control form-control-sm"
//                         id="bedrooms"
//                         name="bedrooms"
//                         placeholder="Enter bedrooms"
//                         value={formData.bedrooms}
//                         onChange={handleChange}
//                       />
//                       {error && !formData.bedrooms && (
//                         <span className="text-danger small">
//                           Bedrooms are required
//                         </span>
//                       )}
//                     </div>
//                     <div className="col-md-4">
//                       <label htmlFor="parking" className="form-label small">
//                         Parking <span className="text-danger">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="input_fields form-control form-control-sm"
//                         id="parking"
//                         name="parking"
//                         placeholder="Enter parking availability"
//                         value={formData.parking}
//                         onChange={handleChange}
//                       />
//                       {error && !formData.parking && (
//                         <span className="text-danger small">
//                           Parking is required
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* About Building */}
//                   <h5 className="headheading fw-bold mt-3 mb-2">Market</h5>
//                   <div className="row g-2">
//                     <div className="col-md-6">
//                       <label htmlFor="broker" className="form-label small">
//                         Broker <span className="text-danger">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="input_fields form-control form-control-sm"
//                         id="broker"
//                         name="broker"
//                         placeholder="Enter broker name"
//                         value={formData.broker}
//                         onChange={handleChange}
//                       />
//                       {error && !formData.broker && (
//                         <span className="text-danger small">
//                           Broker is required
//                         </span>
//                       )}
//                     </div>
//                     <div className="col-md-6">
//                       <label htmlFor="rent" className="form-label small">
//                         Market Rent <span className="text-danger">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="input_fields form-control form-control-sm"
//                         id="rent"
//                         name="rent"
//                         placeholder="Enter market rent"
//                         value={formData.rent}
//                         onChange={handleChange}
//                       />
//                       {error && !formData.rent && (
//                         <span className="text-danger small">
//                           Rent is required
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Submit */}
//                   <div className="mt-3 text-end">
//                     <button
//                       className="btn text-white btn-sm px-4"
//                       style={{ width: "250px" ,backgroundColor: "#1c398e" }}
//                       type="submit"
//                       disabled={loading}
//                     >
//                       {loading ? "Saving..." :(mode==="add"? "Add": "Save")}
//                     </button>
//                   </div>
//                 </form>



//  <div className="fulltable overflow-x-auto shadow-md rounded-lg ml-2">
//         <div className="tablebody min-w-full max-w-[900px]">
//           <table className="min-w-[1100px] text-sm text-left text-gray-700">
//             <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
//               <tr>
//                 <th className="text-center px-4 py-3">Property</th>
//                 <th className="text-center px-4 py-3">Broker</th>
//                 <th className="text-center px-4 py-3">Bathrooms</th>
//                 <th className="text-center px-4 py-3">Bedrooms</th>
//                 <th className="text-center px-4 py-3">Parking</th>
//                 <th className="text-center px-4 py-3">Market Rent</th>
//                 <th className="text-center px-4 py-3">Address</th>
//                 <th className="text-center px-4 py-3">Is Rented</th>
//                 <th className="text-center px-4 py-3">Operations</th>
//               </tr>

//               {/* column search row */}
//               <tr className="bg-gray-50">
//                 {Object.entries(columnSearch).map(([key, value]) => (
//                   <th key={key} className="text-center px-2 py-1">
//                     <input
//                       type="text"
//                       placeholder={`Search ${key}`}
//                       value={value}
//                       onChange={(e) =>
//                         setColumnSearch({ ...columnSearch, [key]: e.target.value })
//                       }
//                       className="border px-2 py-1 w-full text-xs focus:outline-none focus:ring-1 focus:ring-blue-700 rounded"
//                     />
//                   </th>
//                 ))}
//                 <th></th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredProperties.map((p) => (
//                 <tr key={p._id} className="border-b hover:bg-gray-50">
//                   <td className="text-center px-4 py-3">{p.propertyname}</td>
//                   <td className="text-center px-4 py-3">{p.broker}</td>
//                   <td className="text-center px-4 py-3">{p.bathrooms}</td>
//                   <td className="text-center px-4 py-3">{p.bedrooms}</td>
//                   <td className="text-center px-4 py-3">{p.parking}</td>
//                   <td className="text-center px-4 py-3">{p.rent}</td>
//                   <td className="text-center px-4 py-3">{p.address}</td>
//                   <td className="text-center px-4 py-3">{p.isrent}</td>
//                   <td className="text-center px-4 py-3">
//                     <div className="flex justify-center gap-3">
//                       <button
//                         onClick={() => handleDelete(p._id)}
//                         className="bg-red-500 text-white w-20 px-3 py-1 rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                       <button
//                         onClick={() => {
//                           setSelectedProperty(p);
//                           setShowEditModal(true);
//                         }}
//                         className="bg-blue-800 text-white w-20 px-3 py-1 rounded hover:bg-blue-700"
//                       >
//                         Edit
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Edit Modal */}
      
// {showEditModal && selectedProperty && (
//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//     <div className="bg-white rounded-lg shadow-lg w-3/4 max-h-[90vh] overflow-y-auto">
//       <AddForm
//         mode="edit"
//         id={selectedProperty._id}
//         inModal={true}
//         onClose={() => setShowEditModal(false)}
//         onUpdateSuccess={handleUpdateSuccess} 
//       />
//     </div>
//   </div>
// )}

// BrokerTable.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import BrokerForm from "./BrokerForm";

// function BrokerTable() {
//   const [brokers, setBrokers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [openDropdownId, setOpenDropdownId] = useState(null);

  // // modal states
  // const [showEditModal, setShowEditModal] = useState(false);
  // const [selectedBroker, setSelectedBroker] = useState(null);

  // // fetch all brokers
  // const fetchBrokers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("http://localhost:5000/broker/listbroker", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setBrokers(res.data);
//     } catch (err) {
//       console.error("Error Fetching Brokers", err);
//     }
//   };

//   useEffect(() => {
//     fetchBrokers();
//   }, []);

//   // delete broker
//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this broker?");
//     if (!confirmDelete) return;

//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(`http://localhost:5000/broker/deletebroker/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setBrokers((prev) => prev.filter((b) => b._id !== id));
//     } catch (err) {
//       console.error("Error deleting broker", err);
//     }
//   };

//   // filter brokers by search
//   const filteredBrokers = brokers.filter((b) =>
//     b.broker?.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-4">
//       {/* Header Row */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="font-bold text-xl">Brokers</h2>

//         <div className="flex justify-between items-center px-4 gap-3">
//           <input
//             type="text"
//             placeholder="Search broker..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//              className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-700"
//           />
//           <Link to={"/brokerform"}>
//             <button className="addbtn">
//               Add Broker +
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Table */}
//       <table className="w-full border-collapse border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="text-center px-4 py-3">Broker Name</th>
//             <th className="text-center px-4 py-3">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredBrokers.map((b) => (
//             <tr key={b._id}>
//               <td className="text-center px-4 py-3">{b.broker}</td>
//               <td className="text-center px-4 py-3">
//                 <div className="relative inline-block text-left">
//                   <button
//                     onClick={() =>
//                       setOpenDropdownId(openDropdownId === b._id ? null : b._id)
//                     }
//                     className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
//                   >
//                     Action ▾
//                   </button>

//                   {openDropdownId === b._id && (
//                     <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
//                       <button
//                         onClick={() => {
//                           setSelectedBroker(b);
//                           setShowEditModal(true);
//                           setOpenDropdownId(null);
//                         }}
//                         className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => {
//                           handleDelete(b._id);
//                           setOpenDropdownId(null);
//                         }}
//                         className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Edit Modal */}
//       {showEditModal && selectedBroker && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-[500px] max-h-[80vh] overflow-y-auto">
//             <BrokerForm
//               mode="edit"
//               id={selectedBroker._id}
//               inModal={true}
//               onClose={() => setShowEditModal(false)}
//               onUpdateSuccess={() => {
//                 fetchBrokers();
//                 setShowEditModal(false);
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BrokerTable;



// // BrokerForm.jsx
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import "./Navbar.css";

// function BrokerForm({ mode = "add", id: propId, inModal = false, onClose, onUpdateSuccess }) {
//   const navigate = useNavigate();
//   const params = useParams();
//   const id = propId || params.id;

//   const [formData, setFormData] = useState({
//     broker: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   // fetch one broker if editing
//   useEffect(() => {
//     if (mode === "edit" && id) {
//       const fetchOne = async () => {
//         try {
//           const token = localStorage.getItem("token");
//           const res = await axios.get(`http://localhost:5000/broker/${id}`, {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           setFormData({ broker: res.data.broker || "" });
//         } catch (err) {
//           console.error("Failed to fetch broker", err);
//         }
//       };
//       fetchOne();
//     }
//   }, [mode, id]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.broker) {
//       setError(true);
//       return;
//     }

//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       if (mode === "add") {
//         const res = await axios.post(
//           "http://localhost:5000/broker/addbroker",
//           formData,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         alert("Broker added successfully");

//         if (inModal && onUpdateSuccess) {
//           onUpdateSuccess(res.data);
//         } else if (inModal && onClose) {
//           onClose();
//         } else {
//           navigate("/brokers");
//         }
//       } else {
//         const res = await axios.put(
//           `http://localhost:5000/broker/updatebroker/${id}`,
//           formData,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         alert("Broker updated successfully");

//         if (inModal && onUpdateSuccess) {
//           onUpdateSuccess(res.data);
//         } else if (inModal && onClose) {
//           onClose();
//         } else {
//           navigate("/brokers");
//         }
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error saving broker");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ---------- Modal version ----------
//   if (inModal) {
//     return (
//       <div className="p-4 max-h-[80vh] overflow-y-auto">
//         <h3 className="bg-gray-100 text-gray-950 uppercase text-xs text-center mb-3 fw-bold">
//           {mode === "add" ? "Add Broker" : "Update Broker"}
//         </h3>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="broker" className="form-label small">
//               Broker Name <span className="text-danger">*</span>
//             </label>
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               id="broker"
//               name="broker"
//               value={formData.broker}
//               onChange={handleChange}
//             />
//             {error && !formData.broker && (
//               <span className="text-danger small">Broker is required</span>
//             )}
//           </div>

//           <div className="mt-3 flex justify-end gap-2">
//             <button
//               type="button"
//               className="bg-gray-400 text-white px-4 py-2 rounded"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//               disabled={loading}
//             >
//               {loading ? "Saving..." : "Save"}
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }

//   // ---------- Full Page version ----------
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex flex-col flex-1">
//         <div className="sticky top-0 z-10">
//           <Header />
//         </div>
//         <div className="flex-1 overflow-y-auto bg-gray-50 p-3">
//           <div className="ms-1">
//             <div className="card shadow-sm mt-2">
//               <div className="card-body p-3">
//                 <h3 className="bg-gray-100 text-gray-950 uppercase text-xs p-6 text-center mb-3 fw-bold">
//                   {mode === "add" ? "Add Broker" : "Update Broker"}
//                 </h3>

//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="broker" className="form-label small">
//                       Broker Name <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="input_fields form-control form-control-sm"
//                       id="broker"
//                       name="broker"
//                       placeholder="Enter broker name"
//                       value={formData.broker}
//                       onChange={handleChange}
//                     />
//                     {error && !formData.broker && (
//                       <span className="text-danger small">
//                         Broker name is required
//                       </span>
//                     )}
//                   </div>

//                   <div className="mt-3 text-end">
//                     <button
//                       className="btn btn-sm bg-blue-600 text-white px-4 py-2 rounded"
//                       style={{ width: "120px", backgroundColor: "#1c398e" }}
//                       type="submit"
//                       disabled={loading}
//                     >
//                       {loading ? "Saving..." : mode === "add" ? "Add" : "Save"}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BrokerForm;


// // Table.jsx
// import React, { useEffect, useState } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import AddForm from "./AddForm";
// import { FaEdit, FaTrash, FaImages } from "react-icons/fa";

// function Table() {
//   const [properties, setProperties] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [openDropdownId, setOpenDropdownId] = useState(null);

  
//   const [carouselImages, setCarouselImages] = useState([]);
//   const [carouselIndex, setCarouselIndex] = useState(0);

//   const [columnSearch, setColumnSearch] = useState({
//     propertyname: "",
//     broker: "",
//     bathrooms: "",
//     bedrooms: "",
//     parking: "",
//     rent: "",
//     address: "",
//     isrent: "",
//   });

//   const fetchProperties = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("http://localhost:5000/property/list", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProperties(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   const handleExportCSV = () => {
//     if (filteredProperties.length === 0) {
//       alert("No Properties to Export...");
//       return;
//     }

//     const headers = [
//       "Property",
//       "Broker",
//       "Bathrooms",
//       "Bedrooms",
//       "Parking",
//       "Market Rent",
//       "Address",
//       "Is Rented",
//     ];
//     const rows = filteredProperties.map((p) => [
//       p.propertyname,
//       p.broker,
//       p.bathrooms,
//       p.bedrooms,
//       p.parking,
//       p.rent,
//       p.address,
//       p.isrent,
//     ]);

//     const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");

//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.setAttribute("download", "properties.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure to want to delete this?");
//     if (!confirmDelete) return;
//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(`http://localhost:5000/property/delete/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setProperties(properties.filter((p) => p._id !== id));
//     } catch (err) {
//       console.error("Delete failed:", err);
//     }
//   };

//   const handleUpdateSuccess = (updatedProperty) => {
//     setProperties((prev) =>
//       prev.map((p) => (p._id === updatedProperty._id ? updatedProperty : p))
//     );
//     setShowEditModal(false); // close modal
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".relative")) {
//         setOpenDropdownId(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(
//         `http://localhost:5000/property/update/${selectedProperty._id}`,
//         selectedProperty,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setShowEditModal(false);
//       fetchProperties(); 
//     } catch (err) {
//       console.error("Update failed:", err);
//     }
//   };

//   const filteredProperties = properties.filter((p) => {
//     const globalMatch =
//       search === "" ||
//       Object.values(p).some((val) =>
//         val?.toString().toLowerCase().includes(search.toLowerCase())
//       );

//     const columnMatch =
//       (columnSearch.propertyname === "" ||
//         p.propertyname
//           ?.toLowerCase()
//           .includes(columnSearch.propertyname.toLowerCase())) &&
//       (columnSearch.broker === "" ||
//         p.broker?.toLowerCase().includes(columnSearch.broker.toLowerCase())) &&
//       (columnSearch.bathrooms === "" ||
//         p.bathrooms?.toString().includes(columnSearch.bathrooms)) &&
//       (columnSearch.bedrooms === "" ||
//         p.bedrooms?.toString().includes(columnSearch.bedrooms)) &&
//       (columnSearch.parking === "" ||
//         p.parking
//           ?.toLowerCase()
//           .includes(columnSearch.parking.toLowerCase())) &&
//       (columnSearch.rent === "" ||
//         p.rent?.toString().includes(columnSearch.rent)) &&
//       (columnSearch.address === "" ||
//         p.address
//           ?.toLowerCase()
//           .includes(columnSearch.address.toLowerCase())) &&
//       (columnSearch.isrent === "" ||
//         p.isrent?.toLowerCase().includes(columnSearch.isrent.toLowerCase()));

//     return globalMatch && columnMatch;
//   });

//   return (
//     <div>
//       <div className="flex justify-between">
//         <h2 className="p-4 font-bold">Buildings List</h2>

//         {/* search + buttons */}
//         <div className="flex justify-between items-center px-4 gap-3">
//           <input
//             type="text"
//             placeholder="Search"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-700"
//           />

//           <Link to={"/buildings/create"}>
//             <button className="btn btn-primary outline-none border-none rounded px-4 py-2 focus:ring-0 focus:ring-blue-800 ">
//               Add Property +
//             </button>
//           </Link>

//           {/*  Export CSV button */}
//           <button
//             onClick={handleExportCSV}
//             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
//           >
//             Export as CSV
//           </button>
//         </div>
//       </div>
//       {/* Table */}
//       <div className="fulltable overflow-x-auto shadow-md rounded-lg ml-2">
//         <div className="tablebody min-w-full max-w-[900px]">
//           <table className="min-w-[1100px] text-sm text-left text-gray-700">
//             <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
//               <tr>
//                 <th className="text-center px-4 py-3">Property</th>
//                 <th className="text-center px-4 py-3">Broker</th>
//                 <th className="text-center px-4 py-3">Bathrooms</th>
//                 <th className="text-center px-4 py-3">Bedrooms</th>
//                 <th className="text-center px-4 py-3">Parking</th>
//                 <th className="text-center px-4 py-3">Market Rent</th>
//                 <th className="text-center px-4 py-3">Address</th>

//                 <th className="text-center px-4 py-3">Is Rented</th>
//                 <th className="text-center px-4 py-3">Display</th>
//                 <th className="text-center px-4 py-3 w-40">Action</th>
//               </tr>

//               {/* column search row */}
//               <tr className="bg-gray-50">
//                 {Object.entries(columnSearch).map(([key, value]) => (
//                   <th key={key} className="text-center px-2 py-1">
//                     <input
//                       type="text"
//                       placeholder={`Search ${key}`}
//                       value={value}
//                       onChange={(e) =>
//                         setColumnSearch({
//                           ...columnSearch,
//                           [key]: e.target.value,
//                         })
//                       }
//                       className="border px-2 py-1 w-full text-xs focus:outline-none focus:ring-1 focus:ring-blue-700 rounded"
//                     />
//                   </th>
//                 ))}
//                 <th></th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredProperties.map((p) => (
//                 <tr key={p._id} className="border-b hover:bg-gray-50">
//                   <td className="text-center px-4 py-3">{p.propertyname}</td>
//                   <td className="text-center px-4 py-3">
//                     {p.broker?.broker || "N/A"}
//                   </td>
//                   <td className="text-center px-4 py-3">{p.bathrooms}</td>
//                   <td className="text-center px-4 py-3">{p.bedrooms}</td>
//                   <td className="text-center px-4 py-3">{p.parking}</td>
//                   <td className="text-center px-4 py-3">{p.rent}</td>
//                   <td className="text-center px-4 py-3">{p.address}</td>
//                   <td className="text-center px-4 py-3">{p.isrent}</td>

//                 {/* show two pic only */}
//                   <td className="flex mt-2 gap-2 justify-center">
//                     {p.images && p.images.length > 0 ? (
//                       <>
//                         {p.images.slice(0, 2).map((img, index) => (
//                           <img
//                             key={index}
//                             className="twoimages w-8 h-8 object-cover border rounded cursor-pointer hover:opacity-80"
//                             src={`http://localhost:5000/upload/${img}`}
//                             alt={`property-${index}`}
//                             onClick={() => {
                             
//                               setCarouselImages(p.images);
//                               setCarouselIndex(index);
//                             }}
//                           />
//                         ))}

//                         {/* if there are more than 2 images show a small +N button that opens the gallery at index 0 */}
//                         {p.images.length > 2 && (
//                           <button
//                             onClick={() => {
//                               setCarouselImages(p.images);
//                               setCarouselIndex(0);
//                             }}
//                             className="crimages w-8 h-8 flex items-center justify-center text-xs border rounded bg-white"
//                             title={`${p.images.length - 2} more`}
//                           >
//                             +{p.images.length - 2}
//                           </button>
//                         )}
//                       </>
//                     ) : (
//                       <span className="text-gray-400 text-sm">No images</span>
//                     )}
//                   </td>

//                   <td className="text-center px-4 py-3">
//                     <div className="relative inline-block text-left">
//                       <button
//                         onClick={() =>
//                           setOpenDropdownId(openDropdownId === p._id ? null : p._id)
//                         }
//                         className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
//                       >
//                         Action ▾
//                       </button>

//                       {openDropdownId === p._id && (
//                         <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                         
                         

//                           {/* Edit */}
//                           <button
//                             onClick={() => {
//                               setSelectedProperty(p); 
//                               setShowEditModal(true);
//                               setOpenDropdownId(null); 
//                             }}
//                             className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                           >
//                             <FaEdit className="text-blue-600" /> Edit
//                           </button>

//                           {/* Delete */}
//                           <button
//                             onClick={() => {
//                               handleDelete(p._id);
//                               setOpenDropdownId(null);
//                             }}
//                             className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                           >
//                             <FaTrash /> Delete
//                           </button>

//                            <button
//                             onClick={() => {
//                               if (p.images && p.images.length > 0) {
//                                 setCarouselImages(p.images);
//                                 setCarouselIndex(0);
//                               } else {
//                                 alert("No images to show");
//                               }
//                               setOpenDropdownId(null);
//                             }}
//                             className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                           >
//                             <FaImages className="text-green-600" /> Show Gallery
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

      
//       {showEditModal && selectedProperty && (
//         <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg w-3/4 max-h-[90vh] overflow-y-auto">
//             <AddForm
//               mode="edit"
//               id={selectedProperty._id}
//               inModal={true}
//               onClose={() => setShowEditModal(false)}
//               onUpdateSuccess={handleUpdateSuccess}
//             />
//           </div>
//         </div>
//       )}

     
//       {carouselImages.length > 0 && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
//           <div className="relative w-full max-w-4xl">
            
//             <button
//               onClick={() => { setCarouselImages([]); setCarouselIndex(0); }}
//               className="absolute top-3 right-3 z-30 hover:bg-red-500 text-white rounded-full p-2"
//               aria-label="Close"
//             >
//               ✕
//             </button>

       
//             <div className="relative flex items-center justify-center bg-transparent">
//               {/* Prev */}
//               <button
//                 onClick={() => setCarouselIndex(i => (i === 0 ? carouselImages.length - 1 : i - 1))}
//                 className="absolute left-3 top-1/2 z-30 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
//                 aria-label="Previous"
//               >
//                 ‹
//               </button>

           
//               <div className="flex items-center justify-center">
//                 <img
//                   src={
//                     carouselImages[carouselIndex] && carouselImages[carouselIndex].startsWith("http")
//                       ? carouselImages[carouselIndex]
//                       : `http://localhost:5000/upload/${carouselImages[carouselIndex]}`
//                   }
//                   alt={`carousel-${carouselIndex}`}
//                   className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-lg"
//                 />
//               </div>

//               {/* Next */}
//               <button
//                 onClick={() => setCarouselIndex(i => (i === carouselImages.length - 1 ? 0 : i + 1))}
//                 className="absolute right-3 top-1/2 z-30 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
//                 aria-label="Next"
//               >
//                 ›
//               </button>
//             </div>

//             {/* Thumbnails */}
//             <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto px-2">
//               {carouselImages.map((img, idx) => {
//                 const src = img && img.startsWith("http") ? img : `http://localhost:5000/upload/${img}`;
//                 return (
//                   <button
//                     key={idx}
//                     onClick={() => setCarouselIndex(idx)}
//                     className={`w-20 h-12 p-1 border rounded overflow-hidden ${idx === carouselIndex ? "ring-2 ring-blue-500" : "ring-0"}`}
//                   >
//                     <img src={src} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Table;


// import React, { useEffect, useState } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import AddForm from "./AddForm";
// import { useRef } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";

// function Table() {
//   const [properties, setProperties] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [openDropdownId, setOpenDropdownId] = useState(null);
//   const [carouselImages, setCarouselImages] = useState([]);
//   const [carouselIndex, setCarouselIndex] = useState([]);

//   const [columnSearch, setColumnSearch] = useState({
//     propertyname: "",
//     broker: "",
//     bathrooms: "",
//     bedrooms: "",
//     parking: "",
//     rent: "",
//     address: "",
//     isrent: "",
//   });

//   const fetchProperties = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("http://localhost:5000/property/list", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProperties(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   const handleExportCSV = () => {
//     if (filteredProperties.length === 0) {
//       alert("No Properties to Export...");
//       return;
//     }

//     const headers = [
//       "Property",
//       "Broker",
//       "Bathrooms",
//       "Bedrooms",
//       "Parking",
//       "Market Rent",
//       "Address",
//       "Is Rented",
//     ];
//     const rows = filteredProperties.map((p) => [
//       p.propertyname,
//       p.broker,
//       p.bathrooms,
//       p.bedrooms,
//       p.parking,
//       p.rent,
//       p.address,
//       p.isrent,
//     ]);

//     const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");

//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.setAttribute("download", "properties.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure to want to delete this?"
//     );
//     if (!confirmDelete) return;
//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(`http://localhost:5000/property/delete/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setProperties(properties.filter((p) => p._id !== id));
//     } catch (err) {
//       console.error("Delete failed:", err);
//     }
//   };

//   const handleUpdateSuccess = (updatedProperty) => {
//     setProperties((prev) =>
//       prev.map((p) => (p._id === updatedProperty._id ? updatedProperty : p))
//     );
//     setShowEditModal(false); // close modal
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".relative")) {
//         setOpenDropdownId(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(
//         `http://localhost:5000/property/update/${selectedProperty._id}`,
//         selectedProperty,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setShowEditModal(false);
//       fetchProperties(); // refresh list
//     } catch (err) {
//       console.error("Update failed:", err);
//     }
//   };

//   const filteredProperties = properties.filter((p) => {
//     const globalMatch =
//       search === "" ||
//       Object.values(p).some((val) =>
//         val?.toString().toLowerCase().includes(search.toLowerCase())
//       );

//     const columnMatch =
//       (columnSearch.propertyname === "" ||
//         p.propertyname
//           ?.toLowerCase()
//           .includes(columnSearch.propertyname.toLowerCase())) &&
//       (columnSearch.broker === "" ||
//         p.broker?.toLowerCase().includes(columnSearch.broker.toLowerCase())) &&
//       (columnSearch.bathrooms === "" ||
//         p.bathrooms?.toString().includes(columnSearch.bathrooms)) &&
//       (columnSearch.bedrooms === "" ||
//         p.bedrooms?.toString().includes(columnSearch.bedrooms)) &&
//       (columnSearch.parking === "" ||
//         p.parking
//           ?.toLowerCase()
//           .includes(columnSearch.parking.toLowerCase())) &&
//       (columnSearch.rent === "" ||
//         p.rent?.toString().includes(columnSearch.rent)) &&
//       (columnSearch.address === "" ||
//         p.address
//           ?.toLowerCase()
//           .includes(columnSearch.address.toLowerCase())) &&
//       (columnSearch.isrent === "" ||
//         p.isrent?.toLowerCase().includes(columnSearch.isrent.toLowerCase()));

//     return globalMatch && columnMatch;
//   });

//   return (
//     <div>
//       <div className="flex justify-between">
//         <h2 className="p-4 font-bold">Buildings List</h2>

//         {/* search + buttons */}
//         <div className="flex justify-between items-center px-4 gap-3">
//           <input
//             type="text"
//             placeholder="Search"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-700"
//           />

//           <Link to={"/buildings/create"}>
//             <button className="btn btn-primary outline-none border-none rounded px-4 py-2 focus:ring-0 focus:ring-blue-800 ">
//               Add Property +
//             </button>
//           </Link>

//           {/*  Export CSV button */}
//           <button
//             onClick={handleExportCSV}
//             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
//           >
//             Export as CSV
//           </button>
//         </div>
//       </div>
//       {/* Table */}
//       <div className="fulltable overflow-x-auto shadow-md rounded-lg ml-2">
//         <div className="tablebody min-w-full max-w-[900px]">
//           <table className="min-w-[1100px] text-sm text-left text-gray-700">
//             <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
//               <tr>
//                 <th className="text-center px-4 py-3">Property</th>
//                 <th className="text-center px-4 py-3">Broker</th>
//                 <th className="text-center px-4 py-3">Bathrooms</th>
//                 <th className="text-center px-4 py-3">Bedrooms</th>
//                 <th className="text-center px-4 py-3">Parking</th>
//                 <th className="text-center px-4 py-3">Market Rent</th>
//                 <th className="text-center px-4 py-3">Address</th>

//                 <th className="text-center px-4 py-3">Is Rented</th>
//                 <th className="text-center px-4 py-3">Display</th>
//                 <th className="text-center px-4 py-3 w-40">Action</th>
//               </tr>

//               {/* column search row */}
//               <tr className="bg-gray-50">
//                 {Object.entries(columnSearch).map(([key, value]) => (
//                   <th key={key} className="text-center px-2 py-1">
//                     <input
//                       type="text"
//                       placeholder={`Search ${key}`}
//                       value={value}
//                       onChange={(e) =>
//                         setColumnSearch({
//                           ...columnSearch,
//                           [key]: e.target.value,
//                         })
//                       }
//                       className="border px-2 py-1 w-full text-xs focus:outline-none focus:ring-1 focus:ring-blue-700 rounded"
//                     />
//                   </th>
//                 ))}
//                 <th></th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredProperties.map((p) => (
//                 <tr key={p._id} className="border-b hover:bg-gray-50">
//                   <td className="text-center px-4 py-3">{p.propertyname}</td>
//                   <td className="text-center px-4 py-3">
//                     {p.broker?.broker || "N/A"}
//                   </td>
//                   <td className="text-center px-4 py-3">{p.bathrooms}</td>
//                   <td className="text-center px-4 py-3">{p.bedrooms}</td>
//                   <td className="text-center px-4 py-3">{p.parking}</td>
//                   <td className="text-center px-4 py-3">{p.rent}</td>
//                   <td className="text-center px-4 py-3">{p.address}</td>
//                   <td className="text-center px-4 py-3">{p.isrent}</td>
//                   <td className="flex mt-2 gap-2 justify-center">
//                     {p.images && p.images.length > 0 ? (
//                       p.images.map((img, index) => (
//                         <img
//                           key={index}
//                           className="crimages w-8 h-8 object-cover border rounded cursor-pointer hover:opacity-80"
//                           src={`http://localhost:5000/upload/${img}`}
//                           alt={`property-${index}`}
//                           onClick={() => {
//                             setCarouselImages(p.images);
//                             setCarouselIndex(index);
//                           }}
//                         />
//                       ))
//                     ) : (
//                       <span className="text-gray-400 text-sm">No images</span>
//                     )}
//                   </td>

//                   <td className="text-center px-4 py-3">
//                     <div className="relative inline-block text-left">
//                       <button
//                         onClick={() =>
//                           setOpenDropdownId(
//                             openDropdownId === p._id ? null : p._id
//                           )
//                         }
//                         className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
//                       >
//                         Action ▾
//                       </button>

//                       {openDropdownId === p._id && (
//                         <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
//                           <button
//                             onClick={() => {
//                               setSelectedProperty(p); // set property for editing
//                               setShowEditModal(true);
//                               setOpenDropdownId(null); // close dropdown after click
//                             }}
//                             className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                           >
//                             <FaEdit className="text-blue-600" /> Edit
//                           </button>
//                           <button
//                             onClick={() => {
//                               handleDelete(p._id);
//                               setOpenDropdownId(null); // close dropdown after delete
//                             }}
//                             className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                           >
//                             <FaTrash /> Delete
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/* Edit Modal */}
//       {showEditModal && selectedProperty && (
//         <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg w-3/4 max-h-[90vh] overflow-y-auto">
//             <AddForm
//               mode="edit"
//               id={selectedProperty._id}
//               inModal={true}
//               onClose={() => setShowEditModal(false)}
//               onUpdateSuccess={handleUpdateSuccess}
//             />
//           </div>
//         </div>
//       )}
//       ,
    
// {carouselImages.length > 0 && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
//     <div className="relative w-full max-w-4xl">
//       {/* Close (top-right of modal) */}
//       <button
//         onClick={() => { setCarouselImages([]); setCarouselIndex(0); }}
//         className="absolute top-3 right-3 z-30 hover:bg-red-500 text-white rounded-full p-2"
//         aria-label="Close"
//       >
//         ✕
//       </button>

//       {/* Image area */}
//       <div className="relative flex items-center justify-center bg-transparent">
//         {/* Prev */}
//         <button
//           onClick={() => setCarouselIndex(i => (i === 0 ? carouselImages.length - 1 : i - 1))}
//           className="absolute left-3 top-1/2 z-30 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
//           aria-label="Previous"
//         >
//           ‹
//         </button>

//         {/* Main image: object-contain ensures it fits the box without cropping/stretching */}
//         <div className="flex items-center justify-center">
//           <img
//             src={
//               carouselImages[carouselIndex] && carouselImages[carouselIndex].startsWith("http")
//                 ? carouselImages[carouselIndex]
//                 : `http://localhost:5000/upload/${carouselImages[carouselIndex]}`
//             }
//             alt={`carousel-${carouselIndex}`}
//             className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Next */}
//         <button
//           onClick={() => setCarouselIndex(i => (i === carouselImages.length - 1 ? 0 : i + 1))}
//           className="absolute right-3 top-1/2 z-30 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
//           aria-label="Next"
//         >
//           ›
//         </button>
//       </div>

//       {/* Thumbnails */}
//       <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto px-2">
//         {carouselImages.map((img, idx) => {
//           const src = img && img.startsWith("http") ? img : `http://localhost:5000/upload/${img}`;
//           return (
//             <button
//               key={idx}
//               onClick={() => setCarouselIndex(idx)}
//               className={`w-20 h-12 p-1 border rounded overflow-hidden ${idx === carouselIndex ? "ring-2 ring-blue-500" : "ring-0"}`}
//             >
//               <img src={src} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// )}

//     </div>
//   );
// }

// export default Table;



// import './Navbar.css'
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar bg-body-tertiary px-3">
//       <form className="container-fluid justify-content-start">
//         {!token ? (
//           <>
//             <Link to="/signup" className="btn font-sans ">
//               Sign up
//             </Link>
//             <Link to="/login" className="btn btn-sm btn-outline-secondary">
//               Login
//             </Link>
//           </>
//         ) : (
//           <>
//             <Link to="/home" className="li me-2" >
//               Home
//             </Link>
          
//             <button
//               type="button"
//               className="btn btn-sm btn-outline-danger  absolute right-10 top-1"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </>
//         )}
//       </form>
//     </nav>
//   );
// }

// export default Navbar;



// import{Link} from "react-router-dom"
// import Home from './Home'

// function Navbar(){
//     return(
//         <div>
//             <nav style={{ background: "#333", padding: "10px" }}>
//       <Link to="/signup" style={{ marginRight: "10px", color: "white" }}>
//         Signup
//       </Link>
//       <Link to="/login" style={{ color: "white" }}>
//         Login
//       </Link>
//     </nav>
//         </div>
//     )
// }
// export default Navbar;


  // <div className="card shadow-sm w-50 h-64 mt-2">
  //                   <div className="card-body p-3" >
  //                  <div className="flex relative ">
  //                   <input className="border-none outline-none focus:ring-1 focus:ring-blue-700  form-control forn-control-sm"
  //                    {...getCardNumberProps()} placeholder="Card Number" required />

  //                  <svg  className="absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 text-gray-400"
  //                   {...getCardImageProps({images})}/>
  //                  </div>
  //                  <div className="flex mt-4 gap-2">
  //                   <input className="border-none outline-none form-control forn-control-sm"
  //                   {...getExpiryDateProps()} placeholder="MM/YY" required/>
  //                   <input className="border-none outline-none form-control forn-control-sm"
  //                    {...getCVCProps()} placeholder="CVC" required/>
  //                  </div>
  //                  <div className="mt-4 flex justify-center items-center cursor-pointer">
  //                   <button className="btn btn-primary w-2xl"
  //                   type="submit"
  //                   disabled={loading || formData.rent}
  //                   onClick={handlePayment}
  //                   >
  //                   {loading ? "wait" : `Pay  ${formData.rent}usd`}
  //                   </button>
  //                  </div>
  //                   </div>
  //                 </div>

 // import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ListedProperties() {
//   const [rented, setRented] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [customers, setCustomers] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState("");

//   

//   // ✅ Filter by customer name
//   const handleCustomerChange = (e) => {
//     const value = e.target.value;
//     setSelectedCustomer(value);

//     if (value === "") {
//       setFiltered(rented);
//     } else {
//       const filteredList = rented.filter(
//         (item) => item.customer?.name === value
//       );
//       setFiltered(filteredList);
//     }
//   };

//   return (
//     <div className="p-2">
//       {/* Header with Filter */}
//       <div className="flex items-center justify-between p-4">
//         <div className="flex items-center gap-3">
         
//  <h2 className="font-bold text-lg">Rented Properties</h2>
          
//         </div>
//             <select
//             value={selectedCustomer}
//             onChange={handleCustomerChange}
//             className="border border-gray-300 rounded px-2 py-2"
//           >
//             <option value="">All Customers</option>
//             {customers.map((cust, index) => (
//               <option key={index} value={cust.name}>
//                 {cust.name}
//               </option>
//             ))}
//           </select>
       
//       </div>

//       {/* Table */}
//       <div className="fulltable overflow-x-auto shadow-md rounded-lg ml-2">
//         <table className="min-w-[1100px] text-sm text-left text-gray-700">
//           <thead className="bg-gray-100 text-gray-700 uppercase">
//             <tr>
//               <th className="px-2 py-2">Property Name</th>
//               <th className="px-2 py-2">Rent $</th>
//               <th className="px-2 py-2">Customer Name</th>
//               <th className="px-2 py-2">Customer Address</th>
//               <th className="px-2 py-2">Contract Start</th>
//               <th className="px-2 py-2">Contract End</th>
//               <th className="px-4 py-2">Status</th>
//               <th className="px-2 py-2">Contract</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filtered.length > 0 ? (
//               filtered.map((item, index) => (
//                 <tr key={index} className="border-b hover:bg-gray-50">
//                   <td className="px-4 py-2">
//                     {item.property?.propertyname || "N/A"}
//                   </td>
//                   <td className="px-4 py-2">
//                     {item.property?.rent || "N/A"}
//                   </td>
//                   <td className="px-4 py-2">{item.customer?.name || "N/A"}</td>
//                   <td className="px-4 py-2">{item.customer?.address || "N/A"}</td>
//                   <td className="px-4 py-2">
//                     {item.contract?.startDate
//                       ? new Date(item.contract.startDate).toLocaleDateString()
//                       : "N/A"}
//                   </td>
//                   <td className="px-4 py-2">
//                     {item.contract?.endDate
//                       ? new Date(item.contract.endDate).toLocaleDateString()
//                       : "N/A"}
//                   </td>
//                   <td className="px-4 py-2">
//                     <span
//                       className={`px-2 py-1 rounded text-white ${
//                         item.contractStatus === "ended"
//                           ? "bg-red-600"
//                           : "bg-green-600"
//                       }`}
//                     >
//                       {item.contractStatus}
//                     </span>
//                   </td>
//                   <td className="px-4 py-2">
//                     <span
//                       className={`px-2 py-1 rounded text-white ${
//                         item.paymentStatus === "paid"
//                           ? "bg-green-600"
//                           : item.paymentStatus === "pending"
//                           ? "bg-yellow-500 text-black"
//                           : "bg-red-600"
//                       }`}
//                     >
//                       {item.paymentStatus || "N/A"}
//                     </span>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="8" className="text-center text-gray-500 py-3">
//                   No rented properties found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default ListedProperties;

  