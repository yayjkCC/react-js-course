import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthorized: true,
}

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    login: (state) => {
        state.isAuthorized = true
    },
    logout: (state) => {
        state.isAuthorized = false
    }
  },
})

export const {login, logout} = baseSlice.actions

export default baseSlice.reducer