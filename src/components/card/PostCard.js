import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PostCard = (props) => {
  // console.log(props);
  const navigate = useNavigate();
  const { id, title, body, userEmail } = props.item;

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
    }
  }
  return (
    <div
      style={{
        display: "flex",
        margin: "5px",
        border: "1px solid black",
      }}
    >
      <div className="buttonConatiner">
        <button
          onClick={() => {
            navigate("../fullpost");
          }}
        >
          edit
        </button>
        <button onClick={deletePost}>delete</button>
        <button
          onClick={() => {
            navigate("../fullpost");
          }}
        >
          open Comments
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
