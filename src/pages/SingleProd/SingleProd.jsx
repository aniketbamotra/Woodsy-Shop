import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProduct'
import './SingleProd.css'

const SingleProd = () => {
  return (
      <div>
        <Navbar />
        <p className="bread-crum-container">Home/Shop/Category/Product1</p>
        <div className="prod-wraper">
            <div className="imgs-container">
                <img src={require('../../asserts/media/scatered-img (1).jpg')} alt="" />
                <img src={require('../../asserts/media/scatered-img (2).jpg')} alt="" />
                <img src={require('../../asserts/media/scatered-img (3).jpg')} alt="" />
                <img src={require('../../asserts/media/scatered-img (4).jpg')} alt="" />
            </div>
            <div className="prod-text-area">
                <h4 className="single-prod-name">Gold Chair</h4>
                <h4 className="single-prod-price">$24.99</h4>
                <p className="prod-id">Fur-01</p>
                <p className="prod-descp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea nobis animi eligendi sit sapiente dolor obcaecati facilis! Nemo sit quia quis tempora voluptate quo maxime sint. Dicta, amet laboriosam.</p>
                <button className='atc-btn'>Add to bag</button>
            </div>
        </div>
        <div className="prod-details">
            <div className="detail-text">
                <h4 className="detail-title">Description</h4>
                <p className="intro-para">An Exquisitely Hand Carved Royal Indian Elephant also known as Ambabari Elephant,this artistic wooden sculpture is completely hand crafted by skilled artisans from the rural areas of India,this Wooden Masterpiece is a great item for gifting purpose,a unique Artifact for Art Lovers,& can be a great marvel of attraction for your living rooms. wooden elephant sculptures, wooden elephant.</p>
            </div>
            <div className="prod-descp-img"><img src={require('../../asserts/media/scatered-img (4).jpg')} alt="" /></div>
        </div>
        <h4 className="sect-title">Related Products</h4>
        <FeaturedProducts />
        <Footer />
      </div>
    
  )
}

export default SingleProd