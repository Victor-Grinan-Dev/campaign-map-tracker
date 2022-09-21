import { configureStore } from '@reduxjs/toolkit';
import loggedReducers from '../features/logged/loggedSlice';
import unitReducers from '../features/unit/unitSlice';
import formationReducer from '../features/formation/formationSlice';
import dataSlice from '../features/data/dataSlice';
import globalStateReducer from '../features/globalState/globalStateSlice';

export default configureStore({
    //next line prevent error on: react_devtools_backend.js:4026 A non-serializable value was detected in an action, in the path: `payload`. Value: {object...}
    middleware: getDefaultMiddleware =>getDefaultMiddleware({ serializableCheck: false,}), 
    reducer:{
        logged: loggedReducers,
        unit: unitReducers,
        formation: formationReducer,
        data: dataSlice,
        globalState: globalStateReducer,
        }
});