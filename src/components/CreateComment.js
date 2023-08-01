import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const CreateComment = () => {
  const data = useSelector((s) => s.editCommentInfo);
  const { id, userEmail } = data;
  const [commentData, setCommentData] = useState("");
  const [commentCreteStatus, setcommentCreteStatus] = useState("");

  async function handelSubmit(e) {
    e.preventDefault();
    // console.log(data);
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("jwtTokenW"),
        },
      };
      const postbody = {
        postId: id,
        userEmail: userEmail,
        body: commentData,
      };

      const res = await axios.post(
        "http://16.171.192.21/api/v1/comment",
        postbody,
        config
      );
      console.log(res);
      setcommentCreteStatus("comment Created");
      setTimeout(() => {
        setcommentCreteStatus("");
      }, 2000);
    } catch (error) {
      console.log(error);
      setcommentCreteStatus("Can't Created");
      setTimeout(() => {
        setcommentCreteStatus("");
      }, 2000);
    }
  }
  return (
    <div
      style={{
        border: "1px solid",
        margin: "12px 19px 1px",
        padding: " 0px 0px 27px",
        borderRadius: "120px",
      }}
    >
      <h3>type your comment:</h3>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setCommentData(e.target.value);
          }}
        />
        <button>Post the comment</button>
      </form>
      <p>{commentCreteStatus}</p>
    </div>
  );
};

export default CreateComment;
