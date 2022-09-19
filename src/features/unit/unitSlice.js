import { createSlice } from "@reduxjs/toolkit";


export const unitSlice = createSlice({

    name: 'unit',
    initialState: { 
        id:1,
        name: "", 
        models:null, 
        point_const:null, 
        skills:undefined,
    },
    reducers:{
        changeUnitId:(state) => {
            state.id = parseInt(state.id, 10) + 1;
        },
        changeUnitName:(state, action) => {
            state.name = action.payload;
        },
        changeModels:(state, action) => {
            state.models = action.payload;
        },
        changePointCost:(state, action) => {
            state.point_const = action.payload;
        },
        changeSkills:(state, action) => {
            state.skills = action.payload;
        },
        resetUnitState:(state) => {
            state.value = { 
                name: "", 
                models:null, 
                point_const:null, 
                skills:undefined,
            }
        }
    },
});

export const {changeUnitId, changeUnitName, changeModels, changePointCost, changeSkills} = unitSlice.actions;
export const unitIdSelector = (state) => state.unit.id;
export const unitNameSelector = (state) => state.unit.name;
export const unitModelsSelector = (state) => state.unit.models;
export const unitPointConstSelector = (state) => state.unit.point_const;
export const skillsSelector = (state) => state.unit.skills;
export default unitSlice.reducer;