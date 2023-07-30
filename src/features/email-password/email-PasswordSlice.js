import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};
const UserDataSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addEmail(state, action) {
      state.email = action.payload;
    },
    addPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { addEmail, addPassword } = UserDataSlice.actions;
export default UserDataSlice.reducer;
