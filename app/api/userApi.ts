import { apiSlice } from "./api";
import { MyFormValue } from "../../container/AddUserForm";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<MyFormValue[], void>({
      query: () => ({
        url: "/api/users",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    addUser: builder.mutation<MyFormValue, MyFormValue>({
      query: (body) => ({
        url: "/api/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = userApiSlice;
