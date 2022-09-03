import React from 'react'
import AppLayout from '../../components/AppLayout'
import PageHeader from '../../components/PageHeader'
import Product from '../../components/Product'

function Search() {

  return (
    <>
      <PageHeader>Search</PageHeader>
      <Product price={100} name="Oil"/>
    </>
  )
}

Search.getLayout = AppLayout

export default Search