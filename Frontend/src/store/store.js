import { configureStore } from '@reduxjs/toolkit'
import  menuReducer  from '../features/MenuSlice'
export const store = configureStore({
  reducer: {
    menu : menuReducer
  },
})