import React from 'react'
import {useSelector} from "react-redux"
import AppLayout from '../../components/AppLayout'
import PageHeader from '../../components/PageHeader'

function Cart() {
  const itemsInCart = useSelector((state: any) => {
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