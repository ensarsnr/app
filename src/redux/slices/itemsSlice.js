// Importing createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Defining a new slice of state named "items"
export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        elements: [], // An array to hold elements
        count: 1, // A number to represent count
        kahve: [], // An array to hold kahve
        counts: {}, // An object to keep count of items
    },
    reducers: {
        // A reducer to update department in state
        changeDepartment: (state, action) => {
            state.department = action.payload;
        },
        // A reducer to add an element to the elements array in state
        addItem: (state, action) => {
            if (!state.elements.includes(action.payload)) {
                state.elements.push(action.payload);
            }
        },
        // A reducer to remove an element from the elements array in state
        destroyItem: (state, action) => {
            const indexToDelete = action.payload;
            state.elements.splice(indexToDelete, 1);
        },
        // A reducer to remove all kahve from the kahve array and reset count to 1
        removeTurkishCoffe: (state) => {
            state.kahve.splice(0, state.kahve.length);
            state.count = 1;
        },
        // A reducer to remove all elements from the elements array and reset count to 1
        removeAllItems: (state) => {
            state.elements.splice(0, state.elements.length);
            state.count = 1;
        },
        // A reducer to increment count of an item
        incrementCount: (state, action) => {
            const { item } = action.payload;
            state.counts[item] = state.counts[item] ? state.counts[item] + 1 : 1;
        },
        // A reducer to decrement count of an item
        decrementCount: (state, action) => {
            const { item } = action.payload;
            state.counts[item] = state.counts[item] ? state.counts[item] - 1 : 0;
        },
        // A reducer to increment count by 1
        increment: (state) => { state.count += 1 },
        // A reducer to decrement count by 1, but not below 1
        decrement: (state) => { state.count = state.count - 1 < 1 ? 1 : state.count - 1 },
        // A reducer to reset count to 1
        resetCount: (state) => { state.count = 1 },
        // A reducer to add kahve to the kahve array in state
        turkKahvesi: (state, action) => { state.kahve.push(action.payload) }
    }
})

// Exporting all reducers as named exports, and the slice reducer as default export
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
    incrementCount,
    decrementCount,
} = itemsSlice.actions

export default itemsSlice.reducer
