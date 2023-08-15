import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the Blog Post App</h1>
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
      <div
        className="info"
        style={{
          border: "1px solid",
          marginTop: "20px",
          width: "90%",
          margin: "25px auto",
          borderRadius: "10px",
        }}
      >
        <p>
          <b>
            <u>App information</u>
          </b>
        </p>
        <p>1. "/login" = Login page / Register Page </p>
        <p>2. "/home" = Home page </p>
        <p>3. "/fullPost" = FullPost Page </p>
      </div>
    </div>
  );
};

export default WelcomePage;
