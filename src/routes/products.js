import React, { useEffect, useMemo } from 'react'
import NavigationBar from '../components/navigationBar'
import Header from '../components/header'
import CartButton from '../components/cartButton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../appState/catalogSlice'

export function Products() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.catalog.products)
  const firstProduct = products[0]
  const firstProductPrice = useMemo(() =>  {
    return firstProduct ? firstProduct.price: null
  }, [firstProduct])
  const firstProductName = useMemo(() =>  {
    return firstProduct ? firstProduct.name: null
  }, [firstProduct])
  
  useEffect(() => {
    dispatch(fetchProducts())  
  }, [dispatch])

  return (
    <div>
      <NavigationBar />
      <div style={{padding:"16px", display: "flex", flexDirection: "column"}}>
        <Header>products</Header>
        <CartButton name={firstProductName} price={firstProductPrice}/>
      </div>
    </div>
  )
}
