import { createSlice } from "@reduxjs/toolkit";


export const formationSlice = createSlice({
    
    name:'formation',
    initialState:{
        formName:"",
        composition:[], 
        s_description: "",
        l_description: "",
        image: "",
        faction: undefined, //this will be object
        subfaction: undefined, //this will be object
    },
    reducers:{
        changeFormationName:(state, action) => {
            state.formName = action.payload;
        },
        addUnitToComposition:(state, action) => {
            state.composition.push(action.payload);
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
    }
})

export const {changeFormationName, addUnitToComposition, changeComposition, changeS_description, changeL_description, changeImage, changeFaction, changeSubFaction} = formationSlice.actions;

export const formNameSelector = (state) => state.formation.formName;
export const compositionSelector = (state) => state.formation.composition;
export const s_descriptionSelector = (state) => state.formation.s_description;
export const l_descriptionSelector = (state) => state.formation.l_description;
export const imageSelector = (state) => state.formation.image;
export const factionSelector = (state) => state.formation.faction;
export const subfactionSelector = (state) => state.formation.subfaction;

export default formationSlice.reducer;