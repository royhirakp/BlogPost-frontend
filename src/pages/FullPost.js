import React, { useState } from "react";
import PostUpdate from "../components/PostUpdate";
import CreateComment from "../components/CreateComment";
import ShowAllComments from "../components/ShowAllComments";

const FullPost = () => {
  const [newCommentStatus, setNewComntTem] = useState(0);
  return (
    <div>
      {/* {post update form } */}
      <PostUpdate />
      {/* comment form  */}

      <CreateComment setNewComntTem={setNewComntTem} />
      {/* comments data */}
      <ShowAllComments newCommentStatus={newCommentStatus} />
    </div>
  );
};

export default FullPost;
