import React, { useEffect, useState } from "react";
import PostCard from "./card/PostCard";
import axios from "axios";
const ShowPostMain = () => {
  const [data, setData] = useState([]);
  async function showData() {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("jwtTokenW"),
        },
      };

      const res = await axios.get(
        "https://blogpost-xbzq.onrender.com/api/v1/post",
        config
      );
      console.log(res.data.posts);
      setData(res.data.posts);
    } catch (error) {
      console.log("error is comming");
    }
  }

  useEffect(() => {
    showData();
  }, []);
  return (
    <div>
      <div
        className="dataContainer"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {data.map((item, i) => {
          return (
            <div key={i * 0.252}>
              <PostCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowPostMain;
