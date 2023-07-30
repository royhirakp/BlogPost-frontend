import React from "react";

const PostUpdate = () => {
  return (
    <div
      style={{
        border: "1px solid",
        borderRadius: "6px",
        padding: "10px",
        margin: "10px",
        backgroundColor: "goldenrod",
      }}
    >
      <h3>update Post:</h3>
      title
      <input type="text" />
      body
      <input type="text" />
      <button>edit post</button>
    </div>
  );
};

export default React.memo(PostUpdate);
