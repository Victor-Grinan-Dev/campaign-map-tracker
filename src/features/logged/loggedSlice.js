import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({

    name: 'logged',
    
    initialState: {
        value: false,
    },
    
    reducers:{
        changeLogStatus: (state, action) => {
            if (action.payload === "visitor"){
                state.value = !state.value;
            }
        },
    },
});

export const { changeLogStatus } = loggedSlice.actions;
export const loggedSelector = (state) => state.logged.value;
export default loggedSlice.reducer