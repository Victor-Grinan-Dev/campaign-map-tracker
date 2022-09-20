import { configureStore } from '@reduxjs/toolkit';
import loggedReducers from '../features/logged/loggedSlice';
import armyReducers from'../features/army/armySlice';
import unitReducers from '../features/unit/unitSlice';
import unitListReducer from '../features/unitList/unitListSlice';
import formationReducer from '../features/formation/formationSlice';
import dataSlice from '../features/data/dataSlice';

export default configureStore({
    //next line prevent error on: react_devtools_backend.js:4026 A non-serializable value was detected in an action, in the path: `payload`. Value: {object...}
    middleware: getDefaultMiddleware =>getDefaultMiddleware({ serializableCheck: false,}), 
    reducer:{
        logged: loggedReducers,
        army: armyReducers,
        unit: unitReducers,
        unitList: unitListReducer,
        formation: formationReducer,
        database: dataSlice,
        }
});