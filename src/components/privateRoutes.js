import React from "react"
import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router"
import AppLayout from "./appLayout"
import AuthLayout from "./authLayout"

export function PrivateRoutes(){
    const isAuthorized = useSelector(state => state.base.isAuthorized)

    return (
        isAuthorized ? 
            <AppLayout>
                <Outlet />
            </AppLayout> : 
            <Navigate to="/login" />
    )
}

export function AuthRoutes(){
    const isAuthorized = useSelector(state => state.base.isAuthorized)

    return (
        !isAuthorized ?
        <AuthLayout>
            <Outlet />
        </AuthLayout> : 
        <Navigate to={-1} />
    )
}