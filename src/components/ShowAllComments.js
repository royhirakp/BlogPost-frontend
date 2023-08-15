import React, { useCallback, useEffect, useState } from "react";
import CommentCard from "./card/CommentCard";
import axios from "axios";
import { useSelector } from "react-redux";
import Info from "./card/Info";
const ShowAllComments = (props) => {
  const postdata = useSelector((s) => s.editCommentInfo);
  const { body, id, title, userEmail, userId } = postdata;
  const [commentData, setCommentData] = useState([]);

  const getComments = useCallback(async () => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("jwtTokenW"),
        },
      };
      // const body = { postId: "7" };
      const res = await axios.get(
        `http://16.171.192.21/api/v1/comment/${id}`,
        config
      );
      // {headers:{},data:{}}
      setCommentData(res.data);
      // setData(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getComments();
  }, [props.newCommentStatus]);

  return (
    <div>
      <Info data=" 3. READ all Comments" />
      <h1>
        <b>
          <u> Comments </u>
        </b>
      </h1>
      {commentData?.data?.map((item, i) => {
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
