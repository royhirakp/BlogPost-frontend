import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const PostUpdate = () => {
  const postdata = useSelector((s) => s.editCommentInfo);
  const { body, id, title } = postdata;
  const [newTitle, setNewTitle] = useState(title);
  const [newPostBody, setNewPostBody] = useState(body);
  const [postUpdateStatus, setUpdateStatus] = useState("");

  const updatePost = async () => {
    try {
      // {id, title, body}
      console.log(newPostBody, newTitle);
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
    <div
      style={{
        border: "1px solid",
        borderRadius: "6px",
        padding: "10px",
        margin: "10px",
        backgroundColor: "goldenrod",
      }}
    >
      <p>Post</p>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <h3>update Post:</h3>
      title
      <input
        type="text"
        value={newTitle}
        onChange={(e) => {
          setNewTitle(e.target.value);
          console.log(newTitle);
        }}
      />
      body
      <input
        type="text"
        value={newPostBody}
        onChange={(e) => {
          setNewPostBody(e.target.value);
          console.log(newPostBody);
        }}
      />
      <button onClick={updatePost}>edit post</button>
      <h2>{postUpdateStatus}</h2>
    </div>
  );
};

export default React.memo(PostUpdate);
