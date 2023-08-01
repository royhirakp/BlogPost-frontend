import React, { useEffect, useState } from "react";
import PostCard from "./card/PostCard";
import axios from "axios";
const ShowPostMain = (props) => {
  const [data, setData] = useState([]);
  const [reloded, setRelode] = useState(1);
  async function showData() {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("jwtTokenW"),
        },
      };

      const res = await axios.get("http://16.171.192.21/api/v1/post", config);
      // console.log(res.data.posts);
      setData(res.data.posts);
    } catch (error) {
      console.log("error is comming");
    }
  }

  useEffect(() => {
    showData();
  }, [reloded, props.refresh]);
  return (
    <div>
      <div
        className="dataContainer"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {data.map((item, i) => {
          return (
            <div key={i * 0.252}>
              <PostCard item={item} setRelode={setRelode} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowPostMain;
