import { configureStore } from '@reduxjs/toolkit';
import loggedReducers from '../features/logged/loggedSlice';
import armyReducers from'../features/army/armySlice';
export default configureStore({
reducer: {
    logged: loggedReducers,
    army: armyReducers
    }
})