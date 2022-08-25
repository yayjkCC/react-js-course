import React from 'react'
import NavigationBar from '../components/navigationBar'
import Header from '../components/header'
import CartButton from '../components/cartButton'

export default function Search() {

  return (
    <div>
      <NavigationBar />
      <div style={{padding:"16px", display: "flex", flexDirection: "column"}}>
        <Header>search</Header>
        <CartButton />
      </div>
    </div>
  )
}
