import React from 'react'
import Product from '../Product/Product'
import './ProductGrid.css'
import { AllProd } from '../../products'

const ProductGrid = () => {
  return (
      <div className="grid-wrap">
        {AllProd.map((product)=>(
        <div key={product.id}>
        <Product product = {product}/>
        </div>
    ))}
      </div>
    
  )
}

export default ProductGrid