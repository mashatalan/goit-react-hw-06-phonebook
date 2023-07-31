import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filterValue) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase().trim()))
} )
