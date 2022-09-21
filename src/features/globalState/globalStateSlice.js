import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../../services/db2connAxios";
export const globalState = createSlice({
    name:'globalState',
    initialState:{

        //logged:
        islogged: false, 
        currentUser:undefined, 
        userType:"user",
        userIndex:0,
        isLoading:true,
        search:"",

        //unit:
        unit: { 
            id:1,
            name: "", 
            models:null, 
            point_const:null, 
            skills:undefined,
        },
        formation:{
            name:"",
            composition:[], 
            s_description: "",
            l_description: "",
            image: "",
            faction: undefined, 
            subfaction: undefined, 
        },
        army:{
            enlisted:[],
            formations:[],
        },
    },
    reducers:{
        //logged:
        changeLogStatus: (state, action) => {
            //todo: need review.
            if (action.payload === "visitor"){
                state.islogged = !state.islogged;
            }else if(!action.payload){
                state.islogged = !state.islogged;
            }
        },
        changeUser:(state, action)=>{
            state.currentUser = action.payload;
        },
        changeUserIndex:(state) =>{
            state.userIndex += 1;
        },
        toggleIsLoading(state){
            state.isLoading = !state.isLoading
        },
        changeSearch(state, action) {
            state.search = action.payload;
        },

        //unit:
        changeUnitId:(state) => {
            state.unit.id = parseInt(state.unit.id, 10) + 1;
        },
        changeUnitName:(state, action) => {
            state.unit.name = action.payload;
        },
        changeModels:(state, action) => {
            state.unit.models = action.payload;
        },
        changePointCost:(state, action) => {
            state.unit.point_const = action.payload;
        },
        changeSkills:(state, action) => {
            state.unit.skills = action.payload;
        },
        resetUnitState:(state) => {
            state.unit = { 
                name: "", 
                models:null, 
                point_const:null, 
                skills:undefined,
            }
        },

        //formation
        changeFormationName:(state, action) => {
            state.formation.name = action.payload;
        },
        addUnitToComposition:(state, action) => {
            state.formation.composition.push(action.payload);
        },
        changeComposition:(state, action) => {
            state.formation.composition = action.payload;
        },
        changeS_description:(state, action) => {
            state.formation.s_description = action.payload;
        },
        changeL_description:(state, action) => {
            state.formation.l_description = action.payload;
        },
        changeImage:(state, action) => {
            state.formation.image = action.payload;
        },
        changeFaction:(state, action) => {
            state.formation.faction = action.payload;
        },
        changeSubFaction:(state, action) => {
            state.formation.subfaction = action.payload;
        },

        //army:
        addToEnlisted:(state, action) => {
            state.army.enlisted.push(action.payload);
        },
        removeFromEnlisted:(state, action) => {

            state.army.enlisted = state.enlisted.filter(formation => {
                return formation.name !== action.payload || formation.id !== action.payload;
            });
        }, 
        addToFormations:(state, action) => {
            state.army.formations.push(action.payload);
        }, 
        removeFromFormations:(state, action) => {
            state.army.formations = state.enlisted.filter(formation => {
                return formation.name !== action.payload || formation.id !== action.payload;
            });
        }, 
    },
});

export const initializeData = () => {
    return async (dispatch) => {
      const formations = await getData();
      dispatch(); //getFormations(formations)
      dispatch();//toggleIsLoading
    };
};
//logged
export const { 
    changeLogStatus, 
    changeUser, 
    changeUserIndex,
    toggleIsLoading,
    changeSearch
} = globalState.actions;

export const loggedSelector = (state) => state.globalState.islogged;
export const userSelector = (state) => state.globalState.currentUser;
export const userTypeSelector = (state) => state.globalState.userType;
export const userIndexSelector = (state) => state.globalState.userIndex;

//unit
export const {
    changeUnitId,
    changeUnitName,
    changeModels,
    changePointCost,
    changeSkills,
    resetUnitState
} = globalState.actions;

export const nameSelector = (state) => state.globalState.unit.name
export const modelsSelector = (state) => state.globalState.unit.models
export const point_constSelector = (state) => state.globalState.unit.point_const
export const skillsSelector = (state) => state.globalState.unit.skills

//formation
export const {
    changeFormationName, 
    addUnitToComposition, 
    changeComposition, 
    changeS_description, 
    changeL_description, 
    changeImage, 
    changeFaction, 
    changeSubFaction
} = globalState.actions;

export const formNameSelector = (state) => state.globalState.formation.formName;
export const compositionSelector = (state) => state.globalState.formation.composition;
export const s_descriptionSelector = (state) => state.globalState.formation.s_description;
export const l_descriptionSelector = (state) => state.globalState.formation.l_description;
export const imageSelector = (state) => state.globalState.formation.image;
export const factionSelector = (state) => state.globalState.formation.faction;
export const subfactionSelector = (state) => state.globalState.formation.subfaction;

//army
export const {
    addToEnlisted, 
    removeFromEnlisted, 
    addToFormations, 
    removeFromFormations 
} = globalState.actions;

export const enlistedSelector = (state) => state.globalState.army.enlisted;
export const formationsSelector = (state) => state.globalState.army.formations;

export default globalState.reducer;