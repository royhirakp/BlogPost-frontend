import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = (props) => {
  const [title, setTitel] = useState("");
  const [bodyinput, setbody] = useState("");
  const [postStatus, setPostSattus] = useState({});
  // const navigate = useNavigate();
  // console.log(props.setRefesh);
  const handelSubmit = async () => {
    // console.log("buttonclick", title, bodyinput);
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("jwtTokenW"),
        },
      };
      const postbody = {
        title: title,
        body: bodyinput,
        userEmail: "email@reactfnd",
      };

      const res = await axios.post(
        "http://16.171.192.21/api/v1/post",
        postbody,
        config
      );
      console.log(res.data);
      setPostSattus(res.data);
      props.setRefesh((pre) => pre + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        className="textfildContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          id="outlined-basic"
          label="title"
          variant="outlined"
          onChange={(e) => {
            setTitel(e.target.value);
          }}
        />
        {/* <br /> */}
        <TextField
          id="outlined-basic"
          label="body"
          variant="outlined"
          onChange={(e) => {
            setbody(e.target.value);
          }}
        />
        <Button variant="contained" onClick={handelSubmit}>
          Create
        </Button>
      </div>

      <div className="ButtonContainer">
        <p> {postStatus?.data}</p>
      </div>
    </div>
  );
};

export default CreatePost;
