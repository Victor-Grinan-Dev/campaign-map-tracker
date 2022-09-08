import { createSlice } from "@reduxjs/toolkit";

export const armySlice = createSlice({
    name: 'army',
    initialState:{
        enlisted:[],
        formations:[],
    },
    reducers:{
        addToEnlisted:(state, action) => {

        },
        removeFromEnlisted:(state, action) => {

        }, 
        addToFormations:(state, action) => {

        }, 
        removeFromFormations:(state, action) => {

        }, 
        editAFormation:(state, action) => {

        }, 
    },
});

export const {addToEnlisted, removeFromEnlisted, addToFormations, removeFromFormations, editAFormation } = armySlice.actions;
export const enlistedSelector = (state) => state.army.enlisted;
export const formationsSelector = (state) => state.army.formations;
export default armySlice.reducer;