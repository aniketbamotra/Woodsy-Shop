import React from 'react'
import './TP.css'
import Product from '../Product/Product'
import { topProd } from '../../products'

const TopPicks = () => {
  return (
    <div className="top-items">
        {topProd.map((product)=>(
            <div className='top-prod-wrap' id={product.id} key={product.id}>
                <Product product = {product}/>
            </div>
        ))}
      </div>
  )
}

export default TopPicks

