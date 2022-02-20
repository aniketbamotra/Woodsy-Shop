import React from 'react'
import './OrderDetails.css'

const OrderDetails = () => {
  return (
    <div className='order-wrap'>
        <div className="order-items">
          <div className="order-item">
              <img src={require('../../asserts/media/scatered-img (2).jpg')} alt="" />
              <h4 className="order-item-name">Gold Chair1</h4>
              <p className="order-item-price">$20.99</p>
              <div className="qnty">
                  <p className="qnty-text">Quantity</p>
                  <p className="qnty-no">1</p>
              </div>
          </div>
          <div className="order-item">
              <img src={require('../../asserts/media/scatered-img (2).jpg')} alt="" />
              <h4 className="order-item-name">Gold Chair1</h4>
              <p className="order-item-price">$20.99</p>
              <div className="qnty">
                  <p className="qnty-text">Quantity</p>
                  <p className="qnty-no">1</p>
              </div>
          </div>
          <div className="order-item">
              <img src={require('../../asserts/media/scatered-img (2).jpg')} alt="" />
              <h4 className="order-item-name">Gold Chair1</h4>
              <p className="order-item-price">$20.99</p>
              <div className="qnty">
                  <p className="qnty-text">Quantity</p>
                  <p className="qnty-no">1</p>
              </div>
          </div>
          <div className="order-sub-total">
            <p className="order-price-text">Sub-Total</p>
            <p className="order-price-text order-amt">$256.99</p>
          </div>
          <div className="order-ship-total">
            <p className="order-price-text">Shipping</p>
            <p className="order-price-text order-amt">$256.99</p>
          </div>
          <div className="order-total">
            <p className="order-price-text">Total</p>
            <p className="order-total-price order-amt">$256.99</p>
          </div>
        </div>
    </div>
  )
}

export default OrderDetails