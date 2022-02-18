import React from 'react'
import Product from '../Product/Product'
import './FP.css'


const featProd = [
    {id: 1, name: 'Gold Chair1', descrip: 'This is a test description only for dev purposes.', price: '$25.49', image: require('../../asserts/media/scatered-img (1).jpg')},
    {id: 2, name: 'Gold Chair2', descrip: 'This is a test description only for dev purposes.', price: '$26.49', image: require('../../asserts/media/scatered-img (2).jpg')},
    {id: 3, name: 'Gold Chair3', descrip: 'This is a test description only for dev purposes.', price: '$27.99', image: require('../../asserts/media/scatered-img (3).jpg')},
    {id: 4, name: 'Gold Chair4', descrip: 'This is a test description only for dev purposes.', price: '$28.99', image: require('../../asserts/media/scatered-img (4).jpg')},
]

const FeaturedProduct = () => {
  return (
      <main className="feat-prod-items">
        {featProd.map((product)=>(
            <div key={product.id}>
                <Product product = {product}/>
            </div>
        ))}
      </main>
  )
}

export default FeaturedProduct