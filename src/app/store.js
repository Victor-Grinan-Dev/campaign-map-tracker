import { configureStore } from '@reduxjs/toolkit';
import loggedReducer from '../features/logged/loggedSlice';

export default configureStore({
reducer: {
    logged: loggedReducer,

    }
})