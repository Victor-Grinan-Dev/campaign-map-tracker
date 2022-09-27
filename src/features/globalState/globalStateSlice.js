import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, getUser, postSettedFormation } from "../../services/db2connAxios";
export const globalState = createSlice({
    name:'globalState',
    initialState:{

        //logged:
        isLogging: false, 
        isLogged: false,
        currentUser:undefined, 
        userType:"visitor",
        userIndex:0,
        userId:undefined,

        userData:undefined,

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
        toggleIsLogging: (state) => {
            state.isLogging = !state.isLogging;
        },

        changeUserData:(state, action) => {
            state.userData = action.payload;
        },
        changeUserImage:(state, action) =>{
            state.userData.image = action.payload;
        },
        addUserImage:(state, action) => {
            state.action.images.push(action.payload);
        },
        setIsLogging:(state,action) =>{
            state.isLogging = action.payload;
        },
        setIsLoading:(state, action) => {
            state.isLoading = action.payload;
        },
        toggleIsLogged: (state) => {
            state.isLogged = !state.isLogged;
        },
        setIsLogged: (state, action) => {
            state.isLogged = action.payload;
        },
        changeUserName:(state, action)=>{
            state.currentUser = action.payload;
        },
        changeUserType:(state, action) => {
            state.userType = action.payload;
        },
        changeUserIndex:(state, action) =>{
            state.userIndex = action.payload;
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
        setFormations:(state, action) => {
            state.army.formations = action.payload;
        }
    },
});
const campaingsEndPoint = "http://localhost:8011/campaings";
const mapsEndPoint = "http://localhost:8011/maps";
const factionsEndPoint = "http://localhost:8011/factions";
const badgesEndPoint = "http://localhost:8011/badges";
const active_skillsEndPoint = "http://localhost:8011/active_skills";
const passive_skillsEndPoint = "http://localhost:8011/passive_skills";
const negativeEndPoint = "http://localhost:8011/negative";
const objectsEndPoint = "http://localhost:8011/objects";
const unit_typesEndPoint = "http://localhost:8011/unit_types";
const userEndPoint = "http://localhost:8011/user";
const visitorEndPoint = "http://localhost:8011/visitor";

const baseUrl = "http://localhost:8011"

export const initializeData = (userType) => {
    return async (dispatch, getData) => {//(dispatch, getData) for read state here
        
        if (userType === 'visitor'){      
            const sampleFormations = await getDatabase(`${visitorEndPoint}/0`);
            dispatch(setFormations(sampleFormations.formations));
            dispatch(setIsLoading(false));

        }else{
            const index = getData().globalState.userIndex;
            const data = await getDatabase(`${userEndPoint}`);
            dispatch(changeUserData(data[index]));
            dispatch(setFormations(data[index].formations)); 
            dispatch(setIsLoading(false));
        }
    };
};

//logged
export const { 
    changeUserData,

    toggleIsLogging,
    setIsLogging,
    toggleIsLogged,
    setIsLogged, 
    changeUserName,
    changeUserType, 
    changeUserIndex,
    toggleIsLoading,
    setIsLoading,
    changeSearch
} = globalState.actions;

export const userIdSelector = (state) => state.globalState.userId;
export const userDataSelector = (state) => state.globalState.userData;
export const isLoggingSelector = (state) => state.globalState.isLogging;
export const isLoggedSelector = (state) => state.globalState.isLogged;
export const userNameSelector = (state) => state.globalState.currentUser;
export const userTypeSelector = (state) => state.globalState.userType;
export const userIndexSelector = (state) => state.globalState.userIndex;
export const isLoadingSelector = (state) => state.globalState.isLoading;
export const searchSelector = (state) => state.globalState.search;

//unit
export const {
    changeUnitId,
    changeUnitName,
    changeModels,
    changePointCost,
    changeSkills,
    resetUnitState
} = globalState.actions;

export const unitIdSelector = (state) => state.globalState.unit.id
export const unitNameSelector = (state) => state.globalState.unit.name
export const modelsSelector = (state) => state.globalState.unit.models
export const unitPointSelector = (state) => state.globalState.unit.point_const
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

export const formNameSelector = (state) => state.globalState.formation.name;
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
    removeFromFormations,
    setFormations
} = globalState.actions;

export const enlistedSelector = (state) => state.globalState.army.enlisted;
export const formationsSelector = (state) => state.globalState.army.formations;

export default globalState.reducer;