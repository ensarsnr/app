import { createSlice } from "@reduxjs/toolkit";



export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        elements: []
    },
    reducers: {
        // bu action'ı kullanarak elements dizisine eleman atıyoruz bu diziyide istediğimiz
        // component'ta useSelector ile kullanabiliriz.
        addItem: (state, action) => {
            // Eğer state içinde aynı item zaten varsa eklemeyi yapma
            if (!state.elements.includes(action.payload)) {
                state.elements.push(action.payload);
            }
        },
        // bu action ise elements içindeki elemanları indexine göre silme işlemini yapıyor.
        destroyItem: (state, action) => {
            const indexToDelete = action.payload;
            state.elements.splice(indexToDelete, 1);
        },
        // elements dizisindeki bütün elemanları siliyor, sıfırlıyor.
        removeAllItems: (state) => {
            state.elements.splice(0, state.elements.length)
        }
    }
})

export const { addItem, destroyItem, removeAllItems } = itemsSlice.actions

export default itemsSlice.reducer