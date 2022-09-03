import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { checkIfLoggedIn } from "../appState/baseSlice";
import { useRouter } from "next/router"
import Loading from "./Loading";
import { RootState } from "../appState/store";

type Props = {
  isProtected: boolean,
  children: JSX.Element
}

export default function AppContainer({children, isProtected}: Props){
    const dispatch = useDispatch()
    const isAuthorized = useSelector((state: RootState) => state.base.isAuthorized)
    const router = useRouter()
    const [isUnHandled, setIsUnhandled] = useState(true)
    const [routeCheckFinished, setIsRouteCheckFinished] = useState(false)

    useEffect(() => {
        dispatch(checkIfLoggedIn())
    }, [dispatch])


    useEffect(() => {
      if(routeCheckFinished){
        localStorage.setItem('lastVisitedRoute', router.route)
      }
    }, [routeCheckFinished, router])

    useEffect(() => {
      if(isAuthorized != null){
        //resetting states before route access check
        setIsRouteCheckFinished(false)
        setIsUnhandled(true)
        const lastRoute = localStorage.getItem('lastVisitedRoute')

        //re routing users if they are trying to access unauthorized page
        if(isProtected && !isAuthorized){
          router.replace('/login')
        }else if(!isProtected && isAuthorized){
          if(lastRoute === '/login') router.replace('/')
          else if(lastRoute !== null){
            router.replace(lastRoute)
          } 
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