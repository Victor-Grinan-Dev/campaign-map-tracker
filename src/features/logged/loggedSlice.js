import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
    
    name: 'logged',
    
    initialState: {
        value: false, //call this is_logged instead? ... later!?!?
        currentUser:undefined, //just the name of the user
        userType:"user",//change to visitor after find how to erase from db on log out
        userIndex:1,//change to undefined
    },
    
    reducers:{
        changeLogStatus: (state, action) => {
            if (action.payload === "visitor"){
                state.value = !state.value;
            }else if(!action.payload){
                state.value = !state.value;
            }
        },
        changeUser:(state, action)=>{
            state.currentUser = action.payload;
        },
        changeUserIndex:(state, action) =>{
            state.userIndex = action.payload
        }
    },
});

export const { changeLogStatus, changeUser, changeUserIndex } = loggedSlice.actions;
export const loggedSelector = (state) => state.logged.value;
export const userSelector = (state) => state.logged.currentUser;
export const userTypeSelector = (state) => state.logged.userType;
export const userIndexSelector = (state) => state.logged.userIndex;
export default loggedSlice.reducer