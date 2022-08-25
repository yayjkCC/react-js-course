import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Cart from './routes/cart'
import {Products} from './routes/products'
import Search from './routes/search'
import { store } from './appState/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
