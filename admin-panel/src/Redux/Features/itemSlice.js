import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ALL_ITEMS } from "../../Routes/apiUrls";
const initialState = {
  items: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchAllItems  = createAsyncThunk('items/fetchAllItems', async ()=>{
    const response = await axios.get(ALL_ITEMS);
    return response.data;
    // console.log(response);
})

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
    },
    extraReducers(build){
        build
            .addCase(fetchAllItems.pending, (state, action)=>{
                state.status = 'loading'
            })
            .addCase(fetchAllItems.fulfilled, (state, action)=>{
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchAllItems.rejected, (state, action)=>{
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const selectAllItems = (state) => state.items.items;
export const getItemsStatus = (state) => state.items.status;

export const reducers = itemSlice.actions;
export default itemSlice.reducer;
