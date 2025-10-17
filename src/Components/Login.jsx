import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import "./Navbar.css";

import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

 const navigate = useNavigate();

const API_URL = import.meta.env.VITE_API_URL;

const handleChange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMsg("");

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Server Response:", result);

    if (!response.ok) {
      setMsg(result.message || result.error);
      setLoading(false);
      return;
    }
    if (result.token) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("name", result.user?.name || "User");
      localStorage.setItem("role", result.user?.role || "user");
      const userRole = result.role || result.user?.role || "user";

      if (userRole === "admin") {
        navigate("/buildings");
      } else {
        navigate("/rented");
      }
    }
    setMsg(result.message);
  } catch (err) {
    setMsg("Error: " + err.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      <div className="auth-page-wrapper pt-4">
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
      </div>
      <div className="auth-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mt-sm-5 mb-4 text-white-50">
                <div>
                  <img
                    className="d-inline-block auth-logo"
                    src="assets/images/logo-light.png"
                    alt=""
                    height={20}
                  />
                </div>

                {/* <p className="mt-3 fs-15 fw-medium">
                                    Premium Admin &amp; Dashboard Template
                                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end row */}
      <div className=" cards row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="cardtwo card mt-2 card-bg-fill">
            <div className="card-body p-4">
              <div className="text-center mt-2">
                <h5 className="text-primary">Welcome Back !</h5>
                <p className="text-muted">Log in to continue</p>
              </div>
              <div className="p-2 mt-4">
                <form
                  onSubmit={handleSubmit}
                  action="https://themesbrand.com/velzon/html/master/index.html"
                >
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      onChange={handleChange}
                    />
                  </div>
                  <p
                    className={`text-sm text-center  ${
                      msg.includes("successful")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {msg}
                  </p>
                  <div className="mb-3">
                    <div className="float-end">
                      {/* <a href="auth-pass-reset-basic.html" className="text-muted">
                                                Forgot password?
                                            </a> */}
                    </div>
                    <label className="form-label" htmlFor="password-input">
                      Password
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

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="auth-remember-check"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="auth-remember-check"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="mt-4">
                    <button
                      className="btn btn-success w-100"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Loging in..." : "Log in"}
                    </button>
                  </div>
                  {/* <div className="mt-4 text-center">
                                        <div className="signin-other-title">
                                            <h5 className="fs-13 mb-4 title">Sign In with</h5>
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-icon waves-effect waves-light"
                                            >
                                                <i className="ri-facebook-fill fs-16" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-icon waves-effect waves-light"
                                            >
                                                <i className="ri-google-fill fs-16" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-dark btn-icon waves-effect waves-light"
                                            >
                                                <i className="ri-github-fill fs-16" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-icon waves-effect waves-light"
                                            >
                                                <i className="ri-twitter-fill fs-16" />
                                            </button>
                                        </div>
                                    </div> */}
                </form>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>

      <div className="mt-2 text-center">
        <p className="mb-0">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="fw-semibold text-primary text-decoration-underline"
          >
            Signup
          </Link>
        </p>
      </div>

      {/* end row */}
      {/* end container */}
      {/* end auth page content */}

      {/* footer */}
      {/* <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <p className="foot mb-0 text-muted">
                                    © Velzon. Crafted with <i className="mdi mdi-heart text-danger" />{" "}
                                    by Themesbrand
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}
    </>
  );
}

export default Login;

//  <div className="w-full h-screen flex justify-center items-center bg-[#f1f1f1]">
//       <div className="formlog bg-white rounded-lg shadow-md w-[400px] min-h-[300px] p-10">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Login
//         </h2>

//         <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

//           <div>
//             <label
//               htmlFor="email"
//               className="block text-lg font-medium text-gray-700 mb-1"
//             >
//               Email
//             </label>
//             <input
//               className=" fields w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter your Email"
//               required
//               onChange={handleChange}
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-lg font-medium text-gray-700 mb-1"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 className="fields w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 id="password"
//                 placeholder="Enter your Password"
//                 required
//                 onChange={handleChange}
//               />

//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-4 text-gray-500 hover:text-gray-700"
//               >
//                 {showPassword ? (
//                   <EyeSlashIcon className="h-5 w-5" />
//                 ) : (
//                   <EyeIcon className="h-5 w-5" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="logbtn w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         {msg && <p className="text-center text-red-500 mt-4">{msg}</p>}
//       </div>
//     </div>
