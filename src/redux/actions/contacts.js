import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("ADD_CONTACT");

export const deleteContact = createAction("DELETE_CONTACT");

export const uploadContactList = createAction("UPLOAD_CONTACT_LIST");
