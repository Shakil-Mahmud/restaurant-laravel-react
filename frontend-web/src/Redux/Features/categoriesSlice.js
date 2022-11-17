import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ALL_CATEGORIES } from "../../Routes/apiUrls";

const initialState=[];

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async ()=>{
    const response = await axios.get(ALL_CATEGORIES);
    return response.data;
} );

export const categoriesSlice = createSlice({
    name : 'categories',
    initialState,
    reducers: {
        fetchCat(){},
    }
});

export const {fetchCat} = categoriesSlice.actions

export default categoriesSlice.reducer;
