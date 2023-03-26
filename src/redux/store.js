import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./slices/itemsSlice";
import namesSlice from "./slices/namesSlice";


export const store = configureStore({
    reducer: {

        items: itemsSlice,
        names: namesSlice,
    }
})