import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  body: "",
  id: "",
  title: "",
  userEmail: "",
  userId: "",
};
const PostDataSlice = createSlice({
  name: "postInfo",
  initialState,
  reducers: {
    addPostData(state, action) {
      state.id = action.payload.id;
      state.body = action.payload.body;
      state.title = action.payload.title;
      state.userEmail = action.payload.userEmail;
      state.userId = action.payload.userId;
    },
  },
});

export const { addPostData } = PostDataSlice.actions;
export default PostDataSlice.reducer;
