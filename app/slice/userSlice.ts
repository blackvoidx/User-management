import { createSlice } from "@reduxjs/toolkit";

type UserIdType = {
  userId: string;
};

const initialState: UserIdType = {
  userId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setId: (state, action) => {
      state.userId = action.payload;
    },
    removeId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export default userSlice;
export const userAction = userSlice.actions;
