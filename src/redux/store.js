import { configureStore } from "@reduxjs/toolkit";
import denemeSlice from "./denemeSlice";
import itemsSlice from "./itemsSlice";


export const store = configureStore({
    reducer: {
        items: itemsSlice,
        denemeItems: denemeSlice,
    }
})