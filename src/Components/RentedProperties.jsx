import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FaCcVisa, FaCcMastercard, FaCreditCard } from "react-icons/fa";

const stripePromise = loadStripe(
  "pk_test_51PQNwXCezvYlRgTYbcLb9jBbFx6C2uzRyb9PX1wZruDT6hzJSIfSN5Dvh8Yg9g3MnOSF1XuCTPJRJTgJaqVCzvfn00oNRrcHjy"
);

const API_URL = import.meta.env.VITE_API_URL;

function RentedProperties() {
  const initialState = {
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    startDate: "",
    endDate: "",
    selectedProperty: "",
    rent: "",
    gallery: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const stripe = useStripe();
  const elements = useElements();
  const [brand, setBrand] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Get active properties
  useEffect(() => {
    const fetchActiveProperties = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/property/active`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProperties(res.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };
    fetchActiveProperties();
  }, []);

  // ✅ Get available properties after renting
  useEffect(() => {
    const fetchAvailableProperties = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/customer/available`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProperties(res.data);
      } catch (err) {
        console.error("Error fetching available properties:", err);
      }
    };
    fetchAvailableProperties();
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    if (
      !formData.name ||
      !formData.email ||
      !formData.phonenumber ||
      !formData.address ||
      !formData.selectedProperty ||
      !formData.rent
    ) {
      Swal.fire({
        icon: "warning",
        title: "Fill All Fields",
        text: "Please complete the customer details and choose property before payment.",
      });
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${API_URL}/payment/create-payment`,
        { amount: formData.rent },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const clientSecret = res.data.clientSecret;
      const card = elements.getElement(
        CardNumberElement,
        CardCvcElement,
        CardExpiryElement
      );

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card },
      });

      if (result.error) {
        Swal.fire({
          icon: "error",
          title: "Payment Failed",
          text: result.error.message,
        });
      } else if (result.paymentIntent.status === "succeeded") {
        const paymentId = result.paymentIntent.id;
        await handleSubmit(e, paymentId);
      }
    } catch (err) {
      console.error("Payment error:", err);
      Swal.fire({
        icon: "error",
        title: "Payment Error",
        text: err.response?.data?.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e, paymentId) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phonenumber ||
      !formData.address ||
      !formData.selectedProperty ||
      !formData.rent
    ) {
      setError(true);
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const dataToSend = { ...formData, paymentId, paymentStatus: "paid" };

      await axios.post(`${API_URL}/customer/addcustomer`, dataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProperties((prev) =>
        prev.map((p) =>
          p._id === formData.selectedProperty ? { ...p, isrent: true } : p
        )
      );

      // ✅ Send email confirmation
      await axios.post(
        `${API_URL}/payment/send-email-confirmation`,
        {
          amount: formData.rent,
          email: formData.email,
          startDate: formData.startDate,
          endDate: formData.endDate,
          name: formData.name,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setFormData(initialState);
      elements.getElement(CardNumberElement).clear();
      elements.getElement(CardExpiryElement).clear();
      elements.getElement(CardCvcElement).clear();
      setError(false);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your payment has been paid successfully and property is rented to you",
        confirmButtonColor: "#3085d6",
      });
    } catch (err) {
      console.error("Error renting property:", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          err.response?.data?.message ||
          "Something went wrong while renting property!",
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row g-3">
      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-body px-4">
            <h3 className="addheading bg-gray-100 text-gray-950 uppercase text-xs p-3 text-center mb-4 fw-bold">
              Rent a Property
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 pe-md-4 border-end">
                  <h5 className="fw-bold mb-3">Customer Information</h5>

                  <div className="row">
                    <div className="col-md-6 mb-3 pe-2">
                      <label htmlFor="name" className="form-label small">
                        Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        className="form-control form-control-sm"
                        placeholder="Enter name"
                        onChange={handleChange}
                      />
                      {error && !formData.name && (
                        <span className="text-danger small">Required</span>
                      )}
                    </div>

                    <div className="col-md-6 mb-3 ps-2">
                      <label htmlFor="email" className="form-label small">
                        Email<span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                        placeholder="Enter email"
                      />
                      {error && !formData.email && (
                        <span className="text-danger small">Required</span>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phonenumber" className="form-label small">
                      Phone Number<span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      id="phonenumber"
                      name="phonenumber"
                      value={formData.phonenumber}
                      onChange={handleChange}
                      className="form-control form-control-sm"
                      placeholder="Enter number"
                    />
                    {error && !formData.phonenumber && (
                      <span className="text-danger small">Required</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address" className="form-label small">
                      Address<span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control form-control-sm"
                      name="address"
                      value={formData.address}
                      id="address"
                      onChange={handleChange}
                      placeholder="Enter address"
                    ></textarea>
                    {error && !formData.address && (
                      <span className="text-danger small">Required</span>
                    )}
                  </div>

                  <h5 className="fw-bold mb-3">Contract Information</h5>

                  <div className="row">
                    <div className="col-md-6 mb-3 pe-2">
                      <label htmlFor="startDate" className="form-label small">
                        Start Date<span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                      />
                      {error && !formData.startDate && (
                        <span className="text-danger small">Required</span>
                      )}
                    </div>

                    <div className="col-md-6 mb-3 ps-2">
                      <label htmlFor="endDate" className="form-label small">
                        End Date<span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        min={
                          formData.startDate ||
                          new Date().toISOString().split("T")[0]
                        }
                        className="form-control form-control-sm"
                      />
                      {error && !formData.endDate && (
                        <span className="text-danger small">Required</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* table */}
                <div className="col-md-6 ps-md-4">
                  <h5 className="font-bold mb-3">Available Properties</h5>

                  <div
                    className="overflow-y-auto shadow-sm rounded"
                    style={{ height: "380px" }}
                  >
                    <table
                      className="table table-hover text-center border mb-0"
                      style={{ fontSize: "0.9rem" }}
                    >
                      <thead className="bg-gray-100 text-black">
                        <tr>
                          <th className="py-2 px-3">Property Name</th>
                          <th className="py-2 px-3">Rent($)</th>
                          <th className="py-2 px-3">Image</th>
                          <th className="py-2 px-3">Status</th>
                          <th className="py-2 px-3">Select</th>
                        </tr>
                      </thead>
                      <tbody>
                        {properties.length > 0 ? (
                          properties.map((property, index) => {
                            const isrented = property.isrent;

                            return (
                              <tr
                                key={index}
                                className={`cursor-pointer ${
                                  isrented
                                    ? "bg-gray-100 text-muted opacity-60"
                                    : "hover:bg-light"
                                }`}
                                onClick={() => {
                                  if (!isrented) {
                                    setFormData({
                                      ...formData,
                                      selectedProperty: property._id,
                                      rent: property.rent,
                                      gallery: property.images?.[0] || "",
                                    });
                                  }
                                }}
                                title={
                                  isrented
                                    ? "This property is already rented"
                                    : ""
                                }
                                style={{
                                  pointerEvents: isrented ? "none" : "auto",
                                }}
                              >
                                <td className="fw-semibold py-2 px-3">
                                  {property.propertyname}
                                </td>
                                <td className="text-success fw-bold py-2 px-3">
                                  ${property.rent}
                                </td>

                                {/* <td className="py-2 px-3">
                                  {property.images &&
                                  property.images.length > 0 ? (
                                    <img
                                      src={`http://localhost:5000/upload/${property.images[0]}`}
                                      alt={property.propertyname}
                                      className="rounded shadow-sm"
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                        objectFit: "cover",
                                      }}
                                    />
                                  ) : (
                                    <span className="text-muted">No image</span>
                                  )}
                                </td>
                                <td className="fw-semibold py-2 px-3">
                                  {isrented && (
                                    <span className="ms-2 px-2 flex py-1 text-xs bg-red-100 text-red-600 rounded">
                                      Rented
                                    </span>
                                  )}
                                </td> */}
                                <td className="py-2 px-3 flex items-center justify-center gap-2">
                                  {/* First Image */}
                                  {property.images &&
                                  property.images.length > 0 ? (
                                    <img
                                      src={property.images[0]} 
                                      alt={property.propertyname}
                                      className="rounded shadow-sm"
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                        objectFit: "cover",
                                      }}
                                    />
                                  ) : (
                                    <span className="text-muted">No image</span>
                                  )}

                                  {/* Status */}
                                  <span
                                    className={`ms-2 px-2 py-1 text-xs rounded ${
                                      property.isrent
                                        ? "bg-red-100 text-red-600"
                                        : property.contractStatus === "ended"
                                        ? "bg-gray-100 text-gray-600"
                                        : "bg-green-100 text-green-600"
                                    }`}
                                  >
                                    {property.isrent
                                      ? "Rented"
                                      : property.contractStatus === "ended"
                                      ? "Ended"
                                      : "Active"}
                                  </span>
                                </td>

                                <td className="py-2 px-3">
                                  <input
                                    type="radio"
                                    name="selectedProperty"
                                    value={property._id}
                                    checked={
                                      formData.selectedProperty === property._id
                                    }
                                    readOnly
                                    disabled={isrented}
                                    className="form-check-input cursor-pointer"
                                    title={
                                      isrented
                                        ? "This property is already Rented"
                                        : ""
                                    }
                                  />
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td
                              colSpan="4"
                              className="text-center py-3 text-muted"
                            >
                              No active properties found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <h2 className=" bg-gray-50 text-gray-950 text-center uppercase text-xs p-3 mt-4 mb-4 fw-bold">
                Payment Details
              </h2>
              <div className="flex justify-center items-center">
                <div className="card flex justify-center items-center shadow-md w-[800px] mt-4">
                  <div className="card-body w-[700px] p-4">
                    <div className="relative border  rounded-md px-3 py-2 ">
                      <CardNumberElement
                        onChange={(e) => setBrand(e.brand)}
                        options={{
                          style: {
                            base: {
                              fontSize: "14px",
                              color: "#32325d",
                              "::placeholder": { color: "#aab7c4" },
                            },
                          },
                        }}
                      />
                      {brand === "visa" && (
                        <FaCcVisa className="text-blue-600 absolute right-2 top-1.5 ml-2" />
                      )}
                      {brand === "mastercard" && (
                        <FaCcMastercard className="text-red- absolute right-2 top-1.5 500 ml-2" />
                      )}
                      {!brand && (
                        <FaCreditCard className="text-gray-400 absolute right-2 top-1.5 ml-2" />
                      )}
                    </div>

                    <div className="flex gap-2 mt-3">
                      <div className="border rounded-md px-3 py-2 w-1/2 ">
                        <CardExpiryElement
                          options={{
                            style: {
                              base: {
                                fontSize: "14px",
                                color: "#32325d",
                                "::placeholder": { color: "#aab7c4" },
                              },
                            },
                          }}
                        />
                      </div>
                      <div className="border rounded-md px-3 py-2 w-1/2 ">
                        <CardCvcElement
                          options={{
                            style: {
                              base: {
                                fontSize: "14px",
                                color: "#32325d",
                                "::placeholder": { color: "#aab7c4" },
                              },
                            },
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex justify-center">
                      <button
                        type="submit"
                        onClick={handlePayment}
                        disabled={loading || !stripe}
                        className={`btn btn-primary w-full py-2 rounded-md text-white ${
                          loading ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {loading
                          ? "Processing..."
                          : `Pay ${formData.rent || ""} $ and Rent property`}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentedProperties;
