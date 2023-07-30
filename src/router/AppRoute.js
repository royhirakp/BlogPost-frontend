// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LoginRegister from "../pages/LoginRegister";
import WelcomePage from "../pages/WelcomePage";
import FullPost from "../pages/FullPost";
const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />

          <Route path="/login" element={<LoginRegister />} />

          <Route path="/home" element={<Home />} />
          <Route path="/fullPost" element={<FullPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoute;
