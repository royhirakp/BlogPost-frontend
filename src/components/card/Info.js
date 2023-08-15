import React from "react";

const Info = ({ data, color }) => {
  return (
    <div>
      <h3
        style={{
          margin: "0",
          padding: "0",
          backgroundColor: color, //"goldenrod",
          textAlign: "left",
        }}
      >
        <u>
          <i>{data}</i>
        </u>
      </h3>
    </div>
  );
};

export default Info;
