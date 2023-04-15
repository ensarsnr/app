import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        elements: [],
        count: 1,
    },
    reducers: {
        changeDepartment: (state, action) => {
            state.department = action.payload;
        },
        addItem: (state, action) => {
            if (!state.elements.includes(action.payload)) {
                state.elements.push(action.payload);
            }
        },
        destroyItem: (state, action) => {
            const indexToDelete = action.payload;
            state.elements.splice(indexToDelete, 1);
        },
        removeAllItems: (state) => {
            state.elements.splice(0, state.elements.length);
            state.count = 0; // Tüm elemanlar silinince count'i sıfırlıyoruz
        },
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count = state.count - 1 < 1 ? 1 : state.count - 1 },
        resetCount: (state) => { state.count = 1 }
    }
})

export const { addItem, destroyItem, removeAllItems, changeDepartment, increment, decrement, resetCount } = itemsSlice.actions

export default itemsSlice.reducer
