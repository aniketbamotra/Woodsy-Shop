import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <div className='filter-wrap'>
      <div className="flt-sticky-container">
        <ul className="filter">
              <h4 className="filter-title">Categories</h4>
              <li className="filter-ele">Decor</li>
              <li className="filter-ele">Furnicher</li>
              <li className="filter-ele">Storage</li>
              <li className="filter-ele">Wearable</li>
          </ul>
          <ul className="filter">
              <h4 className="filter-title">Sort By</h4>
              <li className="filter-ele">Best Selling</li>
              <li className="filter-ele">Price: Low - High</li>
              <li className="filter-ele">Price: High - Low</li>
              <li className="filter-ele">Oldest to Newest</li>
              <li className="filter-ele">Newest to Oldest</li>
          </ul>
      </div>
    </div>
  )
}

export default Filter