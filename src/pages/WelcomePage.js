import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>welcome to blog post app</h1>
      <Button
        style={{
          border: "1px solid",
        }}
        onClick={() => {
          navigate("/login");
        }}
      >
        click to Start
      </Button>
      <div className="info">
        {/* <p>App information</p>
        <p>"/login" == Login page / Register Page </p>
        <p>"/home" == Home page </p>
        <p>"/fullPost" == FullPost Page </p> */}
      </div>
    </div>
  );
};

export default WelcomePage;
