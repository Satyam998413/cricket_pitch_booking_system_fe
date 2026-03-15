import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log("API URL:", process.env.REACT_APP_API_URL);
export const apiSlice = createApi({

  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api`,

    prepareHeaders: (headers, { getState }) => {

      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    }
  }),

  endpoints: () => ({})
});