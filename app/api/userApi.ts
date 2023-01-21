import { apiSlice } from "./api";
import { MyFormValue } from "../../types/type";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<MyFormValue[], void>({
      query: () => ({
        url: "/api/users",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getUser: builder.query<MyFormValue, string>({
      query: (userId) => ({
        url: `/api/users/${userId}`,
        method: "GET",
      }),
    }),
    addUser: builder.mutation<MyFormValue, MyFormValue>({
      query: (body) => ({
        url: "/api/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation<any, string>({
      query: (userId) => ({
        url: `/api/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation<MyFormValue, MyFormValue>({
      query: (body) => ({
        url: `api/users/${body._id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApiSlice;
