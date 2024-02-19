import { robotsList } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists:[],
    singlerobot:{...robotsList[0]}
}

export const robotsSlice = createSlice({
    initialState,
    name:'robotsList',
    reducers: {
        getallRobotsList:(state) => {
            state.lists = [...robotsList]
        },
        
        getRobotByid:(state, action) => {
            state.lists.push(state.singlerobot)
            const id = action.payload;
            const sinlerobotItem = state.lists.find((item) => item.id === id);
            state.singlerobot = sinlerobotItem;
            state.lists = state.lists.filter((item) => item.id !== id); 
        },

        addRobot:(state, action) => {
            
        }
    }
})


export const {getallRobotsList, getRobotByid} = robotsSlice.actions;

export default robotsSlice.reducer;
