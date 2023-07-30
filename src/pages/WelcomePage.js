import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>welcome to blog post app</h1>
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        click to Start
      </Button>
    </div>
  );
};

export default WelcomePage;
