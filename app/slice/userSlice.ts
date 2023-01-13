import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserIdTypes = {
  deleteId: string;
  updateId: string;
};

const initialState: UserIdTypes = {
  deleteId: "",
  updateId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    deleteId: (state, action: PayloadAction<string>) => {
      state.deleteId = action.payload;
    },
    removeDeleteId: (state) => {
      state.deleteId = "";
    },
    updateId: (state, action: PayloadAction<string>) => {
      state.updateId = action.payload;
    },
    removeUpdateId: (state) => {
      state.updateId = "";
    },
  },
});

export default userSlice;
export const userAction = userSlice.actions;
