import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  addEmail,
  addPassword,
} from "../features/email-password/email-PasswordSlice";
import {
  useLoginMutation,
  useSingupMutation,
} from "../features/apiCall/login-register";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // const data = useSelector((s) => s.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [singup, { isLoading: singUpLodingStatus, isSuccess }] =
    useSingupMutation();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const [LoginRegToggle, setToggleStatus] = useState(false);

  const hadelSubmit = async (status) => {
    try {
      if (email === "" || password === "") {
        alert("email and password fild can't be empty");
        return;
      }
      const body = {
        email: email,
        password: password,
      };
      if (status === "singup") {
        let res = await singup(body);
        if (res.error) {
          setError("user already exist ");
          return;
        }
        setError("");
      } else {
        let res = await login(body);
        console.log(res);
        if (res?.error?.data?.messege) {
          setError("Password not matched");
          return;
        }
        if (res?.error) {
          setError("User not registered");
          return;
        }
        localStorage.setItem("jwtTokenW", res.data.token);
        localStorage.setItem("webappLoginUserEmail", email);
        setError("");
        navigate("../home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isLoading ? "Loading..." : ""}
      {singUpLodingStatus ? "Creating new user...." : ""}
      <form>
        <header
          style={{
            display: "flex",
            border: "1px solid",
            width: "300px",
            flexDirection: "column",
            margin: "0 auto 0 auto",
            borderRadius: "6px",
          }}
        >
          <br />
          <div className="textfildContainer">
            Email
            <input
              type="text"
              onChange={(e) => {
                dispatch(addEmail(e.target.value));
                setEmail(e.target.value);
              }}
            />
            <br />
            <br />
            Password
            <input
              type="password"
              onChange={(e) => {
                dispatch(addPassword(e.target.value));
                setpassword(e.target.value);
              }}
            />
            <br />
          </div>
          <br />
          <div className="ButtonContainer">
            <Button
              style={{ margin: "2px" }}
              onClick={() => hadelSubmit("Login")}
              variant="contained"
            >
              Login
            </Button>
            <Button
              style={{ margin: "2px" }}
              onClick={() => hadelSubmit("singup")}
              variant="contained"
            >
              Register
            </Button>
          </div>
          <br />
          {error}
          {isSuccess ? "new user created" : ""}
        </header>
      </form>
    </div>
  );
};

export default Register;
