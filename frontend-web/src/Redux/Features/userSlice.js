import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState ={
    user: JSON.parse(localStorage.getItem('userInfo'))? JSON.parse(localStorage.getItem('userInfo')): null ,
    token: JSON.parse(localStorage.getItem('bearerToken'))? JSON.parse(localStorage.getItem('bearerToken')): null,
}
// export const userLogin = createAsyncThunk(
//   "user/login",
//   async () => {
//     // const response = await axios.get(ALL_CATEGORIES);
//     const response = await axios.get(
//       "http://127.0.0.1:8000/api/categories/all"
//     );
//     return response.data;
//   }
// );

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
            localStorage.setItem("bearerToken", JSON.stringify(action.payload.token));
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state, action)=>{
            localStorage.removeItem("userInfo");
            localStorage.removeItem("bearerToken");
            state.user=null;
            state.token=null;
        },
    },
});

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectTest = (state) => state.auth.test;

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;

