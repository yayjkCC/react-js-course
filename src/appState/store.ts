import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
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

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch