import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../appState/cartSlice'
import Button from './button'

export default function CartButton({name, price}) {
  const dispatch = useDispatch()
  const itemsInCart = useSelector(state => state.cart.value)
  
  return (
      itemsInCart === 0 ?
      <>
        <div style={{dispaly: 'flex', flexDirection: 'column'}}>
          <div>{name}</div>
          <div>{price}</div>
        </div>
        <Button onPress={() => {
            dispatch(increment())
            alert("item added successfully")
          }
        }>
          Add item to cart
        </Button>
      </>
      :
      <>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div>{name}</div>
          <div>{price}</div>
        </div>
        <Button onPress={() => {
          dispatch(increment())
          alert("cart count increased successfully")
          }
        }>
          Increase cart count
        </Button>
        <Button onPress={() => {
          dispatch(decrement())
          alert("cart count decreased successfully")
          }
        }>
          Decrease cart count
        </Button>
      </>
  )
}
