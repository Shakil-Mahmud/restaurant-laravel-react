import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./Features/categoriesSlice";
import userSlice from "./Features/userSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    auth: userSlice,
  },
});
