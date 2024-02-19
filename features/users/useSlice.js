
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedin:false
}

export const userSlice = createSlice({
    initialState,
    name:'usersList',
    reducers: {
        setLoggedIn:(state, action) => {
            state.loggedin = !state.loggedin
        }
    }
})

export const {setLoggedIn} = userSlice.actions;

export default userSlice.reducer;
















