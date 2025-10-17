import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Navbar.css";
import Swal from "sweetalert2";

function AddForm({
  mode = "add",
  id: propId,
  inModal = false,
  onClose,
  onUpdateSuccess,
}) {
  const navigate = useNavigate();
  const params = useParams();
  const id = propId || params.id;
  const [brokers, setBrokers] = useState([]);
  const modalRef = useRef(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState([]);
  const [images, setImages] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);
  const [property, setProperty] = useState(null);
  const [formData, setFormData] = useState({
    propertyname: "",
    broker: "",
    bathrooms: "",
    bedrooms: "",
    parking: "",
    rent: "",
    address: "",
    isrent: "No",
  });

  const API_URL = import.meta.env.VITE_API_URL;

  //for image file change
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const newPreview = files.map((file) => ({
      src: URL.createObjectURL(file),
      isNew: true,
      file,
    }));

    setPreview((prev) => [...prev, ...newPreview]);
    setImages((prev) => [...prev, ...files]);
  };

  // fetch property for edit
  useEffect(() => {
    if (mode === "edit" && id) {
      const fetchOne = async () => {
        try {
          const token = localStorage.getItem("token");
          const res = await axios.get(`${API_URL}/property/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setFormData({
            propertyname: res.data.propertyname || "",
            broker: res.data.broker || "",
            bathrooms: res.data.bathrooms || "",
            bedrooms: res.data.bedrooms || "",
            parking: res.data.parking || "",
            rent: res.data.rent || "",
            address: res.data.address || "",
            isrent: res.data.isrent || "No",
          });
          
          setProperty(res.data);
          if (res.data.images && Array.isArray(res.data.images)) {
  setPreview(
    res.data.images.map((imgUrl) => ({
      src: imgUrl, 
      isNew: false,
      filename: imgUrl, 
    }))
  );



          }
        } catch (err) {
          console.error("Failed to fetch property", err);
        }
      };
      fetchOne();
    }
  }, [mode, id, API_URL]);

  // useEffect(() => {
  //   if (property && property.images) {
  //     setPreview(
  //       property.images.map((img) => ({
  //         src: `${API_URL}/upload/${img}`,
  //         isNew: false,
  //         filename: img,
  //       }))
  //     );
  //   }
  // }, [property, API_URL]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // to click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        if (onClose) onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // const removePreview = (index) => {
  //   setPreview((prev) => {
  //     const target = prev[index];

  //     if (!target.isNew) {
  //       setRemovedImages((r) => [...r, target.filename]);
  //     } else {
  //       setImages((prevFiles) =>
  //         prevFiles.filter((file) => file !== target.file)
  //       );
  //     }

  //     return prev.filter((_, i) => i !== index);
  //   });
  // };

  const removePreview = (index) => {
  setPreview((prev) => {
    const target = prev[index];

    if (!target.isNew) {
      // Existing image marked for deletion
      setRemovedImages((r) => [...r, target.filename]);
    } else {
      // New image not yet uploaded, remove from images array
      setImages((prevFiles) =>
        prevFiles.filter((file) => file !== target.file)
      );
    }

    // Remove from preview
    return prev.filter((_, i) => i !== index);
  });
};


  // fetch active brokers from mongo db
  useEffect(() => {
    const fetchBrokers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/broker/broker/active`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBrokers(res.data);
      } catch (err) {
        console.error("Failed to fetch brokers", err);
      }
    };
    fetchBrokers();
  }, [API_URL]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (
  //     !formData.propertyname ||
  //     !formData.broker ||
  //     !formData.bathrooms ||
  //     !formData.bedrooms ||
  //     !formData.parking ||
  //     !formData.rent ||
  //     !formData.address ||
  //     (mode === "add" && images.length === 0)
  //   ) {
  //     setError(true);
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const token = localStorage.getItem("token");
  //     const data = new FormData();
  //     images.forEach((file) => data.append("images", file));

  //     Object.keys(formData).forEach((key) => {
  //       data.append(key, formData[key]);
  //     });
  //     if (removedImages.length > 0) {
  //       data.append("removedImages", JSON.stringify(removedImages));
  //     }

  //     if (mode === "add") {
  //       const res = await axios.post(`${API_URL}/property/add`, data, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });

  //       Swal.fire({
  //         title: "Success!",
  //         text: "Property added successfully 🎉",
  //         icon: "success",
  //         confirmButtonText: "OK",
  //       });

  //       if (inModal && onUpdateSuccess) {
  //         onUpdateSuccess(res.data);
  //       } else if (inModal && onClose) {
  //         onClose();
  //       } else {
  //         navigate("/buildings");
  //       }
  //     } else {
  //       const res = await axios.put(`${API_URL}/property/update/${id}`, data, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       alert("Property updated successfully");

  //       if (inModal && onUpdateSuccess) {
  //         onUpdateSuccess(res.data);
  //       } else if (inModal && onClose) {
  //         onClose();
  //       } else {
  //         navigate("/buildings");
  //       }
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("Error saving property");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.propertyname ||
    !formData.broker ||
    !formData.bathrooms ||
    !formData.bedrooms ||
    !formData.parking ||
    !formData.rent ||
    !formData.address ||
    (mode === "add" && images.length === 0)
  ) {
    setError(true);
    return;
  }

  setLoading(true);
  try {
    const token = localStorage.getItem("token");
    const data = new FormData();

    // append new images only
    images.forEach((file) => data.append("images", file));

    // append form fields
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    // append removed images (existing ones marked for deletion)
    if (removedImages.length > 0) {
      data.append("removedImages", JSON.stringify(removedImages));
    }

    if (mode === "add") {
      const res = await axios.post(`${API_URL}/property/add`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        title: "Success!",
        text: "Property added successfully 🎉",
        icon: "success",
        confirmButtonText: "OK",
      });

      if (inModal && onUpdateSuccess) onUpdateSuccess(res.data);
      else if (inModal && onClose) onClose();
      else navigate("/buildings");
    } else {
      const res = await axios.put(`${API_URL}/property/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        title: "Success!",
        text: "Property updated successfully 🎉",
        icon: "success",
        confirmButtonText: "OK",
      });

      if (inModal && onUpdateSuccess) onUpdateSuccess(res.data);
      else if (inModal && onClose) onClose();
      else navigate("/buildings");
    }
  } catch (err) {
    console.error(err);
    Swal.fire({
      title: "Error",
      text: "Failed to save property",
      icon: "error",
    });
  } finally {
    setLoading(false);
  }
};


  // ---------- Modal Version ----------
  if (inModal) {
    return (
      <div className="fixed inset-0  flex items-center justify-center z-50">
        <div
          ref={modalRef}
          className="bg-white p-4 rounded shadow-lg max-h-[80vh] overflow-y-auto relative"
        >
          <button
            onClick={onClose}
            className="absolute top-1 right-1 bg-red-500 px-2 py-2 rounded text-white"
          >
            ✕
          </button>

          <h3 className="addheading bg-gray-100 text-gray-950 uppercase text-xs text-center mb-3 fw-bold">
            {mode === "add" ? "Add Property" : "Update Property"}
          </h3>

          <form onSubmit={handleSubmit}>
            {/* About Property */}
            <h5 className="fw-bold mb-2">About Property</h5>
            <div className="row g-2">
              <div className="col-md-4">
                <label htmlFor="propertyname" className="form-label small">
                  Property Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="propertyname"
                  name="propertyname"
                  value={formData.propertyname}
                  onChange={handleChange}
                />
                {error && !formData.propertyname && (
                  <span className="text-danger small">Required</span>
                )}
              </div>
              <div className="col-md-4">
                <label htmlFor="address" className="form-label small">
                  Address <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {error && !formData.address && (
                  <span className="text-danger small">Required</span>
                )}
              </div>

              {/* <div className="col-md-4">
              <label htmlFor="image" className="form-label small">
                Upload File <span className="text-danger">*</span>
              </label>
              <input
                type="file"
                className="form-control form-control-sm cursor-pointer input_fields"
                id="image"
                name="image"
                onChange={handleFileChange}
              />
              {error && !formData.image && (
                <span className="text-danger small">Image is required</span>
              )}
            </div> */}
              <div className="col-md-4">
                <label htmlFor="images" className="form-label small">
                  Upload File <span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  className="form-control form-control-sm input_fields"
                  id="images"
                  name="images"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                />
                {preview.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {preview.map((item, index) => (
                      <div key={index} className="relative inline-block">
                        <button
                          type="button"
                          className="absolute top-1 right-1 bg-red-500 text-white px-1 rounded"
                          onClick={() => removePreview(index)}
                        >
                          ✕
                        </button>
                        <img
                          src={item.src}
                          alt={`preview-${index}`}
                          className="w-14 h-14 object-cover border rounded"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Facilities */}
            <h5 className="fw-bold mt-3 mb-2">Facilities</h5>
            <div className="row g-2">
              <div className="col-md-4">
                <label htmlFor="bathrooms" className="form-label small">
                  Bathrooms
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="bathrooms"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="bedrooms" className="form-label small">
                  Bedrooms
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="bedrooms"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="parking" className="form-label small">
                  Parking
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="parking"
                  name="parking"
                  value={formData.parking}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Market */}
            <h5 className="fw-bold mt-3 mb-2">Market</h5>
            <div className="row g-2">
              <div className="col-md-6">
                <label htmlFor="broker" className="form-label small">
                  Broker <span className="text-danger">*</span>
                </label>
                <select
                  id="broker"
                  name="broker"
                  className="form-control form-control-sm"
                  value={formData.broker}
                  onChange={handleChange}
                >
                  <option value="">-- Select Broker --</option>
                  {brokers.map((b) => (
                    <option key={b._id} value={b._id}>
                      {b.broker}
                    </option>
                  ))}
                </select>

                {error && !formData.broker && (
                  <span className="text-danger small">Broker is required</span>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="rent" className="form-label small">
                  Market Rent
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="rent"
                  name="rent"
                  value={formData.rent}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-3 flex justify-end gap-2">
              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
                disabled={loading}
              >
                {loading ? "Saving..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // ---------- Full Page Version ----------
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div className="sticky top-0 z-10">
          <Header />
        </div>
        <div className="flex-1 overflow-y-auto bg-gray-50 p-3">
          <div className="ms-1">
            <div className="card shadow-sm mt-2">
              <div className="card-body p-3">
                <h3 className="addheading bg-gray-100 text-gray-950 uppercase text-xs p-6 text-center mb-3 fw-bold">
                  {mode === "add" ? "Add Property" : "Update Property"}
                </h3>
                {/* reuse same form */}
                <form onSubmit={handleSubmit}>
                  <h5 className="headheading fw-bold  mb-2">About Property</h5>
                  <div className="row g-2">
                    <div className="col-md-4">
                      <label
                        htmlFor="propertyname"
                        className="form-label small"
                      >
                        Property Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="input_fields form-control form-control-sm"
                        id="propertyname"
                        name="propertyname"
                        placeholder="Enter property name"
                        value={formData.propertyname}
                        onChange={handleChange}
                      />
                      {error && !formData.propertyname && (
                        <span className="text-danger small">
                          Property is required
                        </span>
                      )}
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="address" className="form-label small">
                        Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm input_fields"
                        id="address"
                        name="address"
                        placeholder="Enter address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      {error && !formData.address && (
                        <span className="text-danger small">
                          Address is required
                        </span>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="images" className="form-label small">
                        Upload File <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control form-control-sm input_fields"
                        id="images"
                        name="images"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                      />
                      {preview.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {preview.map((item, index) => (
                            <div key={index} className="relative inline-block">
                              <button
                                type="button"
                                className="absolute top-1 right-1 bg-red-500 px-1 text-white rounded"
                                onClick={() => removePreview(index)}
                              >
                                ✕
                              </button>
                              <img
                                src={item.src}
                                alt={`preview-${index}`}
                                className="w-16 h-16 object-cover border rounded"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {mode === "add" && error && images.length === 0 && (
                        <span className="text-danger small">
                          Image is required
                        </span>
                      )}
                    </div>
                    {/* <div className="col-md-4">
                      <label htmlFor="image" className="form-label small">
                        Upload File <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control form-control-sm input_fields"
                        id="image"
                        name="image"
                       
                        
                        onChange={handleFileChange}
                      />
                      {error && !formData.image && (
                        <span className="text-danger small">
                          Image is required
                        </span>
                      )}
                    </div> */}
                  </div>

                  {/* Facilities */}
                  <h5 className="headheading fw-bold mt-3 mb-2">Facilities</h5>
                  <div className="row g-2">
                    <div className="col-md-4">
                      <label htmlFor="bathrooms" className="form-label small">
                        Bathrooms <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control form-control-sm input_fields"
                        id="bathrooms"
                        name="bathrooms"
                        placeholder="Enter bathrooms"
                        value={formData.bathrooms}
                        onChange={handleChange}
                      />
                      {error && !formData.bathrooms && (
                        <span className="text-danger small">
                          Bathrooms are required
                        </span>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="bedrooms" className="form-label small">
                        Bedrooms <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="input_fields form-control form-control-sm"
                        id="bedrooms"
                        name="bedrooms"
                        placeholder="Enter bedrooms"
                        value={formData.bedrooms}
                        onChange={handleChange}
                      />
                      {error && !formData.bedrooms && (
                        <span className="text-danger small">
                          Bedrooms are required
                        </span>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="parking" className="form-label small">
                        Parking <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="input_fields form-control form-control-sm"
                        id="parking"
                        name="parking"
                        placeholder="Enter parking availability"
                        value={formData.parking}
                        onChange={handleChange}
                      />
                      {error && !formData.parking && (
                        <span className="text-danger small">
                          Parking is required
                        </span>
                      )}
                    </div>
                  </div>

                  {/* About Building */}
                  <h5 className="headheading fw-bold mt-3 mb-2">Market</h5>
                  <div className="row g-2">
                    <div className="col-md-6">
                      <label htmlFor="broker" className="form-label small">
                        Broker <span className="text-danger">*</span>
                      </label>
                      <select
                        id="broker"
                        name="broker"
                        className="form-control form-control-sm"
                        value={formData.broker}
                        onChange={handleChange}
                      >
                        <option value="">-- Select Broker --</option>
                        {brokers.map((b) => (
                          <option key={b._id} value={b._id}>
                            {b.broker}
                          </option>
                        ))}
                      </select>
                      {error && !formData.broker && (
                        <span className="text-danger small">
                          Broker is required
                        </span>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="rent" className="form-label small">
                        Market Rent <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="input_fields form-control form-control-sm"
                        id="rent"
                        name="rent"
                        placeholder="Enter market rent"
                        value={formData.rent}
                        onChange={handleChange}
                      />
                      {error && !formData.rent && (
                        <span className="text-danger small">
                          Rent is required
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 text-end">
                    <button
                      className="btn btn-sm btn-primary w-32 text-white px-4 py-2 rounded"
                      type="submit"
                      disabled={loading}
                    >
                      {loading
                        ? "Saving..."
                        : mode === "add"
                        ? "Add"
                        : "Update"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
