import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    setId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    removeId: (state) => {
      state.userId = "";
    },
  },
});

export default userSlice;
export const userAction = userSlice.actions;
