import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import baseReducer from './baseSlice';
import cartReducer from './cartSlice';
import catalogReducer from './catalogSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        catalog: catalogReducer,
        base: baseReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
