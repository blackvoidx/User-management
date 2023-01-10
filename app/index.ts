import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slice/formSlice";
import { apiSlice } from "./api/api";

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (GDM) => GDM().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
