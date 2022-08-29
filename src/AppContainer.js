import React, { useEffect } from "react"
import {PrivateRoutes, AuthRoutes} from './components/privateRoutes';
import Login from './routes/login';
import Register from './routes/register';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './routes/cart'
import {Products} from './routes/products'
import Search from './routes/search'
import { useDispatch } from "react-redux";
import { checkIfLoggedIn } from "./appState/baseSlice";

export default function AppContainer(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkIfLoggedIn())
    }, [dispatch])

    return (
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
    )
}