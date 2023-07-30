import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  addEmail,
  addPassword,
} from "../features/email-password/email-PasswordSlice";
import axios from "axios";
import { useLoginMutation } from "../features/apiCall/login-register";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const data = useSelector((s) => s.userInfo);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [login, { isError, isLoading }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  const [LoginRegToggle, setToggleStatus] = useState(false);

  const hadelSubmit = async (status) => {
    try {
      console.log("submit", status, "=====", email, password);
      if (email === "" || password === "") {
        alert("give email and password");
        console.log("alert");
        //   //
        return;
      }
      const body = {
        email: email,
        password: password,
      };
      console.log("****************function call");
      if (status === "singup") {
        let singUpData = await axios.post(
          "https://blogpost-xbzq.onrender.com/api/v1/user/singup",
          body
        );

        console.log(singUpData);
        setError("");
      } else {
        let logINdata = await axios.post(
          "https://blogpost-xbzq.onrender.com/api/v1/user/login",
          body
        );
        localStorage.setItem("jwtTokenW", logINdata.data.token);
        setError("");
        navigate("../home");
      }
    } catch (error) {
      // console.log(error.response);
      setError("erorr !!! sing up first / give right password / ");
    }
  };
  return (
    <div>
      <form>
        <header style={{ display: "flex", flexDirection: "column" }}>
          <div className="textfildContainer">
            email
            <input
              type="text"
              onChange={(e) => {
                dispatch(addEmail(e.target.value));
                setEmail(e.target.value);
              }}
            />
            <br />
            password
            <input
              type="text"
              onChange={(e) => {
                dispatch(addPassword(e.target.value));
                setpassword(e.target.value);
              }}
            />
            <br />
          </div>
          <div className="ButtonContainer">
            <Button
              style={{ margin: "2px" }}
              onClick={() => hadelSubmit("login")}
              variant="contained"
            >
              Login
            </Button>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                setToggleStatus(true);
              }}
            >
              {LoginRegToggle ? "" : "singUp ?"}
            </a>
            {LoginRegToggle ? (
              <Button
                style={{ margin: "2px" }}
                onClick={() => hadelSubmit("singup")}
                variant="contained"
              >
                Register
              </Button>
            ) : (
              ""
            )}
          </div>

          <br />
          {error}
          {error}
        </header>
      </form>
    </div>
  );
};

export default Register;
