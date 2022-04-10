import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
//   persistStore,
//   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { userSlice } from './userSlice';
// import storage from 'redux-persist/lib/storage';
// import todosReducer from './todos/todos-reducer';



// const todosPersistConfig = {
//   key: 'todos',
//   storage,
//   blacklist: ['filter'],
// };

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger],
  devTools: process.env.NODE_ENV === 'development',
});