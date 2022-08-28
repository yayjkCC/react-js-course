import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Cart from './routes/cart'
import {Products} from './routes/products'
import Search from './routes/search'
import { store } from './appState/store'
import { Provider } from 'react-redux'
import RCThemeProvider from "./theme"
import { CssBaseline } from '@mui/material';
import {PrivateRoutes, AuthRoutes} from './components/privateRoutes';
import Login from './routes/login';
import Register from './routes/register';

function App() {
  return (
    <Provider store={store}>
      <RCThemeProvider>
          <CssBaseline />
            <BrowserRouter>
                <Routes>
                  <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/search" element={<Search />} />
                  </Route>
                  <Route element={<AuthRoutes />}>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                  </Route>
                </Routes>
            </BrowserRouter>
      </RCThemeProvider>
    </Provider>
  );
}

export default App;
