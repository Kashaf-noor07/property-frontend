import './Navbar.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [loading ,setLoading] = useState(false)
  const [message, setMessage] = useState("");
  const [error , setError] = useState("");
  const [showPassword,setShowPassword] = useState("")
  const navigate= useNavigate();
  
  const API_URL = import.meta.env.VITE_API_URL;

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

     if (!formData.name || !formData.email || !formData.password ) {
      setError(true);
      return ;
    }
   
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Server Response:", result);

      setMessage(result.message || result.error);
   if (result.message && result.message.includes("User registered successfully")) {
    navigate("/login");
}

    } catch (err) {
      setMessage("Error: " + err.message);
    } finally{
      setLoading(false);
    }
  };

  return (
    <>
  <div className="auth-page-wrapper pt-3">
    {/* auth page bg */}
    <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
      <div className="bg-overlay" />
      <div className="shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1440 120"
        >
          <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
        </svg>
      </div>
    </div>
    {/* auth page content */}
    <div className="auth-page-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mt-sm-5 mb-4 text-white-50">
              <div>
                
                  <img className="d-inline-block auth-logo" src="assets/images/logo-light.png" alt="" height={20} />
                
              </div>
             
            </div>
          </div>
        </div>
        {/* end row */}
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card mt-4 card-bg-fill">
              <div className="card-body p-4">
                <div className="text-center mt-2">
                  <h5 className="text-primary">Create New Account</h5>
                  
                </div>
                <div className="p-2 mt-4">
                  <form
                  onSubmit={handleSubmit}
                    className="needs-validation"
                    noValidate=""
                    action="https://themesbrand.com/velzon/html/master/index.html"
                  >
                  

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="useremail"
                        name='email'
                        placeholder="Enter email address"
                        required=""
                        onChange={handleChange}
                      />
                      {error && !formData.email && (
                  <span className="text-danger small">Required</span>
                )}
                      <div className="invalid-feedback">Please enter email</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Name" className="form-label">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name='name'
                        placeholder="Enter username"
                        required=""
                        onChange={handleChange}
                      />
                       {error && !formData.name && (
                  <span className="text-danger small">Required</span>
                )}
                      <div className="invalid-feedback">
                        Please enter username
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password <span className="text-danger">*</span>
                      </label>
                    <div className="position-relative auth-pass-inputgroup mb-3">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control pe-5 password-input"
                        placeholder="Enter password"
                        id="password-input"
                        name="password"
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="h-5 w-5" />
                        ) : (
                          <EyeIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    </div>
                    <div className="mb-4">
                      <p className="mb-0 fs-12 text-muted fst-italic">
                        By registering you agree to our {" "}
                        <a
                          href="#"
                          className="text-primary text-decoration-underline fst-normal fw-medium"
                        >
                          Terms of Use
                        </a>
                      </p>
                    </div>
                    
                    <div className="mt-4">
                      <button className="btn btn-success w-100" type="submit" disabled={loading}>
                        { loading? "Signing in" : "Sign up"}
                      </button>
                    </div>
                   
                  </form>
                </div>
              </div>
             
            </div>
           
           <div className="mt-2 text-center">
                <p className="mb-0">
    Already have an account?{" "}
    <Link
      to="/login"
      className="fw-semibold text-primary text-decoration-underline"
    >
      Log in
    </Link>
  </p>
</div>
          </div>
        </div>
 
      </div>
     
    </div>
    
  </div>

</>

    
  )
}

export default Signup;



//         <div className="signcontainer rounded-lg shadow-2xl">
//     <h2 className="heading text-2xl font-bold mb-6 text-center text-gray-800">Signup</h2>
//       <div className="formcontainer">
//         <form onSubmit={handleSubmit}>
//         <label className='signlabels text-lg font-medium text-gray-700' htmlFor="name">Name</label>    <br />
//         <input className="signfields"
//           type="text"
//           name="name"
//           id='name'
//           placeholder="Name"
//           required
//           onChange={handleChange}
//         />
//         <br />
//         <label className='signlabels text-lg font-medium text-gray-700' htmlFor="email">Email Address</label>  <br />
//         <input  className="signfields"
//           type="email"
//           name="email"
//           id='email'
//           placeholder="Email"
//           required
//           onChange={handleChange}
//         />
//         <br />
//     <label  className='signlabels text-lg font-medium text-gray-700' htmlFor="">Password</label>  <br />
//         <input className="btn signfields"
//           type="password"
//           name="password"
//           placeholder="Password"
//           required
//           onChange={handleChange}
//         />
//         <br />
//         <button className='formbtn' >Signup</button>
//       </form>
//       </div>
//         </div>
      

//       {/* show response */}
//       {message && <p>{message}</p>}
//     </div>

















// import { useState } from "react"


// function Signup(){
//     const [formdata, setFormdata]=useState({
//         name:"",
//         email:"",
//         password:""
//     });
// }
//     const [message, setMessage]=useState("");

//     const handlechange = (e)=>{
//         setFormdata({...formdata,[e.target.name]: e.target.value})
//     };


//     const handleSubmit = async (e) => {
//   e.preventDefault();


//   try{
//     const response = await fetch("http://localhost:5000/signup", {
//          method :"POST",
//          headers: { "Content-Type": "application/json" },
//          body: JSON.stringify(formData),
//     });
    
//   const result = await response.json();
//   setMessage(result.message || result.error);
//   }
//   catch(err){
//     setMessage("Error: " + err.message);
//   }




//     return(
//         <div>
//             <h2>Signup form</h2>
//             <form onSubmit={handleSubmit} action="">
//                 <input type="text"name="name" placeholder="Name" required onChange={handlechange} />
//                 <input type="email"name="email" placeholder="Email" required onChange={handlechange}/>
//                 <input type="password"name="password" placeholder="Password" required onChange={handlechange}/>
//                 <button>Signup</button>
//             </form>












//         </div>
//     )
// }
// export default Signup