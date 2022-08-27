import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Cart from './routes/cart'
import {Products} from './routes/products'
import Search from './routes/search'
import { store } from './appState/store'
import { Provider } from 'react-redux'
import RCThemeProvider from "./theme"
import { CssBaseline } from '@mui/material';
import AppLayout from './components/appLayout';

function App() {
  return (
    <Provider store={store}>
      <RCThemeProvider>
          <CssBaseline />
            <BrowserRouter>
              <AppLayout>
              <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/search" element={<Search />} />
              </Routes>
              </AppLayout>
            </BrowserRouter>
      </RCThemeProvider>
    </Provider>
  );
}

export default App;
