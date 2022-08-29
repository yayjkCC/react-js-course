import './App.css';
import { store } from './appState/store'
import { Provider } from 'react-redux'
import RCThemeProvider from "./theme"
import { CssBaseline } from '@mui/material';
import React from "react"
import AppContainer from './AppContainer';

function App() {
  return (
    <Provider store={store}>
      <RCThemeProvider>
          <CssBaseline />
          <AppContainer />
      </RCThemeProvider>
    </Provider>
  );
}

export default App;
