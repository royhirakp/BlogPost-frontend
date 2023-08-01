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
      // console.log("submit", status, "=====", email, password);
      if (email === "" || password === "") {
        alert("give email and password");
        return;
      }
      const body = {
        email: email,
        password: password,
      };
      if (status === "singup") {
        let res = await singup(body);
        console.log(res.data.messege);
        setError("");
      } else {
        let res = await login(body);
        localStorage.setItem("jwtTokenW", res.data.token);
        localStorage.setItem("webappLoginUserEmail", email);
        setError("");
        navigate("../home");
      }
    } catch (error) {
      setError("erorr !!! sing up first / give right password / ");
    }
  };

  return (
    <div>
      {isLoading ? "Loading...." : ""}
      {singUpLodingStatus ? "Registring...." : ""}
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
          {isSuccess ? "new user created" : ""}
        </header>
      </form>
    </div>
  );
};

export default Register;
