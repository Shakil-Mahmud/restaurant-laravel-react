import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ALL_CATEGORIES } from "../../Routes/apiUrls";

const initialState = {
  categories: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async ()=>{
    const response = await axios.get(ALL_CATEGORIES);
    return response.data;
} );

export const categoriesSlice = createSlice({
    name : 'categories',
    initialState,
    reducers: {
    },
    extraReducers(build){
        build
            .addCase(fetchCategories.pending, (state, action)=>{
                state.status = 'pending'
            } )
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories =  action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            } )
    }
});

export const selectAllCategories = (state) => state.categories.categories;
export const getCategoriesStatus = (state) => state.categories.status;

export const reducers = categoriesSlice.actions

export default categoriesSlice.reducer;
