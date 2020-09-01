import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../reducers/contacts";
import { filterReducer } from "../reducers/filter";

const globalSate = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  }
  //   devTools: process.env.NODE_ENV !== "production"
});

export default globalSate;
