import React, { useState } from "react";
import Register from "../components/Register";
import Button from "@mui/material/Button";
import CreatePost from "../components/CreatePost";
import ShowPostMain from "../components/ShowPostMain";
const Home = () => {
  const [createPostStatus, setCreatePostStatus] = useState(false);
  return (
    <>
      <div>
        <p>Home page</p>
        {/* <Register /> */}

        {/* logout and create post er button login howar por dhaka jabe.  login howar por registerComponent muche jabe  */}
        <Button style={{ margin: "2px", float: "right" }} variant="contained">
          logout
        </Button>
      </div>
      <div className="createPostContainer" style={{ border: "1px solid" }}>
        <Button
          onClick={() => setCreatePostStatus(!createPostStatus)}
          variant="contained"
        >
          {createPostStatus ? "cancle " : "Create Post"}
        </Button>
        {createPostStatus ? <CreatePost /> : ""}
      </div>

      {/* Main component  */}
      <ShowPostMain />
    </>
  );
};

export default Home;
