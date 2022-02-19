import React from 'react'
import './Product.css'

const Product = ({ product }) => {
  return (
    <div className="prod-wrap">
        <div>
            <img src={product.image} alt="" />
            <h4 className="product-name">{product.name}</h4>
            <p className="product-price">{product.price}</p>
        </div>
    </div>
  )
}

export default Product