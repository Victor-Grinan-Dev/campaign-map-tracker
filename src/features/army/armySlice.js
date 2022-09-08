import { createSlice } from "@reduxjs/toolkit";

export const armySlice = createSlice({
    name: 'army',
    initialState:{
        enlisted:[],
        formations:[],
    },
    reducers:{
        addToEnlisted:(state, action) => {
            state.enlisted.push(action.payload);
        },
        removeFromEnlisted:(state, action) => {

            state.enlisted = state.enlisted.filter(formation => {
                return formation.name !== action.payload || formation.id !== action.payload;
            });
        }, 
        addToFormations:(state, action) => {
            state.formations.push(action.payload);
        }, 
        removeFromFormations:(state, action) => {
            state.formations = state.enlisted.filter(formation => {
                return formation.name !== action.payload || formation.id !== action.payload;
            });
        }, 
 
    },
});

export const {addToEnlisted, removeFromEnlisted, addToFormations, removeFromFormations } = armySlice.actions;
export const enlistedSelector = (state) => state.army.enlisted;
export const formationsSelector = (state) => state.army.formations;
export default armySlice.reducer;