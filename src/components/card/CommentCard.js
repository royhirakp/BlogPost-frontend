// import { Padding } from "@mui/icons-material";
import React from "react";

const CommentCard = (props) => {
  const { body, userEmail } = props.item;
  return (
    <div style={{ border: "1px solid" }}>
      <p style={{ textAlign: "left", padding: "3px 43px 0 43px", margin: "0" }}>
        <b>
          <u>comment:</u>
        </b>
        {body}
      </p>
      <p>
        <b>
          <u>commented by: </u>
        </b>
        {userEmail}
      </p>
    </div>
  );
};

export default CommentCard;
