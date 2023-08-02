import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProduct";
import "./SingleProd.css";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethod";
import axios from "axios";
import CartContext from "../../context/cart-context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import prodData from "../../products.json";
import Product from "../../components/Product/Product";

const SingleProd = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const cartCtx = useContext(CartContext);
  const [noti, setNoti] = useState(false);


  
    let ProductArray = [
        {"id": "1", "name":"Product 1", "desc": "This is a really nice product.", "price": "23", "img1": "src/asserts/media/scatered-img (1).jpg", "img2": "", "img3": "", "img4": ""},
        {"id": "2", "name":"Product 2", "desc": "This is a really nice product.", "price": "45", "img1": "", "img2": "", "img3": "", "img4": ""},
        {"id": "3", "name":"Product 3", "desc": "This is a really nice product.", "price": "56", "img1": "", "img2": "", "img3": "", "img4": ""},
        {"id": "4", "name":"Product 4", "desc": "This is a really nice product.", "price": "99", "img1": "", "img2": "", "img3": "", "img4": ""},
        {"id": "5", "name":"Product 5", "desc": "This is a really nice product.", "price": "21", "img1": "", "img2": "", "img3": "", "img4": ""},
        {"id": "6", "name":"Product 6", "desc": "This is a really nice product.", "price": "43", "img1": "", "img2": "", "img3": "", "img4": ""} 
    ]




  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       // const res = await publicRequest.get(
  //       //   "https://managedatabase.woodsyshoppe.com/api/products/" + id
  //       // );

  //       setProduct(prodData.products);
  //       console.log(prodData.products);
  //     } catch (error) {}
  //   };
  //   getProduct();
  // }, []);


  const addToCartHandler = () => {
    cartCtx.addProduct({ ...product, amount: 1 });
    setNoti(true);
  };
  const closeNoti = () => {
    setNoti(false);
  };

  return (
    <div>
      <div
        className={`noti-popup ${!noti && "noti-closed"}`}
        onClick={closeNoti}
      >
        <h4 className="noti-text">Added to cart!</h4>
      </div>
      <p className="bread-crum-container">Home/Shop/Product {id}</p>
      <div className="prod-wraper">
        <div className="imgs-container">
          {/* {product.image && <img src={product.image} />}
          {product.image && <img src={product.image2} />}
          {product.image && <img src={product.image3} />}
          {product.image && <img src={product.image4} />} */}
          <img
            src={require("../../asserts/media/scatered-img (2).jpg")}
            alt=""
          />
          <img
            src={require("../../asserts/media/scatered-img (3).jpg")}
            alt=""
          />
          <img
            src={require("../../asserts/media/scatered-img (4).jpg")}
            alt=""
          />
        </div>

        <div className="prod-text-area">
          <h4 className="single-prod-name">{ProductArray[id].name}</h4>
          <h4 className="single-prod-price">${ProductArray[id].price}</h4>
          <p className="prod-id"></p>
          <p className="prod-descp">{ProductArray[id].desc}</p>
          <button className="atc-btn" onClick={addToCartHandler}>
            Add to bag
          </button>
        </div>
      </div>
      <div className="prod-details">
        <div className="detail-text">
          <h4 className="detail-title">Description</h4>
          <p className="intro-para">
            An Exquisitely Hand Carved Royal Indian Elephant also known as
            Ambabari Elephant,this artistic wooden sculpture is completely hand
            crafted by skilled artisans from the rural areas of India,this
            Wooden Masterpiece is a great item for gifting purpose,a unique
            Artifact for Art Lovers,& can be a great marvel of attraction for
            your living rooms. wooden elephant sculptures, wooden elephant.
          </p>
        </div>
        <div className="prod-descp-img">
          <img
            src={require("../../asserts/media/scatered-img (4).jpg")}
            alt=""
          />
        </div>
      </div>
      <h4 className="sect-title">Related Products</h4>
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default SingleProd;
