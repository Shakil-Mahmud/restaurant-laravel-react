import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:  JSON.parse(localStorage.getItem("adminUser"))? JSON.parse(localStorage.getItem("adminUser")): null,
    token: localStorage.getItem("adminToken")? localStorage.getItem("adminToken"): null,
}


export const userSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("adminUser", JSON.stringify(action.payload.user));
      localStorage.setItem("adminToken", action.payload.token);
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      localStorage.removeItem("adminUser");
      localStorage.removeItem("adminToken");
      state.user = null;
      state.token = null;
    },
  },
});


export const selectCurrentUser = (state)=> state.auth.user

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
