import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {};

const reducer = combineReducers({});

const store = configureStore({
    reducer: reducer,
    initialState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;