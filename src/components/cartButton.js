import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../appState/cartSlice'
import Button from './button'

export default function CartButton() {
  const dispatch = useDispatch()
  const itemsInCart = useSelector(state => state.value)
  
  return (
      itemsInCart === 0 ?
      <Button onPress={() => {
          dispatch(increment())
          alert("item added successfully")
        }
      }>
        Add item to cart
      </Button>
      :
      <>
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
