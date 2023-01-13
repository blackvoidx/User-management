import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

type ToggleFormType = {
  toggleFormShow: boolean;
  editMode: boolean;
};

const initialState: ToggleFormType = {
  toggleFormShow: false,
  editMode: false,
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
    enableEditMode: (state) => {
      state.editMode = true;
    },
    disableEditMode: (state) => {
      state.editMode = false;
    },
  },
});

export default formSlice;
export const formAction = formSlice.actions;
