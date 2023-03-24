import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";


export const store = configureStore({
    reducer: {
        items: itemsSlice,
    }
})