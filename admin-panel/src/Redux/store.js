import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./Features/itemSlice";
import userSlice from "./Features/userSlice";



export const store = configureStore({
    reducer: {
        auth: userSlice,
        items: itemSlice,
    }
});
