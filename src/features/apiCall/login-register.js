import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userLoginRegister = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blogpost-xbzq.onrender.com/api/v1/user",
    prepareHeaders(headers) {
      headers.set("key", "data");
      return headers;
    },
  }),

  endpoints(builder) {
    return {
      login: builder.mutation({
        query(body) {
          return {
            url: "/login",
            method: "POST",
            body: body,
          };
        },
      }),
      singup: builder.mutation({
        query(body) {
          return {
            url: "/singup",
            method: "POST",
            body: body,
          };
        },
      }),
    };
  },
});

export const { useLoginMutation, useSingupMutation } = userLoginRegister;
