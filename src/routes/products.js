import React, { useEffect, useMemo } from 'react'
import NavigationBar from '../components/navigationBar'
import Header from '../components/header'
import CartButton from '../components/cartButton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../appState/catalogSlice'

export function Products() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.catalog.products)
  const firstProductPrice = useMemo(() =>  {
    return products[0] ? products[0][0].price: null
  }, [products[0]])
  const firstProductName = useMemo(() =>  {
    return products[0] ? products[0][0].name: null
  }, [products[0]])
  
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
