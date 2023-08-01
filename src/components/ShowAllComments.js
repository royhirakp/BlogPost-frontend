import React, { useCallback, useEffect, useState } from "react";
import CommentCard from "./card/CommentCard";
import axios from "axios";
import { useSelector } from "react-redux";
const ShowAllComments = () => {
  const postdata = useSelector((s) => s.editCommentInfo);
  const { body, id, title, userEmail, userId } = postdata;
  // console.log(postdata);
  const [commentData, setCommentData] = useState([]);

  const getComments = useCallback(async () => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("jwtTokenW"),
        },
      };
      const body = { postId: "5" };
      const res = await axios.get(
        "http://16.171.192.21/api/v1/comment",
        config,
        { data: body }
      );
      // {headers:{},data:{}}
      console.log(res.data);
      setCommentData(res.data);
      // setData(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <h1>
        <b>
          <u>comments:</u>
        </b>
      </h1>
      {commentData.map((item, i) => {
        return (
          <div key={i * 0.252}>
            <CommentCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllComments;
