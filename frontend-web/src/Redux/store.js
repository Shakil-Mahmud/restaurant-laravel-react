import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./Features/categoriesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice
  },
});
