import React from 'react'
import Product from '../Product/Product'
import './FP.css'
import { featProd } from '../../products'

const FeaturedProduct = () => {
  return (
      <div className="feat-prod-items">
        {featProd.map((product)=>(
            <div key={product.id}>
                <Product product = {product}/>
            </div>
        ))}
      </div>
  )
}

export default FeaturedProduct