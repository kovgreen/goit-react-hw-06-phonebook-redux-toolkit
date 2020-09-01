import { createReducer } from "@reduxjs/toolkit";
import { filterContacts } from "../actions/filter";

export const filterReducer = createReducer("", {
  [filterContacts]: (state, action) => action.payload
});
