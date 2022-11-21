import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: 'idle',
    error: null,
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        
    }
});
