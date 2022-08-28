import { configureStore } from '@reduxjs/toolkit'
import baseSlice from './baseSlice'
import cartReducer from './cartSlice'
import catalogReducer from './catalogSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    catalog: catalogReducer,
    base: baseSlice
  },
})