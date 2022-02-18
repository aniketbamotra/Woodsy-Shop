import React from 'react'
import { useState } from 'react';
import FeaturedProduct from '../../components/FeaturedProducts/FeaturedProduct';
// import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <main>
      <div className="nav-wrap">
        <div className="nav-container">
        <div className="menu-container" onClick={ToggleClass}>
          <svg width="66" height="18" viewBox="0 0 66 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.5" y1="1.52362" x2="63.57" y2="1.52362" stroke="#F5F5F5" stroke-width="3" stroke-linecap="round"/>
            <line x1="1.5" y1="15.5236" x2="63.57" y2="15.5236" stroke="#F5F5F5" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>
        <div href='../Home/Home.jsx' className="logo-container"></div>
        <div className="cart-icon-container">
          <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.4159 7.71838H24.2749C24.2749 5.70359 23.5446 3.77131 22.2445 2.34663C20.9444 0.921957 19.1812 0.121582 17.3426 0.121582C15.504 0.121582 13.7408 0.921957 12.4407 2.34663C11.1406 3.77131 10.4103 5.70359 10.4103 7.71838H8.97029C7.87031 7.71365 6.80201 8.12173 5.94306 8.87475C5.08412 9.62777 4.48631 10.6803 4.24906 11.8574L0.11799 32.0437C-0.0208926 32.7255 -0.0352592 33.4307 0.0757183 34.1187C0.186696 34.8067 0.420823 35.4638 0.764606 36.0521C1.10839 36.6405 1.55503 37.1484 2.07878 37.5467C2.60254 37.9451 3.19305 38.2258 3.81628 38.3729C4.1622 38.4593 4.5159 38.5027 4.87069 38.5022H29.547C30.8304 38.5022 32.0613 37.9435 32.9688 36.949C33.8764 35.9545 34.3862 34.6056 34.3862 33.1991C34.3866 32.8104 34.347 32.4227 34.2682 32.0437L30.1371 11.8574C29.8999 10.6803 29.3021 9.62777 28.4431 8.87475C27.5842 8.12173 26.5159 7.71365 25.4159 7.71838ZM17.3111 1.87204C18.733 1.86516 20.0993 2.47698 21.1099 3.57314C22.1206 4.6693 22.6929 6.16018 22.7012 7.71838H11.9525C11.9608 6.16616 12.5288 4.6805 13.5326 3.58532C14.5364 2.49014 15.8946 1.87429 17.3111 1.87204ZM32.0964 35.4325C31.7911 35.8523 31.4033 36.1913 30.9619 36.4242C30.5205 36.6571 30.0369 36.778 29.547 36.7777H4.83922C3.97315 36.7777 3.14255 36.4006 2.53015 35.7295C1.91775 35.0584 1.5737 34.1482 1.5737 33.1991C1.57611 32.9382 1.60247 32.6782 1.65239 32.4231L5.78346 12.2368C5.94213 11.4415 6.34525 10.73 6.92537 10.2214C7.50548 9.71282 8.22739 9.43802 8.97029 9.44297H10.3709V13.5906C10.3709 13.8193 10.4538 14.0386 10.6014 14.2003C10.749 14.362 10.9491 14.4529 11.1578 14.4529C11.3665 14.4529 11.5666 14.362 11.7142 14.2003C11.8618 14.0386 11.9447 13.8193 11.9447 13.5906V9.44297H22.7012V13.5906C22.7012 13.8193 22.7841 14.0386 22.9317 14.2003C23.0792 14.362 23.2794 14.4529 23.4881 14.4529C23.6968 14.4529 23.8969 14.362 24.0445 14.2003C24.192 14.0386 24.2749 13.8193 24.2749 13.5906V9.44297H25.4474C26.1835 9.44785 26.8962 9.72715 27.4683 10.2349C28.0403 10.7427 28.4376 11.4487 28.5949 12.2368L32.7259 32.4231C32.8332 32.9443 32.8324 33.4854 32.7234 34.0062C32.6145 34.5271 32.4002 35.0145 32.0964 35.4325Z" fill="#F5F5F5"/>
          </svg>
          <div className="cart-badge"><p className="cart-badge-no">45</p></div>
        </div>
        </div>
          <div className={isActive ? "slide-in-menu-close slide-in-menu" : "slide-in-meu-open slide-in-menu"}>
          <h3 className="menu-link">Home</h3>
          <h3 className="menu-link">Shop</h3>
          <h3 className="menu-link">About</h3>
          <h3 className="menu-link">Our Products</h3>
        </div>
      </div>
      <div className="landing-screen">
        <h3 className="intro-text">Woodwork that's more <br />than just suvinour.</h3>
        <button className="sq-btn">Shop Now</button>
      </div>
      <div className="product-intro">
        <h3 className="intro-text">CREATING GIFTS WITH <br />A LONG AND RICH <br />HISTORY.</h3>
        <p className="intro-para">Developed the concept of exclusivity, a Woodsyshoppe features timeless handicraft, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present.</p>
        <button className="sq-btn">Shop Now</button>
        <ul className="scatered-imgs">
          <li className="scatered-img" id='sct-img1'><img src={require('../../asserts/media/scatered-img (1).jpg')} alt="" /></li>
          <li className="scatered-img" id='sct-img2'><img src={require('../../asserts/media/scatered-img (2).jpg')} alt="" /></li>
          <li className="scatered-img" id='sct-img3'><img src={require('../../asserts/media/scatered-img (3).jpg')} alt="" /></li>
          <li className="scatered-img" id='sct-img4'><img src={require('../../asserts/media/scatered-img (4).jpg')} alt="" /></li>
        </ul>
      </div>
      <div className="featured-products">
        <h4 className="sect-title">Buy our featured products</h4>
        <div className="feat-prod-wrap">
          <FeaturedProduct />
        </div>
        <p className="show-link">Shop All</p>
      </div>
      <div className="spotlight">
        <div className="spotlight-text">
          <h4 className="sect-title">Indian Wooden Elephant</h4>
          <p className="intro-para">An Exquisitely Hand Carved Royal Indian Elephant also known as Ambabari Elephant,this artistic wooden sculpture is completely hand crafted by skilled artisans from the rural areas of India,this Wooden Masterpiece is a great item for gifting purpose,a unique Artifact for Art Lovers,& can be a great marvel of attraction for your living rooms. wooden elephant sculptures, wooden elephant.</p>
          <p className="spotlight-link">View Product</p>
        </div>
        <img src={require('../../asserts/media/spotlight.png')} alt="" />
      </div>
    </main>
  )
}

export default Home;