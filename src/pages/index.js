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
        <a href="https://www.google.com">go</a>
      </Grid>
      <div id="example1">
        XYZ
      </div>
      <div id="example2">
        YYZ
      </div>
      <div id="example3">
        <div className='e3i' id="gi1">gi1</div>
        <div className='e3i' id="gi2">gi2</div>
        <div className='e3i' id="gi3">gi3</div>
      </div>
      <div id="example4">
        <div className='e4i' id="fi1">fi1</div>
        <div className='e4i' id="fi2">fi2</div>
        <div className='e4i' id="fi3">fi3</div>
      </div>
    </>
  )
}

Products.getLayout = AppLayout

export default Products