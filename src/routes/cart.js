import React from 'react'
import {useSelector} from "react-redux"
import PageHeader from '../components/pageHeader'

export default function Cart() {
  const itemsInCart = useSelector((state) => {
    return state.cart.value
  })
  

  return (
    <>
      <PageHeader>Cart</PageHeader>
      Total items added to cart: {itemsInCart}
    </>
  )
}
