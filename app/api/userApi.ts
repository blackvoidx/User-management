import { apiSlice } from "./api";
import { MyFormValue } from "../../container/AddUserForm";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<MyFormValue[], void>({
      query: () => ({
        url: "/api/users",
        method: "GET",
      }),
    }),
    addUser: builder.mutation<MyFormValue, any>({
      query: ({ body }) => ({
        url: "/api/users",
        method: "POST",
        body,
      }),
    }),
  }),
});

const { useGetUsersQuery, useAddUserMutation } = userApiSlice;
