import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import Button from "@mui/material/Button";
import CreatePost from "../components/CreatePost";
// import ShowPostMain from "../components/ShowPostMain";
import { useNavigate } from "react-router-dom";
import Info from "../components/card/Info";
const LazyComponentShowPostMain = lazy(() =>
  import("../components/ShowPostMain")
);
// import Register from "../components/Register";

const Home = () => {
  const navigate = useNavigate();
  const [refresh, setRefesh] = useState(1);
  const [createPostStatus, setCreatePostStatus] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("jwtTokenW")) {
      navigate("../login");
    }
  }, []);
  return (
    <>
      <div>
        <p>Home page</p>
        <Info data="1. CREATE a new post  & Logout " />

        {/* logout and create post er button login howar por dhaka jabe.  login howar por registerComponent muche jabe  */}
        <Button
          style={{ margin: "2px", float: "right" }}
          variant="contained"
          onClick={() => {
            console.log("logout");
            localStorage.removeItem("jwtTokenW");
            localStorage.removeItem("webappLoginUserEmail");
            navigate("../login");
          }}
        >
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
        {createPostStatus ? <CreatePost setRefesh={setRefesh} /> : ""}
      </div>

      {/* Main component  */}
      <Info data=" 2. READ all posts" />
      <h2>All posts: </h2>

      <Suspense fallback={<h1>Lazy Loading Component.....</h1>}>
        <LazyComponentShowPostMain refresh={refresh} />
      </Suspense>
    </>
  );
};

export default Home;
