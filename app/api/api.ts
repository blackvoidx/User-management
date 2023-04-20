import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "production"
        ? process.env.PROD_URL
        : process.env.DEV_URL,
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["User"],
});
