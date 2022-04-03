import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const increment = createAction('nameInput/increment');
const decrement = createAction('nameInput/decrement');

const nyReducer = createReducer('',{
[increment]: (state, action) => state + action.payload,
[decrement]: (state, action) => state + action.payload,
})

export const store = configureStore({
  reducer: {
    nameInput:nyReducer,
    numberInput:nyReducer,
  },
})