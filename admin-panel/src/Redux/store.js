import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./Features/categoriesSlice";
import itemSlice from "./Features/itemSlice";
import userSlice from "./Features/userSlice";



export const store = configureStore({
    reducer: {
        auth: userSlice,
        items: itemSlice,
        categories: categoriesSlice,
    }
});
