import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./Features/categoriesSlice";
import itemsSlice from "./Features/itemsSlice";
import userSlice from "./Features/userSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
    auth: userSlice,
  },
});
