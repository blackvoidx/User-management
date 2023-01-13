import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MyFormValue } from "../../container/AddUserForm";

type UserIdTypes = {
  deleteId: string;
  updateId: string;
  userUpdateInfo: MyFormValue;
};

const initialState: UserIdTypes = {
  deleteId: "",
  updateId: "",
  userUpdateInfo: {} as MyFormValue,
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
    userUpdateInfo: (state, action: PayloadAction<MyFormValue>) => {
      state.userUpdateInfo = action.payload;
    },
  },
});

export default userSlice;
export const userAction = userSlice.actions;
