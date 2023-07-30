import { configureStore } from "@reduxjs/toolkit";
import { userLoginRegister } from "../features/apiCall/login-register";
import userDataReducer from "../features/email-password/email-PasswordSlice";

export const store = configureStore({
  reducer: {
    userInfo: userDataReducer,
    [userLoginRegister.reducerPath]: userLoginRegister.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userLoginRegister.middleware);
  },
});

export default store;
