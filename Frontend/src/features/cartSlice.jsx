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
        removeFromCart: (state, action) => {
            const indexToRemove = state.items.findIndex(item => item.name === action.payload.name);
            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1);
            }
        }
    }
});

export const { addToCart, quantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
