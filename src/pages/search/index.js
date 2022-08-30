import React from 'react'
import AppLayout from '../../components/appLayout'
import PageHeader from '../../components/pageHeader'
import Product from '../../components/product'

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