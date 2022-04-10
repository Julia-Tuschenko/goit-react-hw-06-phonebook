import { createSlice } from '@reduxjs/toolkit';
import {addContact, deleteContact, changeFilter} from './contactsActions';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    [addContact]: (state, { payload }) => [...state, payload],

    [deleteContact]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),

    [changeFilter]: (_, { payload }) => payload,
    



    
    // [toggleCompleted]: (state, { payload }) =>
    //   state.map(todo =>
    //     todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    //   ),
//     logIn(state, action) {
//       state.login = action.payload;
//       state.isLoggedIn = true;
//     },
//     logOut(state) {
//       state.login = '';
//       state.isLoggedIn = false;
//     },
  },
});

// export const {  } = userSlice.actions;