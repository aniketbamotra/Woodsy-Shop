import React from 'react'
import './Product.css'

const Product = ({ product }) => {
  return (
    <main className="prod-wrap">
        <div>
            <img src={product.image} alt="" />
            <h4 className="product-name">{product.name}</h4>
            <p className="product-price">{product.price}</p>
        </div>
    </main>
  )
}

export default Product