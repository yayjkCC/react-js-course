import React, { useEffect } from 'react'
import Product from '../components/product'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../appState/catalogSlice'
import Grid from '@mui/material/Grid';
import PageHeader from '../components/pageHeader';
import AppLayout from '../components/appLayout';

function Products() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.catalog.products)
  
  useEffect(() => {
    dispatch(fetchProducts())  
  }, [dispatch])

  return (
    <>
      <PageHeader>Products</PageHeader>
      <Grid container>
        {products.map(product => {
          if(product){
            return (
              <Grid item key={product.name}>
                <Product name={product.name} price={product.price}/>
              </Grid>
            )
          }

          return null
        })}
      </Grid>
    </>
  )
}

Products.getLayout = AppLayout

export default Products