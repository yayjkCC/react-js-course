import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { checkIfLoggedIn } from "./appState/baseSlice";

export default function AppContainer({children}){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkIfLoggedIn())
    }, [dispatch])

    return (
      <>
        {children}
      </>
    )
}