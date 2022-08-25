import React from 'react'
import NavigationBar from '../components/navigationBar'
import Header from '../components/header'
import {useSelector} from "react-redux"

export default function Cart() {
  const itemsInCart = useSelector((state) => {
    return state.value
  })
  

  return (
    <div>
      <NavigationBar />
      <div style={{padding:"16px", display: "flex", flexDirection: "column"}}>
        <Header>cart</Header>
        Total items added to cart: {itemsInCart}
      </div>
    </div>
  )
}
