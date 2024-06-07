import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        }
    },
})

export const { toggleMenu, closeMenu } = menuSlice.actions

export default menuSlice.reducer