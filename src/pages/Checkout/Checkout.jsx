import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Checkout.css'

const Checkout = () => {
  return (
    <div>
        <Navbar />
        <div className="forms">
            <div className="contact">
                <h4 className="form-title">Contact Information</h4>
                <input type="email" placeholder='Email Address' required/>
                <input type="tel" placeholder='Phone Number' required pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'/>
            </div>
            <div className="shipping">
                <h4 className="form-title">Shipping Address</h4>
                <input type="text" placeholder='First Name' required/>
                <input type="text" placeholder='Last Name' required/>
                <input type="text" placeholder='Address Line 1' required/>
                <input type="text" placeholder='Address Line 2' />
                <input type="text" placeholder='City' required/>
                <input type="text" placeholder='State' required/>
                <input type="number" placeholder='Zip' pattern='[0-9]{5}' required/>
            </div>
            <form className="shipping-method">
                <h4 className="form-title">Shipping Method</h4>
                <div className="radio-wrap">
                    <input type="radio" name='ship' id='fd'/>
                    <label htmlFor="fd">4 to 5 days delivery(Free delivery)</label>
                </div>
                <div className="radio-wrap">
                    <input type="radio" name='ship' id='tdd'/>
                    <label htmlFor="tdd">2 to 3 days delivery(+$10)</label>
                </div>
                <div className="radio-wrap">
                    <input type="radio" name='ship' id='odd'/>
                    <label htmlFor="odd">1 day delivery(+$20)</label>
                </div>
            </form>
            <div className="cart-btn-container">
                <button className='shoping'>Continue Shoping</button>
                <button className='ctc'>Checkout</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout