import { Padding } from "@mui/icons-material";
import React from "react";

const CommentCard = () => {
  return (
    <div style={{ border: "1px solid" }}>
      <p style={{ textAlign: "left", padding: "3px 43px 0 43px", margin: "0" }}>
        <b>
          <u>comment:</u>
        </b>{" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsa
        aliquam inventore. Necessitatibus nostrum dolor culpa commodi blanditiis
        eveniet atque officiis esse quas! Vero ullam, dolorum nemo illo suscipit
        dignissimos. {""}
      </p>
      <p>
        <b>
          <u>user: static </u>
        </b>
        h@gm.com
      </p>
    </div>
  );
};

export default CommentCard;
