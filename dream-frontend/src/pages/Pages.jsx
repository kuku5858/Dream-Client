import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Pages
import Home from "./Home";
import PublicHome from "./PublicHome";
import Interior from "./Interior";
import About from "./About";
import Shop from "./Shop";
import Cart from "./Cart";
import AddProduct from "./AddProduct";
import ProductDetail from "./ProductDetail";
import Login from "./Login";
import Register from "./Register";
import Payment from "./Payment";
import Success from './Success';
import { useSelector } from 'react-redux';



function Pages() {
  const user = useSelector(state => state.user.loggedUser);
  console.log(`pages user ${user ? true : false}`)
    // const location = useLocation();
    // location={location} key={location.pathname}

  return (
    <AnimatePresence>
        <Routes>
            <Route path="/h" element={<PublicHome />} />
            <Route path="/" element={<Home />} />
            <Route path="/interior" element={<Interior />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/"/> : <Register />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<Success />} />
        </Routes>
    </AnimatePresence>
  )
}

export default Pages