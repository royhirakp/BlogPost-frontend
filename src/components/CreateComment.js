import React from "react";

const CreateComment = () => {
  function handelSubmit() {}
  return (
    <div
      style={{
        border: "1px solid",
        margin: "12px 19px 1px",
        padding: " 0px 0px 27px",
        borderRadius: "120px",
      }}
    >
      <h3>type your comment:</h3>
      <form onSubmit={handelSubmit}>
        <input type="text" />
        <button>Post the comment</button>
      </form>
    </div>
  );
};

export default CreateComment;
