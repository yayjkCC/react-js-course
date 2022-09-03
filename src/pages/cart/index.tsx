import {useSelector} from "react-redux"
import { RootState } from '../../appState/store'
import AppLayout from '../../components/AppLayout'
import PageHeader from '../../components/PageHeader'
import { NextComponent } from '../_app'

const Cart: NextComponent = () => {
  const itemsInCart = useSelector((state: RootState) => {
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