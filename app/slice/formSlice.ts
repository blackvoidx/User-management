import { createSlice } from "@reduxjs/toolkit";

type ToggleFormType = {
  toggleFormShow: boolean;
};

const initialState: ToggleFormType = {
  toggleFormShow: false,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    showForm: (state) => {
      state.toggleFormShow = true;
    },
    removeForm: (state) => {
      state.toggleFormShow = false;
    },
  },
});

export default formSlice;
export const formAction = formSlice.actions;
