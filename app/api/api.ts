import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://user-management-kappa.vercel.app",
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["User"],
});
