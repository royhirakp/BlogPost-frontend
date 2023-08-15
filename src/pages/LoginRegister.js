import React from "react";
import Register from "../components/Register";

const LoginRegister = () => {
  return (
    <div>
      <h1>Login or Register page </h1>
      <Register />
      <br />
      <br />
      <br />
      <div className="info">
        <p>
          Register and login are both accomplished on the same page: Click
          'LOGIN' to access the app or 'REGISTER' to create a new user{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
