import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        elements: [],
        count: 1,
        kahve: [],
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
        removeTurkishCoffe: (state) => {
            state.kahve.splice(0, state.kahve.length);
            state.count = 1;
        },
        removeAllItems: (state) => {
            state.elements.splice(0, state.elements.length);
            state.count = 1; // Tüm elemanlar silinince count'i sıfırlıyoruz
        },
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count = state.count - 1 < 1 ? 1 : state.count - 1 },
        resetCount: (state) => { state.count = 1 },
        turkKahvesi: (state, action) => { state.kahve.push(action.payload) }
    }
})

export const {
    addItem,
    increment,
    decrement,
    resetCount,
    destroyItem,
    turkKahvesi,
    removeAllItems,
    changeDepartment,
    removeTurkishCoffe,
} = itemsSlice.actions

export default itemsSlice.reducer
