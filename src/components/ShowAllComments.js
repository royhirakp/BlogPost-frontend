import React from "react";
import CommentCard from "./card/CommentCard";

const ShowAllComments = () => {
  return (
    <div>
      <h1>
        <b>
          <u>comments:</u>
        </b>
      </h1>
      {[1, 2, 1].map((item, i) => {
        return (
          <div key={i * 0.252}>
            <CommentCard />
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllComments;
