// purpose of this file is to create a store -centeral state management
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./appSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})