import { configureStore } from '@reduxjs/toolkit';
import loggedReducers from '../features/logged/loggedSlice';
import armyReducers from'../features/army/armySlice';
import unitReducers from '../features/unit/unitSlice';
import unitListReducer from '../features/unitList/unitListSlice';

export default configureStore({
reducer: {
    logged: loggedReducers,
    army: armyReducers,
    unit: unitReducers,
    unitList: unitListReducer,
    }
})