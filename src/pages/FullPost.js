import React from "react";
import PostUpdate from "../components/PostUpdate";
import CreateComment from "../components/CreateComment";
import ShowAllComments from "../components/ShowAllComments";

const FullPost = () => {
  // const { body, id, title, userEmail, userId } = data;
  return (
    <div>
      {/* {post update form } */}
      <PostUpdate />
      <CreateComment />
      {/* comment form  */}
      {/* comments data */}
      <ShowAllComments />
    </div>
  );
};

export default FullPost;
