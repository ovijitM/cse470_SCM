// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import Login from "./screen/Login&signup/Login";
import Signup from "./screen/Login&signup/SignUp"
import Cars from "./screen/BuyCars/Carspage"
import CarDetails from "./screen/BuyCars/CarDetails"
import Rent from "./screen/Rentcars/RentPage"
import Repair from './screen/Repair/RepairPage'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/buycars" element={<Cars />} />
          <Route path="/CarDetails" element={<CarDetails/>}/>
          <Route path="/rentcars" element={<Rent/>}/>
          <Route path="/repair" element={<Repair/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

