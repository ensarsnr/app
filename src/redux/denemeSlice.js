import { createSlice } from "@reduxjs/toolkit";


const denemeSlice = createSlice({
    name: "denemeItems",
    initialState: {
        elements: ["ads"]
    },
    reducers: {
        addSelectedItem:(state, action) => {
            state.elements.push(action.payload);
        }
    }
})

export const {addSelectedItem} = denemeSlice.actions;

export default denemeSlice.reducer;