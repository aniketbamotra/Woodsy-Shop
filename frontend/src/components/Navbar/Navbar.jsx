import React, { lazy, useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartContext from "../../context/cart-context";
import CartSlider from "../CartSlider/CartSlider";
import "./Navbar.css";
import openMenuLogo from "../../asserts/logo/textured.svg";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(true);
  const [isCartActive, setIsCartActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const Nav = document.querySelector("#nav-wrap");
    const cart = document.querySelector(".cart-icon-container");
    location.pathname === "/"
      ? Nav.classList.add("nav-container-trans")
      : Nav.classList.add("nav-container");
    // for (var i = 0; i < menuLine.length; i++) {
    //   location.pathname === "/"
    //     ? menuLine[i].classList.add("line-trans")
    //     : menuLine[i].classList.remove("line-trans");
    // }
    const slideMenu = document.querySelector(".menu-icon");
    if (location.pathname != "/") {
      slideMenu.classList.add("menu-icon-b");
      slideMenu.classList.remove("menu-icon-w");
    } else {
      slideMenu.classList.add("menu-icon-w");
      slideMenu.classList.remove("menu-icon-b");
    }
    location.pathname === "/"
      ? Nav.classList.remove("nav-container")
      : Nav.classList.remove("nav-container-trans");
    location.pathname === "/"
      ? cart.classList.add("cart-icon-container-trans")
      : cart.classList.remove("cart-icon-container-trans");
  });

  const cartCtx = useContext(CartContext);
  const numberOfCartProducts = cartCtx.products.reduce((acc, product) => {
    return acc + product.amount;
  }, 0);

  const toggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
    let menuWrap = document.querySelector(".slide-menu-wrap");
    let menuIcon = document.querySelector(".menu-icon__cheeckbox");
    let menuSwitch = document.querySelector(".slide-in-menu");
    if (
      menuSwitch.classList.contains("slide-in-menu-close") &&
      menuWrap.classList.contains("slide-menu-wrap-open")
    ) {
      menuIcon.checked = false;
      menuWrap.classList.remove("slide-menu-wrap-open");
    } else {
      menuIcon.checked = true;
      menuWrap.classList.add("slide-menu-wrap-open");
    }
  };

  const toggleCart = () => {
    setIsCartActive((prevState) => !prevState);
  };
  const redirectToHome = () => {
    toggleMenu();
    navigate("/");
  };
  const redirectToStore = () => {
    toggleMenu();
    navigate("/products");
  };
  const redirectToOurProducts = () => {
    toggleMenu();
    navigate("/our-products");
  };
  const redirectToAbout = () => {
    toggleMenu();
    navigate("/about");
  };

  return (
    <div>
      <div className="nav-container" id="nav-wrap">
        <div
          className={`menu-container menu ${isMenuActive && "opened"}`}
          onClick={toggleMenu}
          aria-label="Main Menu"
        >
          <div className="demo">
            <div className="menu-icon menu-icon-w">
              <input className="menu-icon__cheeckbox" type="checkbox" />
              <div>
                <span id="line1"></span>
                <span id="line2"></span>
              </div>
            </div>
          </div>
        </div>

        <Link to="/" className="logo-container"></Link>

        <div className="cart-icon-container" onClick={toggleCart}>
          <svg
            fill="none"
            viewBox="0 0 34 39"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25.4159 7.71838H24.2749C24.2749 5.70359 23.5446 3.77131 22.2445 2.34663C20.9444 0.921957 19.1812 0.121582 17.3426 0.121582C15.504 0.121582 13.7408 0.921957 12.4407 2.34663C11.1406 3.77131 10.4103 5.70359 10.4103 7.71838H8.97029C7.87031 7.71365 6.80201 8.12173 5.94306 8.87475C5.08412 9.62777 4.48631 10.6803 4.24906 11.8574L0.11799 32.0437C-0.0208926 32.7255 -0.0352592 33.4307 0.0757183 34.1187C0.186696 34.8067 0.420823 35.4638 0.764606 36.0521C1.10839 36.6405 1.55503 37.1484 2.07878 37.5467C2.60254 37.9451 3.19305 38.2258 3.81628 38.3729C4.1622 38.4593 4.5159 38.5027 4.87069 38.5022H29.547C30.8304 38.5022 32.0613 37.9435 32.9688 36.949C33.8764 35.9545 34.3862 34.6056 34.3862 33.1991C34.3866 32.8104 34.347 32.4227 34.2682 32.0437L30.1371 11.8574C29.8999 10.6803 29.3021 9.62777 28.4431 8.87475C27.5842 8.12173 26.5159 7.71365 25.4159 7.71838ZM17.3111 1.87204C18.733 1.86516 20.0993 2.47698 21.1099 3.57314C22.1206 4.6693 22.6929 6.16018 22.7012 7.71838H11.9525C11.9608 6.16616 12.5288 4.6805 13.5326 3.58532C14.5364 2.49014 15.8946 1.87429 17.3111 1.87204ZM32.0964 35.4325C31.7911 35.8523 31.4033 36.1913 30.9619 36.4242C30.5205 36.6571 30.0369 36.778 29.547 36.7777H4.83922C3.97315 36.7777 3.14255 36.4006 2.53015 35.7295C1.91775 35.0584 1.5737 34.1482 1.5737 33.1991C1.57611 32.9382 1.60247 32.6782 1.65239 32.4231L5.78346 12.2368C5.94213 11.4415 6.34525 10.73 6.92537 10.2214C7.50548 9.71282 8.22739 9.43802 8.97029 9.44297H10.3709V13.5906C10.3709 13.8193 10.4538 14.0386 10.6014 14.2003C10.749 14.362 10.9491 14.4529 11.1578 14.4529C11.3665 14.4529 11.5666 14.362 11.7142 14.2003C11.8618 14.0386 11.9447 13.8193 11.9447 13.5906V9.44297H22.7012V13.5906C22.7012 13.8193 22.7841 14.0386 22.9317 14.2003C23.0792 14.362 23.2794 14.4529 23.4881 14.4529C23.6968 14.4529 23.8969 14.362 24.0445 14.2003C24.192 14.0386 24.2749 13.8193 24.2749 13.5906V9.44297H25.4474C26.1835 9.44785 26.8962 9.72715 27.4683 10.2349C28.0403 10.7427 28.4376 11.4487 28.5949 12.2368L32.7259 32.4231C32.8332 32.9443 32.8324 33.4854 32.7234 34.0062C32.6145 34.5271 32.4002 35.0145 32.0964 35.4325Z" />
          </svg>
          <div className="cart-badge">
            <p className="cart-badge-no">{numberOfCartProducts}</p>
          </div>
        </div>
      </div>
      <div className="slide-menu-wrap" onClick={toggleMenu}>
        <div
          className={`slide-in-menu ${!isMenuActive && "slide-in-menu-close"}`}
          id="slide-menu-inner-wrap"
        >
          <div className="menu-link" onClick={redirectToHome}>
            Home
          </div>
          <div className="menu-link" onClick={redirectToStore}>
            Shop
          </div>
          <div className="menu-link" onClick={redirectToAbout}>
            About
          </div>
          <div className="menu-link" onClick={redirectToOurProducts}>
            Our Products
          </div>
          <div className="menu-logo-wrap">
            <img src={openMenuLogo} className="menu-logo-container"></img>
            <h4 className="menu-logo-title">The Woodsy Shop</h4>
            {/* <a
              href="https://www.facebook.com/"
              target="_blank"
              id="menu-social-logo1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#793a17"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              id="menu-social-logo2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#793a17"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </a>
            <a
              href="https://www.pinterest.ca/"
              target="_blank"
              id="menu-social-logo3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-pinterest"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#793a17"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="8" y1="20" x2="12" y2="11" />
                <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
      <CartSlider isCartActive={isCartActive} toggleCart={toggleCart} />
    </div>
  );
};

export default Navbar;
