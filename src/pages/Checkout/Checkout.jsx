import React from 'react'
import { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import OrderDetails from '../../components/OrderDetails/OrderDetails'
import './Checkout.css'


export default class Checkout extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            customer: {
                email: props.email,
                phone: props.phone,
                firstname: props.firstName,
                lastname: props.lastName,
                add1: props.add1,
                add2: props.add2,
                city: props.city,
                state: props.state,
                zip: props.state,
                shipping: props.shipping

            }
        }
    }

    handleEmail = (event) => {
        var customer = this.state.customer;
        customer.email = event.target.value;
        this.setState({ customer: customer});
    }
    handlePhone = (event) => {
        var customer = this.state.customer;
        customer.phone = event.target.value;
        this.setState({ customer: customer});
    }
    handleFirstName = (event) => {
        var customer = this.state.customer;
        customer.firstname = event.target.value;
        this.setState({ customer: customer});
    }
    handleLastName = (event) => {
        var customer = this.state.customer;
        customer.lastname = event.target.value;
        this.setState({ customer: customer});
    }
    handleAddress1 = (event) => {
        var customer = this.state.customer;
        customer.add1 = event.target.value;
        this.setState({ customer: customer});
    }
    handleAddress2 = (event) => {
        var customer = this.state.customer;
        customer.add2 = event.target.value;
        this.setState({ customer: customer});
    }
    handleCity = (event) => {
        var customer = this.state.customer;
        customer.city = event.target.value;
        this.setState({ customer: customer});
    }
    handleState = (event) => {
        var customer = this.state.customer;
        customer.state = event.target.value;
        this.setState({ customer: customer});
    }
    handleZip = (event) => {
        var customer = this.state.customer;
        customer.zip = event.target.value;
        this.setState({ customer: customer});
    }
    handleShipping = (event) => {
        var customer = this.state.customer;
        customer.shipping = event.target.value;
        this.setState({ customer: customer});

        var shipPrice = event.target.value;
        console.log(shipPrice);
        return shipPrice;
    }
    handleBtn = () => {
        console.log(this.state.customer);
    }  

    render(){
    return (
        <div>
            {console.log(this.state.customer.shipping)}
            <div className="checkout-wrap">
                <div className="forms">
                    <div className="contact">
                        <h4 className="form-title">Contact Information</h4>
                        <input type="email" placeholder='Email Address' required value={this.state.customer.email} onChange={this.handleEmail.bind(this)}/>
                        <input type="tel" placeholder='Phone Number' required pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' value={this.state.customer.phone} onChange={this.handlePhone.bind(this)}/>
                    </div>
                    <div className="shipping">
                        <h4 className="form-title">Shipping Address</h4>
                        <input type="text" placeholder='First Name' required value={this.state.customer.firstName} onChange={this.handleFirstName.bind(this)}/>
                        <input type="text" placeholder='Last Name' required value={this.state.customer.lastName} onChange={this.handleLastName.bind(this)}/>
                        <input type="text" placeholder='Address Line 1' required value={this.state.customer.add1} onChange={this.handleAddress1.bind(this)}/>
                        <input type="text" placeholder='Address Line 2' value={this.state.customer.add2} onChange={this.handleAddress2.bind(this)}/>
                        <div id="csz">
                            <input type="text" placeholder='City' required value={this.state.customer.city} onChange={this.handleCity.bind(this)}/>
                            <input type="text" placeholder='State' required value={this.state.customer.state} onChange={this.handleState.bind(this)}/>
                            <input type="number" placeholder='Zip' pattern='[0-9]{5}' required value={this.state.customer.zip} onChange={this.handleZip.bind(this)}/>
                        </div>
                    </div>
                    <div className="shipping-method" value={this.state.customer.shipping} onChange={this.handleShipping.bind(this)}>
                        <h4 className="form-title">Shipping Method</h4>
                        <div className="radio-wrap">
                            <input type="radio" name='ship' value="0" id='fd' />
                            <label htmlFor="fd">4 to 5 days delivery(Free delivery)</label>
                        </div>
                        <div className="radio-wrap">
                            <input type="radio" name='ship' value="10" id='tdd'/>
                            <label htmlFor="tdd">2 to 3 days delivery(+$10)</label>
                        </div>
                        <div className="radio-wrap">
                            <input type="radio" name='ship' value="20" id='odd'/>
                            <label htmlFor="odd">1 day delivery(+$20)</label>
                        </div>
                    </div>
                    <div className="cart-btn-container">
                        <button className='shoping'>Continue Shoping</button>
                        <button className='ctc' onClick={this.handleBtn.bind(this), localStorage.setItem('shippingDetails', JSON.stringify(this.state.customer))}>Checkout</button>
                    </div>
                </div>
                <OrderDetails shipPrice={this.state.customer.shipping} />
            </div>
            <Footer />
        </div>
    )
    }
}