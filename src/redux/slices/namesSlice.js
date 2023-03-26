import { createSlice } from "@reduxjs/toolkit";


export const namesSlice = createSlice({
    name: "names",
    initialState: {
        name: "ensar"
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        }
    }
})


export const { changeName } = namesSlice.actions;

export default namesSlice.reducer;