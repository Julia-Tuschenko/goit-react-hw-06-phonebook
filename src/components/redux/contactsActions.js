import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', text => ({
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  }));
  
export const deleteContact = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');
  
//   const toggleCompleted = createAction('contacts/toggleCompleted');
  
//   export default { addTodo, deleteTodo, changeFilter, toggleCompleted };