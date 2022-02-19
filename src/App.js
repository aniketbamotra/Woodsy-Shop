import React from 'react'
import CartSlider from './components/CartSlider/CartSlider'
import Navbar from './components/Navbar/Navbar'
import Checkout from './pages/Checkout/Checkout'
import Home from './pages/Home/Home'
import SingleProd from './pages/SingleProd/SingleProd'
import Store from './pages/Store/Store'

const App = () => {
  return (
    <div>
      <div id="bg-img"></div>
      <Checkout />
    </div>
  )
}

export default App
