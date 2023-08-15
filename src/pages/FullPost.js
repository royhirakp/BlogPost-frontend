import React from "react";
import PostUpdate from "../components/PostUpdate";
import CreateComment from "../components/CreateComment";
import ShowAllComments from "../components/ShowAllComments";

const FullPost = () => {
  return (
    <div>
      {/* {post update form } */}
      <PostUpdate />
      {/* comment form  */}

      <CreateComment />
      {/* comments data */}
      <ShowAllComments />
    </div>
  );
};

export default FullPost;
