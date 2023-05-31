import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ALL_ITEMS, Items_By_CATEGORIES, Items_STATUS_UPDATE } from "../../Routes/apiUrls";
const initialState = {
  items: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchAllItems  = createAsyncThunk('items/fetchAllItems', async ()=>{
    const response = await axios.get(ALL_ITEMS);
    return response.data;
})

export const getItemByCategory = createAsyncThunk(
  "items/categoryWise",
  async (categoryID) => {
    const response = await axios.get(Items_By_CATEGORIES + categoryID);
    return response?.data;
  }
);

export const itemStatusUpdate = createAsyncThunk(
  "items/status",
    async (data) => {
        const token = 'Bearer' + localStorage.getItem("adminToken");
        console.log("token: ", token);
        console.log("bbbb", data);
        try {
            const response = await axios.post(Items_STATUS_UPDATE, data, {
              headers: { Authorization: "Bearer 74|70nJpcfOwGI1pUsB52tOmxuA3tMvz3Wshp6LAaTA",},
            });
            return response?.data;
        } catch (error) {
            console.log(">>>>>", error.message);
        }
    }
);

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
    },
    extraReducers(build){
        build
          .addCase(fetchAllItems.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(fetchAllItems.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload;
          })
          .addCase(fetchAllItems.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          })
          .addCase(getItemByCategory.pending, (state, action) => {
            state.status = "pending";
            console.log("getItemByCategory pending");
          })
          .addCase(getItemByCategory.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload;
            console.log("getItemByCategory succeeded");
          })
          .addCase(getItemByCategory.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
            console.log("getItemByCategory failed");
          })
          .addCase(itemStatusUpdate.fulfilled, (state, action)=> {
              console.log("actions: ", action);
          } )
          ;
    }
});

export const selectAllItems = (state) => state.items.items;
export const getItemsStatus = (state) => state.items.status;

export const reducers = itemSlice.actions;
export default itemSlice.reducer;
