import { createSlice } from "@reduxjs/toolkit";

const emptyUnit = {
            id:null, 
            name: "", 
            models:null, 
            point_const:null, 
            skills:undefined,
}

export const unitsSlice = createSlice({

    name: 'unit',
    initialState: { 
        name: "", 
        models:null, 
        point_const:null, 
        skills:undefined,
    },
    reducers:{

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

export const {changeUnitName, changeModels, changePointCost, changeSkills} = unitsSlice.actions;

export const unitNameSelector = (state) => state.unit.name;
export const unitModelsSelector = (state) => state.unit.models;
export const unitPointConstSelector = (state) => state.unit.point_const;
export const skillsSelector = (state) => state.unit.skills;
export default unitsSlice.reducer;