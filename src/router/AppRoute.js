// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LoginRegister from "../pages/LoginRegister";
import WelcomePage from "../pages/WelcomePage";
const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />

          <Route path="/login" element={<LoginRegister />} />

          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoute;
