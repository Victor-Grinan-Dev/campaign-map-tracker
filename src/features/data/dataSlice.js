/*
import React, { useEffect } from 'react'

import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../../services/db2connAxios";
import { useSelector } from "react-redux";
import { userTypeSelector } from "../logged/loggedSlice";


export const dataSlice = createSlice({
    name:'data',
    initialState:{
        formations:[],
        armyList:[],
        isLoading:true,
        search:"",
    },
    reducers: {
        getFormations(state, action) {
            state.formations = action.payload;
        },
        getArmyList(state, action) {
            state.armyList = action.payload;
        },
        toggleIsLoading(state){
            state.isLoading = !state.isLoading
        },
        changeSearch(state, action) {
            state.search = action.payload;
        },
    }
});

export const { getFormations, getArmyList, toggleIsLoading, changeSearch } = dataSlice.actions;

export const formationsSelector = (state) => state.data.formations;
export const armyListSelector = (state) => state.data.armyList;
export const isLoadingSelector = (state) => state.data.isLoading;
export const searchSelector = (state) => state.data.search;
    
export const initializeData = () => {
    return async (dispatch) => {
      const formations = await getData();
      dispatch(getFormations(formations));
      dispatch(toggleIsLoading);
    };
  };

export default dataSlice.reducer;
*/