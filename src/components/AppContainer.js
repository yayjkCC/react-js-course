import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { checkIfLoggedIn } from "../appState/baseSlice";
import { useRouter } from "next/router"

export default function AppContainer({children, isProtected}){
    const dispatch = useDispatch()
    const isAuthorized = useSelector(state => state.base.isAuthorized)
    const router = useRouter()

    useEffect(() => {
        dispatch(checkIfLoggedIn())
    }, [dispatch])

    useEffect(() => {
      console.log(isAuthorized)
      
      if(isProtected){
        if(!isAuthorized) router.push('/login')
      }else {
        if(isAuthorized) router.push('/')
      }
    }, [isProtected, isAuthorized, router])
    
    return children
}