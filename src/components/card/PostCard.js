import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addPostData } from "../../features/postDataForEditAndCommentPost/postData-Slice";
import { useDispatch } from "react-redux";
const buttonStyle = {
  border: "1px solid",
  width: "97px",
  margin: "5px 1px 0 1px",
  borderRadius: "5px",
  cursor: "pointer",
  color: "red",
  height: "35px",
};
const PostCard = (props) => {
  const dispatch = useDispatch();
  // console.log(props, "from data postComponent");
  const navigate = useNavigate();
  const { id, userId, title, body, userEmail } = props.item;

  async function deletePost() {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("jwtTokenW"),
        },
      };
      const body = { id: id };
      // console.log(body, config);
      await axios.delete("http://16.171.192.21/api/v1/post", {
        ...config,
        data: body,
      });
      // console.log("delete res==", res);
      props.setRelode((pre) => pre + 1);
    } catch (error) {
      console.log(error);
      alert(
        "This post doesn't belong to you. You can only delete your own posts!!"
      );
    }
  }

  return (
    <div
      style={{
        // display: "flex",
        margin: "5px",
        border: "1px solid black",
        borderRadius: "6px",
      }}
    >
      <div className="buttonConatiner">
        <button
          style={buttonStyle}
          onClick={() => {
            dispatch(addPostData({ id, userId, title, body, userEmail }));
            navigate("../fullpost");
          }}
        >
          Edit
        </button>
        <button style={buttonStyle} onClick={deletePost}>
          Delete
        </button>
        <button
          style={buttonStyle}
          onClick={() => {
            dispatch(addPostData({ id, userId, title, body, userEmail }));
            navigate("../fullpost");
          }}
        >
          Comments
        </button>
      </div>
      <div style={{}}>
        <p>id: {id}</p>
        <p>title: {title}</p>
        <p>body: {body}</p>
        <p>userEmail: {userEmail}</p>
      </div>
    </div>
  );
};

export default React.memo(PostCard);
