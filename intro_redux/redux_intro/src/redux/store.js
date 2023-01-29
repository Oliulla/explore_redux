import { createStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/usersReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(userReducer, composeWithDevTools());
