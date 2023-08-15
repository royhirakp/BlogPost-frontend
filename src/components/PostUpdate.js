import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Info from "./card/Info";
const PostUpdate = () => {
  const postdata = useSelector((s) => s.editCommentInfo);
  const { body, id, title } = postdata;
  const [newTitle, setNewTitle] = useState(title);
  const [newPostBody, setNewPostBody] = useState(body);
  const [postUpdateStatus, setUpdateStatus] = useState("");

  const updatePost = async () => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("jwtTokenW"),
        },
      };
      const body = {
        title: newTitle,
        body: newPostBody,
        id: id,
      };

      const res = await axios.put(
        "http://16.171.192.21/api/v1/post",
        body,
        config
      );
      console.log(res);
      setUpdateStatus("post updated");
      setTimeout(() => {
        setUpdateStatus("");
      }, 2000);
    } catch (error) {
      console.log(error);
      setUpdateStatus("Error!!!, post Cant update");
      setTimeout(() => {
        setUpdateStatus("");
      }, 2000);
    }
  };

  return (
    <>
      <Info data=" 1. UPDATE a post:" />
      <div
        style={{
          border: "1px solid",
          borderRadius: "6px",
          padding: "10px",
          backgroundColor: "goldenrod",
          display: "flex",
        }}
      >
        <div
          className="postData"
          style={{
            border: "1px solid",
            marginBottom: "6px",
            width: "450px",
          }}
        >
          <h3 style={{ margin: "0", padding: "0" }}> Post:</h3>

          <p>Title: {title}</p>
          <p>Body: {body}</p>
        </div>
        <div
          className="PostAComment"
          style={{
            border: "1px solid",
            borderRadius: "5px",
            width: "400px",
            margin: "0 auto 0 auto",
          }}
        >
          <h3 style={{ margin: "0", padding: "0" }}>Form for update Post:</h3>
          title:
          <input
            type="text"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
              console.log(newTitle);
            }}
          />
          <br />
          body:
          <input
            type="text"
            value={newPostBody}
            onChange={(e) => {
              setNewPostBody(e.target.value);
              console.log(newPostBody);
            }}
          />
          <br />
          <button
            style={{ cursor: "pointer", padding: "2px", margin: "5px" }}
            onClick={updatePost}
          >
            edit post
          </button>
        </div>
      </div>
      <h2>{postUpdateStatus}</h2>
    </>
  );
};

export default React.memo(PostUpdate);
