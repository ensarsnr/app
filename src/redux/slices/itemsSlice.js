import { createSlice } from "@reduxjs/toolkit";



export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        elements: []
    },
    reducers: {
        addItem: (state, action) => {
            state.elements.push(action.payload);
        },
        destroyItem: (state, action) => {
            const indexToDelete = action.payload;
            state.elements.splice(indexToDelete, 1);
        },
        removeAllItems: (state) => {
            state.elements.splice(0, state.elements.length)
        }
    }
})

export const { addItem, destroyItem, removeAllItems } = itemsSlice.actions

export default itemsSlice.reducer