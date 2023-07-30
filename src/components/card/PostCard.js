import React from "react";
import axios from "axios";
const PostCard = (props) => {
  // console.log(props);
  const { id, userId, title, body, userEmail } = props.item;

  async function deletePost() {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("jwtTokenW"),
        },
      };
      const body = { id: id };
      console.log(body, config);
      const res = await axios.delete("http://localhost:5000/api/v1/post", {
        ...config,
        data: body,
      });
      console.log("delete res==", res);
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
        <button>edit</button>
        <button onClick={deletePost}>delete</button>
        <button>open Comments</button>
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
