import React from 'react'
import { Close } from '@material-ui/icons'
import { Add } from '@material-ui/icons'
import { Remove } from '@material-ui/icons'
import { useState } from 'react'
import './CartSlider.css'

const CartSlider = (props) => {
  return (
    <div className={`cart ${props.isCartActive && "open-cart"}`}>
        <p className="cart-sect-title">Order Summary</p>
        <div className="cart-items-wrap">
            <div className="cart-item">
                <img src={require('../../asserts/media/scatered-img (2).jpg')} alt="" />
                <h4 className="cart-item-name">Gold Chair1</h4>
                <p className="cart-item-price">$20.99</p>
                <div className="qnty-btn">
                    <Remove className='minus'/>
                    <p className="qnty-no">1</p>
                    <Add className='plus'/>
                </div>
                <Close className='dlt-item'/>
            </div>
            <div className="cart-item">
                <img src={require('../../asserts/media/scatered-img (2).jpg')} alt="" />
                <h4 className="cart-item-name">Gold Chair1</h4>
                <p className="cart-item-price">$20.99</p>
                <div className="qnty-btn">
                    <Remove className='minus'/>
                    <p className="qnty-no">1</p>
                    <Add className='plus'/>
                </div>
                <Close className='dlt-item'/>
            </div>
            <div className="cart-item">
                <img src={require('../../asserts/media/scatered-img (2).jpg')} alt="" />
                <h4 className="cart-item-name">Gold Chair1</h4>
                <p className="cart-item-price">$20.99</p>
                <div className="qnty-btn">
                    <Remove className='minus'/>
                    <p className="qnty-no">1</p>
                    <Add className='plus'/>
                </div>
                <Close className='dlt-item'/>
            </div>
            <div className="cart-subtotal">
                <p className="cart-sect-title">Sub-Total incl. tax</p>
                <p className="subtotal-price">$499.99</p>
            </div>
            <div className="cart-btn-container">
                <button className='shoping'>Continue Shoping</button>
                <button className='ctc'>Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default CartSlider