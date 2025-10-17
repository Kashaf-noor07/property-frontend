import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function CustomerForm() {
  const initialState =  {
           name : "",
          email : "",
          phonenumber : "",
          address : ""
        
        }
     const[formData , setFormData]= useState(initialState) ;
     const [error,setError] = useState(false);
     const [loading,setLoading] =  useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  
      const handleChange = (e)=> {
           setFormData({ ...formData, [e.target.name]: e.target.value });
      }


      const handleSubmit =  async (e)=> {
        e.preventDefault();
        if(
          !formData.name ||
          !formData.email ||
          !formData.phonenumber ||
          !formData.address 
        ){
          setError(true)
        }
        setLoading(true)

        try {
          const token = localStorage.getItem("token");
          const res= await axios.post(`${API_URL}/customer/addcustomer`, formData , 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setFormData(initialState);
        setError(false);
        alert("Customer added successfully")
        } catch (err) {pl.
          console.error(err)
          
        }finally{
        setLoading(false)
    }
      }
  return (
    <div>
      <h3 className="addheading bg-gray-100 text-gray-950 uppercase text-xs p-6 text-center mb-3 fw-bold">
        Customer
      </h3>
      <h5 className="fw-bold mb-3">Customer Information</h5>

      <form onSubmit={handleSubmit}>
        <div className="row">
      
          <div className="col-md-6 mb-3 pe-2">
            <label htmlFor="name" className="form-label small">
              Name<span className="text-danger small">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              className="form-control form-control-sm"
              placeholder="Enter your name"
              onChange={handleChange}
              
            />
            {error && !formData.name &&  (
              <span className='text-danger small'
              >field is required</span>
            )}
          </div>

          
          <div className="col-md-6 mb-3 ps-2">
            <label htmlFor="email" className="form-label small" >
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="form-control form-control-sm"
            />
             {error && !formData.email && (
              <span className='text-danger small'
              >field is required</span>
            )}
          </div>
        </div>


         
          <div className="col-md-12 mb-3">
            <label htmlFor="phonenumber" className="form-label small">
              Phone number <span className="text-danger">*</span>
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
              <span className='text-danger small'
              >field is required</span>
            )}
          </div>

      
          <div className="col-md-12 mb-3">
            <label htmlFor="address" className="form-label small">
              Address <span className="text-danger">*</span>
            </label>
           <textarea  className="form-control form-control-sm" 
           name="address" 
           value={formData.address}
           id="address"
            onChange={handleChange}
             placeholder='Enter address'
             ></textarea>
              {error && !formData.address && (
              <span className='text-danger small'
              >field is required</span>
            )}
          </div>
       
          
        <div className="flex justify-center items-center">
          <button type="submit" className="btn btn-primary btn-sm w-28"
          disabled={loading}
          >
            {loading ? "Submitting" : "Submit"}
          </button>
          
        </div>
      </form>
    </div>
       
  )
}

export default CustomerForm


