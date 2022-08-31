import { createSlice } from "@reduxjs/toolkit";

const initialValue = 0

export const counterSlice = createSlice({

    //declare state
    name: 'counter',
    
    initialState: {
        value: initialValue,
    },
    
    reducers:{
        //action 1
        increment: (state) => {
            state.value += 1;
        },
        //action 2
        incrementByAmount: (state, action) => {
            //state.value > 0 ? (state.value += action.payload) : null;
            state.value += action.payload;
        },
        //action 3
        reset: (state) => {
            state.value = 0;
        },
    },
});

export const { increment, incrementByAmount, reset } = counterSlice.actions;
export const counterSelector = (state) => state.counter.value;
export default counterSlice.reducer;