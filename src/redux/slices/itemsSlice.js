import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        elements: [],
        count: 0,
    },
    reducers: {
        changeDepartment: (state, action) => {
            state.department = action.payload;
        },
        addItem: (state, action) => {
            if (!state.elements.includes(action.payload)) {
                state.elements.push(action.payload);
                state.count += 1; // Eleman eklenince count'i artırıyoruz
            }
        },
        destroyItem: (state, action) => {
            const indexToDelete = action.payload;
            state.elements.splice(indexToDelete, 1);
            state.count -= 1; // Eleman silince count'i azaltıyoruz
        },
        removeAllItems: (state) => {
            state.elements.splice(0, state.elements.length);
            state.count = 0; // Tüm elemanlar silinince count'i sıfırlıyoruz
        }
    }
})

export const { addItem, destroyItem, removeAllItems, changeDepartment } = itemsSlice.actions

export default itemsSlice.reducer
