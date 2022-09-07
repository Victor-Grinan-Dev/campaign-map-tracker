import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
    
    name: 'logged',
    
    initialState: {
        value: false,
        currentUser:undefined, //just the name of the user
        userType:"visitor",
        userId:undefined,
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
        changeUserId:(state, action) =>{
            state.userId = action.payload
        }
    },
});

export const { changeLogStatus, changeUser, changeUserId } = loggedSlice.actions;
export const loggedSelector = (state) => state.logged.value;
export const userSelector = (state) => state.logged.currentUser;
export const userTypeSelector = (state) => state.logged.userType;
export const userIdSelector = (state) => state.logged.userId;
export default loggedSlice.reducer