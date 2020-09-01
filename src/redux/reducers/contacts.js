import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  uploadContactList
} from "../actions/contacts";

export const contactsReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  [uploadContactList]: (state, action) => [...state, ...action.payload]
});
