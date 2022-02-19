import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Store.css'
import Filter from '../../components/Filter/Filter'
import ProductGrid from '../../components/ProductGrid/ProductGrid'

const Store = () => {
  return (
      <div>
        <Navbar />
        <h1 className="page-title">Store</h1>
        <div className="search-wrap">
            <p className="total-prod-no">225 Products</p>
            <input type="text" placeholder='Search'className='search-container'/>
        </div>
        <div className="store-body">
        <Filter />
        <ProductGrid />
        </div>
        <Footer />
      </div>
  )
}

export default Store