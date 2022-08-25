import React from 'react'
import { Link } from 'react-router-dom'

export default function navigationBar() {
  return (
    <div style={{padding: "16px"}}>
      <Link to="/" style={{marginRight: "16px"}}>Products</Link>
      <Link to="/search" style={{marginRight: "16px"}}>Search</Link>
      <Link to="/cart" style={{marginRight: "16px"}}>Cart</Link>
    </div>
  )
}
