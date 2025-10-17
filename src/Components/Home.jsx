import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Table from "./Table";
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar";
import Header from "./Header";
function Home() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
 

 const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    } else {
      fetch(`${API_URL}/auth/home`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .catch((err) => console.error("Error: " + err.message));
    }
  }, [navigate, API_URL]);


  return (
    <div>
         <div >
        
 <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <Header />
      </div>
    </div>

    </div>

    </div>
   
  );
}

export default Home;
