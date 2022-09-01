import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { checkIfLoggedIn } from "../appState/baseSlice";
import { useRouter } from "next/router"
import Loading from "./Loading";

export default function AppContainer({children, isProtected}){
    const dispatch = useDispatch()
    const isAuthorized = useSelector(state => state.base.isAuthorized)
    const router = useRouter()
    const [isUnHandled, setIsUnhandled] = useState(true)
    const [routeCheckFinished, setIsRouteCheckFinished] = useState(false)

    useEffect(() => {
        dispatch(checkIfLoggedIn())
    }, [dispatch])

    useEffect(() => {
      if(isAuthorized != null){
        //resetting states before route access check
        setIsRouteCheckFinished(false)
        setIsUnhandled(true)

        //re routing users if they are trying to access unauthorized page
        if(isProtected && !isAuthorized){
          router.replace('/login')
        }else if(!isProtected && isAuthorized){
          router.back()
        }
        
        //finishing route check if re-routing has not taken place(user trying to access authorized page)
        if(isAuthorized === isProtected){
          setIsRouteCheckFinished(true)
        }
      }
    }, [isProtected, isAuthorized])

    useEffect(() => {
      setIsUnhandled(!routeCheckFinished)
    }, [routeCheckFinished])

    
    if(isUnHandled) return <Loading />

    return children
}