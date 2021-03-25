import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  changeFilter,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
} from './phonebook-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) => {
    const index = state.findIndex(item => item.id === action.payload);
    return [...state.slice(0, index), ...state.slice(index + 1)];
  },
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [fetchContactsRequest]: () => null,
  [addContactRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
