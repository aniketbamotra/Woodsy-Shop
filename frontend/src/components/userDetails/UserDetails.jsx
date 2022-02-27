import React from 'react'
import './userDetails.css'

const userDetails = () => {
  // add btn for editing and toggleform
  const userShippingDetails = JSON.parse(localStorage.getItem("shippingDetails"));
  console.log(userShippingDetails);
  return (
    <div className='user-details-container'>
      <div className="contact-wrap">
      <h4 className="form-title">Contact Details</h4>
      <p className="user-phone">{userShippingDetails.phone}</p>
      <p className="user-email">{userShippingDetails.email}</p>
      </div>
      <div className="add-wrap">
      <h4 className="form-title">Shipping Details</h4>
      <p className="user-name">{userShippingDetails.firstname} {userShippingDetails.lastname}</p>
      <p className="address1">{userShippingDetails.add1}</p>
      <p className="address2">{userShippingDetails.add2}</p>
      <p className="city-state-zip">{userShippingDetails.city}, {userShippingDetails.state}, {userShippingDetails.zip}</p>
      </div>
      <div className="ship-type-wrap">
      <h4 className="form-title">Shipping Type</h4>
      <p className="user-ship">{userShippingDetails.shipping==0?"Normal Shipping (4-5 days)":userShippingDetails.shipping==10?"Fast Shipping (2-3 days)":"Super Fast Shipping (1 day)"}</p>
      </div>
    </div>
  )
}

export default userDetails