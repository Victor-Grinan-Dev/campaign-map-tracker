import { createSlice } from "@reduxjs/toolkit";

const createFormatinSlice = createSlice({
    name: 'formation',
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
        resetState:(state) => {
            state.value = {
                name:"",
                composition:[],
                s_description:"",
                l_description:"",
                image:"",
            }
        }
    },
});

export const {changeName, changeComposition, changeS_description, changeL_description, changeImage} = createFormatinSlice.actions;

export const nameFormationSelector = (state) => state.formation.name;
export const compositionFormationSelector = (state) => state.formation.composition;
export const s_descriptionFormationSelector = (state) => state.formation.s_description;
export const l_descriptionFormationSelector = (state) => state.formation.l_description;
export const imageFormationSelector = (state) => state.formation.image;

export default createFormatinSlice.reducer;