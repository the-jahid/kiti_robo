
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    refresh:false
}

export const userSlice = createSlice({
    initialState,
    name:'usersList',
    reducers: {
        setLoggedIn:(state, action) => {
            state.refresh = !state.refresh
        }
    }
})

export const {setLoggedIn} = userSlice.actions;

export default userSlice.reducer;
















