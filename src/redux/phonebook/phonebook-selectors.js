import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFiltered = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getErrorMessage = state => state.contacts.error;

const getFilteredContacts = createSelector(
  [getAllContacts, getFiltered],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getLoading,
  getFiltered,
  getAllContacts,
  getErrorMessage,
  getFilteredContacts,
};
