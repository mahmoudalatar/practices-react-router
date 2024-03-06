import React from "react"
import { Link, Outlet } from "react-router-dom"

function Products() {
  return (
    <>
      <h2>Products</h2>
      <nav>
        <Link to="featured-products">New Feature</Link>
        <Link to="new-products">New Product</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Products
