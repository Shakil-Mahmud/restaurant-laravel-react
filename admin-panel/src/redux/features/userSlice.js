import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:  JSON.parse(localStorage.getItem("adminUser"))? JSON.parse(localStorage.getItem("adminUser")): null,
    token: JSON.parse(localStorage.getItem("adminToken"))? JSON.parse(localStorage.getItem("adminToken")): null,
}


export const userSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        login: (state, action) => {

        },
        logout: (state, action) => {

        },
    }
});


export const selectCurrentUser = (state)=> state.auth.user

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;