import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Navbar.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";

function BrokerForm({ mode = "add" }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [brokers, setBrokers] = useState("");
  const { id } = useParams();

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (mode === "edit" && id) {
      const token = localStorage.getItem("token");
      axios
        .get(`${API_URL}/broker/getbrokers/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setBrokers(res.data.broker || ""))
        .catch((err) => console.error(err));
    }
  }, [mode, id, API_URL]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!brokers.trim()) {
      setError(true);
      return;
    }

    setError(false);
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (mode === "add") {
        await axios.post(
          `${API_URL}/broker/addbroker`,
          { broker: brokers },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        await axios.put(
          `${API_URL}/broker/updatebroker/${id}`,
          { broker: brokers },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      navigate("/broker");
    } catch (err) {
      console.error("Error saving broker:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <div className="sticky top-0 z-10">
            <Header />
          </div>
          <div className="flex-1 overflow-y-auto bg-gray-50 p-3 flex justify-center">
            <div className="w-50 ms-20">
              <div className="card shadow-sm mt-2">
                <div className="card-body p-3">
                  <h3 className="addheading bg-gray-100 text-gray-950 uppercase text-xs p-6 text-center mb-3 fw-bold">
                    {mode === "add" ? "Add Broker" : "Update Broker"}
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-2">
                      <div className="col-md-12">
                        <label
                          htmlFor="brokername"
                          className="form-label small"
                        >
                          Broker Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="input_fields form-control form-control-sm"
                          id="broker"
                          name="broker"
                          placeholder="Enter Broker name"
                          value={brokers || ""}
                          onChange={(e)=> setBrokers(e.target.value)}
                        />

                        {error && (
                          <span className="text-danger small">
                            field is required
                          </span>
                        )}
                        {serverError && <span className="text-danger small">{serverError}</span>}
                      </div>

                      <div className="col-md-12 d-flex justify-end">
                        <button
                        className="btn btn-primary px-4 py-2 rounded border-none"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? mode === "add" ? "Saving" : "Updating" : mode === "add" ? "Add Broker" : "Update"}
                      </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrokerForm;






                        // <div>
                        //   <div>
                        //     <label className="form-label small" htmlFor="propertyname">Property <span className="text-danger">*</span></label>
                        //   <select name="propertyname" id="propertyname"
                        //   value={selectedProperty}
                        //   onChange={(e)=> setSelectedProperty(e.target.value)}
                        //   className="form-control form-control-sm"
                        //   >
                        //     <option value="">--Select Propertyname</option>
                        //     {property.map((p)=>(
                        //       <option key={p._id} value={p._id}>
                        //         {p.propertyname}
                        //       </option>
                        //     ))}
                        //   </select>
                            
                        // {error && !selectedProperty &&(
                        //   <span className="text-danger small">
                        //     field is required
                        //   </span>
                        // )}
                        // {serverError && <span className="text-danger small">{serverError}</span>}
                        //   </div>
                        // </div>
                        //     <div>
                        //     <label className="form-label small" htmlFor="address">Address <span className="text-danger">*</span></label>
                        //   <select name="address" id="address"
                        //   value={address}
                        //   onChange={(e)=> setAddress(e.target.value)}
                        //   className="form-control form-control-sm"
                        //   >
                        //     <option value="">--Select Address--</option>
                        //     {property.map((p)=>(
                        //       <option key={p._id} value={p._id}>
                        //         {p.address}
                        //       </option>
                        //     ))

                        //     }
                        //   </select>
                            
                        // {error && !address &&(
                        //   <span className="text-danger small">
                        //     field is required
                        //   </span>
                        // )}
                        // {serverError && <span className="text-danger small">{serverError}</span>}
                        //   </div>

                     




