import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ListUsersAPIReducer, SingleUserAPIReducer } from "./redux/reducer";
import logger from "redux-logger";

const initialState = {};

const reducer = combineReducers({
    ListUsersData: ListUsersAPIReducer,
    SingleUserData: SingleUserAPIReducer,
});
const store = configureStore({
    reducer,
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;