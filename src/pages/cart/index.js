import React from 'react'
import {useSelector} from "react-redux"
import AppLayout from '../../components/appLayout'
import PageHeader from '../../components/pageHeader'

function Cart() {
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

Cart.getLayout = AppLayout

export default Cart