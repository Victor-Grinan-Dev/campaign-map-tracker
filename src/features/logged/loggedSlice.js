import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

export const loggedSlice = createSlice({
    
    name: 'logged',
    
    initialState: {
        value: false,
    },
    
    reducers:{
        changeLogStatus: (state, action) => {
            if (action.payload === "visitor"){
                state.value = !state.value;
            }else if(!action.payload){
                state.value = !state.value;
            }
        },
    },
});

export const { changeLogStatus } = loggedSlice.actions;
export const loggedSelector = (state) => state.logged.value;
export default loggedSlice.reducer