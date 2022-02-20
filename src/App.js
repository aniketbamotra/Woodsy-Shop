import React from 'react'
import { Routes, Route } from "react-router-dom"
import CartSlider from './components/CartSlider/CartSlider'
import Navbar from './components/Navbar/Navbar'
import ProductGrid from './components/ProductGrid/ProductGrid'
import Checkout from './pages/Checkout/Checkout'
import Home from './pages/Home/Home'
import SingleProd from './pages/SingleProd/SingleProd'
import Store from './pages/Store/Store'

const App = () => {
  return (
    <div>
      <div id="bg-img"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Store />} />
        <Route path="/product/:id" element={<SingleProd />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
