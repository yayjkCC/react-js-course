import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getIsAuthorized, onLogin, onLogout } from '../utils/authTokenManager';
import { BaseState } from './types';

const initialState: BaseState = {
  isAuthorized: null,
}

export const mockLogin = createAsyncThunk(
  'base/logIn',
  async () => {
    setTimeout(() => {}, 2000);
    return `{
      "accessToken": "1234",
      "refreshToken": "5679"
    }`
  }
)

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    login: (state) => {
        state.isAuthorized = true
    },
    logout: (state) => {
        onLogout()
        state.isAuthorized = false
    },
    checkIfLoggedIn: (state) => {
      state.isAuthorized = getIsAuthorized()
    }
  },
  extraReducers: (builder) => {
    builder.addCase(mockLogin.fulfilled, (state, action) => {
      state.isAuthorized = true
      const tokens = JSON.parse(action.payload)
      onLogin(tokens.accessToken, tokens.refreshToken, true)
    })
  }
})

export const {login, logout, checkIfLoggedIn} = baseSlice.actions

export default baseSlice.reducer