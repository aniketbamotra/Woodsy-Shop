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
    const slideMenu = document.querySelector("#slide-menu-inner-wrap");
    location.pathname === "/"
      ? slideMenu.classList.add("menu-link-trans")
      : slideMenu.classList.remove("menu-link-trans");
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
    let menuIcon = document.querySelector(".menu-icon__cheeckbox");
    let menuSwitch = document.querySelector(".slide-in-menu");
    if (menuSwitch.classList.contains("slide-in-menu-close")) {
      menuIcon.checked = false;
    } else {
      menuIcon.checked = true;
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
          {/* <svg width="100" height="100" viewBox="0 0 10 10">
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
          </svg> */}

          <div className="demo">
            <div className="menu-icon">
              <input className="menu-icon__cheeckbox" type="checkbox" />
              <div>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <Link to="/" className="logo-container"></Link>

        <div className="cart-icon-container" onClick={toggleCart}>
          <svg
            width="35"
            height="39"
            viewBox="0 0 35 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25.4159 7.71838H24.2749C24.2749 5.70359 23.5446 3.77131 22.2445 2.34663C20.9444 0.921957 19.1812 0.121582 17.3426 0.121582C15.504 0.121582 13.7408 0.921957 12.4407 2.34663C11.1406 3.77131 10.4103 5.70359 10.4103 7.71838H8.97029C7.87031 7.71365 6.80201 8.12173 5.94306 8.87475C5.08412 9.62777 4.48631 10.6803 4.24906 11.8574L0.11799 32.0437C-0.0208926 32.7255 -0.0352592 33.4307 0.0757183 34.1187C0.186696 34.8067 0.420823 35.4638 0.764606 36.0521C1.10839 36.6405 1.55503 37.1484 2.07878 37.5467C2.60254 37.9451 3.19305 38.2258 3.81628 38.3729C4.1622 38.4593 4.5159 38.5027 4.87069 38.5022H29.547C30.8304 38.5022 32.0613 37.9435 32.9688 36.949C33.8764 35.9545 34.3862 34.6056 34.3862 33.1991C34.3866 32.8104 34.347 32.4227 34.2682 32.0437L30.1371 11.8574C29.8999 10.6803 29.3021 9.62777 28.4431 8.87475C27.5842 8.12173 26.5159 7.71365 25.4159 7.71838ZM17.3111 1.87204C18.733 1.86516 20.0993 2.47698 21.1099 3.57314C22.1206 4.6693 22.6929 6.16018 22.7012 7.71838H11.9525C11.9608 6.16616 12.5288 4.6805 13.5326 3.58532C14.5364 2.49014 15.8946 1.87429 17.3111 1.87204ZM32.0964 35.4325C31.7911 35.8523 31.4033 36.1913 30.9619 36.4242C30.5205 36.6571 30.0369 36.778 29.547 36.7777H4.83922C3.97315 36.7777 3.14255 36.4006 2.53015 35.7295C1.91775 35.0584 1.5737 34.1482 1.5737 33.1991C1.57611 32.9382 1.60247 32.6782 1.65239 32.4231L5.78346 12.2368C5.94213 11.4415 6.34525 10.73 6.92537 10.2214C7.50548 9.71282 8.22739 9.43802 8.97029 9.44297H10.3709V13.5906C10.3709 13.8193 10.4538 14.0386 10.6014 14.2003C10.749 14.362 10.9491 14.4529 11.1578 14.4529C11.3665 14.4529 11.5666 14.362 11.7142 14.2003C11.8618 14.0386 11.9447 13.8193 11.9447 13.5906V9.44297H22.7012V13.5906C22.7012 13.8193 22.7841 14.0386 22.9317 14.2003C23.0792 14.362 23.2794 14.4529 23.4881 14.4529C23.6968 14.4529 23.8969 14.362 24.0445 14.2003C24.192 14.0386 24.2749 13.8193 24.2749 13.5906V9.44297H25.4474C26.1835 9.44785 26.8962 9.72715 27.4683 10.2349C28.0403 10.7427 28.4376 11.4487 28.5949 12.2368L32.7259 32.4231C32.8332 32.9443 32.8324 33.4854 32.7234 34.0062C32.6145 34.5271 32.4002 35.0145 32.0964 35.4325Z" />
          </svg>
          <div className="cart-badge">
            <p className="cart-badge-no">{numberOfCartProducts}</p>
          </div>
        </div>
      </div>
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
          <a
            href="https://www.facebook.com/"
            target="_blank"
            id="menu-social-logo1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              viewBox="0 0 512 512"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            id="menu-social-logo2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a
            href="https://www.pinterest.ca/"
            target="_blank"
            id="menu-social-logo3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              viewBox="0 0 496 512"
            >
              <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
            </svg>
          </a>
        </div>
      </div>
      <CartSlider isCartActive={isCartActive} toggleCart={toggleCart} />
    </div>
  );
};

export default Navbar;
