import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        addQuantity: (state, action) => {
            const indexToChange = state.items.findIndex(item => item.name === action.payload.name)
            if (indexToChange !== -1) {
                state.items[indexToChange].quantity += 1;
            }
        },
        removeQuantity: (state, action) => {
            const indexToChange = state.items.findIndex(item => item.name === action.payload.name)
            if (indexToChange !== -1) {
                if (state.items[indexToChange].quantity > 1) {
                    state.items[indexToChange].quantity -= 1;
                } else {
                    state.items.splice(indexToChange, 1);
                }
            }


        },
        removeFromCart: (state, action) => {
            const indexToRemove = state.items.findIndex(item => item.name === action.payload.name);
            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1)
            }
        },
        clearCart: (state) => {
            state.items = []
        }
    }
});

export const { addToCart, removeFromCart, addQuantity, removeQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
