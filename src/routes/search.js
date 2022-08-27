import React from 'react'
import PageHeader from '../components/pageHeader'
import Product from '../components/product'

export default function Search() {

  return (
    <>
      <PageHeader>Search</PageHeader>
      <Product price={100} name="Oil"/>
    </>
  )
}
