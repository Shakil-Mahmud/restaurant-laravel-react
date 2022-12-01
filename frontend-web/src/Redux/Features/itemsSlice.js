import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Items_By_CATEGORIES } from "../../Routes/apiUrls";

const initialState = {
    items: [],
    status: 'idle',
    error: null,
};

export const getItemByCategory = createAsyncThunk(
  "items/categoryWise",
  async (categoryID) => {
    console.log("#### enter fetch");
    const response = await axios.get(Items_By_CATEGORIES + categoryID);
    console.log("#### cccoomplete fetch");
    return response?.data;
  }
);

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
    },
    extraReducers(build){
        build
        .addCase(getItemByCategory.pending, (state, action) =>{
            state.status = 'pending';
            console.log("getItemByCategory pending");
        })
        .addCase(getItemByCategory.fulfilled, (state, action) =>{
            state.status = 'succeeded';
            state.items = action.payload;
            console.log("getItemByCategory succeeded");
        })
        .addCase(getItemByCategory.rejected, (state, action) =>{
                state.status = "failed";
                state.error = action.error.message;
                console.log("getItemByCategory failed");
        })
    }
});

export const selectItemsByCategory = (state) => state.items.items;
export const getCategoryWiseItemsStatus = (state) => state.items.status;

export const  reducers = itemsSlice.actions;
export default itemsSlice.reducer
