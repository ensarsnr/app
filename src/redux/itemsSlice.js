import { createSlice } from "@reduxjs/toolkit";



export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        elements: [
            "Çay",
            "Kahve"
        ]
    },
    reducers: {
        addItem: (state, action) => {
            state.elements.push(action.payload);
        },
        destroyItem: (state, action) => {
            const indexToDelete = action.payload;
            state.elements.splice(indexToDelete, 1);
        },
        
    }
})

export const {addItem, destroyItem} = itemsSlice.actions

export default itemsSlice.reducer