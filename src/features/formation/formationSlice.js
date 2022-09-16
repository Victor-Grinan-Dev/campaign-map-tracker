import { createSlice } from "@reduxjs/toolkit";

const createFormatinSlice = createSlice({

    name: 'formation',

    initialState: {
            formationName: "",
            composition: [],
            s_description: "",
            l_description: "",
            image: "",
            faction: "",
            subfaction: "",
        
    },

    reducers:{
        changeFormationName:(state, action) => {
            state.formationName = action.payload;
        },
        addUnitToComposition:(state, action) => {
            //state.composition = action.payload;
            state.composition.push(action.payload);
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
        changeFaction:(state, action) => {
            state.faction = action.payload;
        },
        changeSubFaction:(state, action) => {
            state.subfaction = action.payload;
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

export const {changeFormationName, addUnitToComposition, changeS_description, changeL_description, changeImage, changeFaction, changeSubFaction} = createFormatinSlice.actions;

export const formNameSelector = (state) => state.formationName;

export const compositionSelector = (state) => state.composition;
export const s_descriptionSelector = (state) => state.s_description;
export const l_descriptionSelector = (state) => state.l_description;
export const imageSelector = (state) => state.image;
export const factionSelector = (state) => state.faction;
export const subfactionSelector = (state) => state.subfaction;
export default createFormatinSlice.reducer;