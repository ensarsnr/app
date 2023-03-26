import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./slices/itemsSlice";


export const store = configureStore({
    reducer: {
        items: itemsSlice,
    }
})