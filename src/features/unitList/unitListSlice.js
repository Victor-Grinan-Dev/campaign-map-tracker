import { createSlice } from "@reduxjs/toolkit"
import { skills_by_unit_type, Unit } from "../../functions/Objects";

export const unitsListSlice = createSlice({
    name: 'unitsList',
    initialState:{
        value:[]
    },

    reducers:{
        
        addUnit:(state, action) => {
            state.value =  [...state.value, new Unit(state.length + 1, action.payload.name,action.payload.models, action.payload.point_const, skills_by_unit_type[action.payload.skills])
            ];
        },
    },
});

export const {addUnit} = unitsListSlice.actions;
export const unitListSelector = (state) => state.unitList.value;
export default unitsListSlice.reducer;

