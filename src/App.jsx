// import './App.css'
import "./index.css";

import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import PublicRoute from "./Routes/PublicRoute.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import BrokerForm from "./Components/BrokerForm.jsx";
import Buildings from "./Components/Buildings.jsx";
import AddForm from "./Components/AddForm.jsx";
import SidebarBroker from "./Components/SidebarBroker.jsx";
import SidebarRentedProperties from "./Components/SidebarRentedProperties.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51PQNwXCezvYlRgTYbcLb9jBbFx6C2uzRyb9PX1wZruDT6hzJSIfSN5Dvh8Yg9g3MnOSF1XuCTPJRJTgJaqVCzvfn00oNRrcHjy")
import SidebarListedProperties from "./Components/SidebarListedProperties.jsx";


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Elements stripe = {stripePromise}>
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />}>
            {" "}
          </Route>

          <Route
            path="/login"
            element={
              <PublicRoute>
                {" "}
                <Login />{" "}
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                {" "}
                <Signup />{" "}
              </PublicRoute>
            }
          >
            {" "}
          </Route>
          <Route
            path="/home"
            element={
              <PrivateRoute allowedRoles={["admin", "user"]}>
                {" "}
                <Home />{" "}
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/buildings"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
             
                <Buildings></Buildings>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/buildings/create"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <AddForm mode="add" />
              </PrivateRoute>
            }
          />
          <Route
             path="/buildings/edit/:id"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <AddForm mode="edit" />
              </PrivateRoute>
            }
          />
          <Route
             path="/broker"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
             <SidebarBroker></SidebarBroker>
              </PrivateRoute>
            }
          />
          <Route
             path="/broker/create"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
            <BrokerForm mode = "add"/>
              </PrivateRoute>
            }
          />
          <Route
             path="/broker/edit/:id"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
            <BrokerForm mode = "edit"/>
              </PrivateRoute>
            }
          />
          <Route
             path="/rented"
            element={
              <PrivateRoute allowedRoles={["admin", "user"]}>
           <SidebarRentedProperties></SidebarRentedProperties>
              </PrivateRoute>
            }
          />
          <Route
          path = "/rented-list"
          element ={
            <PrivateRoute  allowedRoles={["admin", "user"]}>
            <SidebarListedProperties></SidebarListedProperties>
            </PrivateRoute>
          }
          
          />
          
        </Routes>
      </BrowserRouter>
      </Elements>
      
    </div>
  );
}

export default App;
