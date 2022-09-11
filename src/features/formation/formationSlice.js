import { createSlice } from "@reduxjs/toolkit";

const createFormatinSlice = createSlice({
    name: 'createFormation',
    initialState:{
        name:"",
        composition:[],
        s_description:"",
        l_description:"",
        image:"",
    },

    reducers:{
        changeName:(state, action) => {
            state.name = action.payload;
        },
        changeComposition:(state, action) => {
            state.composition = action.payload;
        },
        changeS_description:(state, action) => {
            state.s_description = action.payload;
        },
        changeL_description:(state, action) => {
            state.l_description = action.payload;
        },
        changeImage:(state, action) => {
            state.image = action.payload;
        },
    },
});

export const {changeName, changeComposition, changeS_description, changeL_description, changeImage} = createFormatinSlice.actions;

export default createFormatinSlice.reducer;