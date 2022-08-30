import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import logo from "../header-asset/logo.png";

import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import CartItemsDisplay from "../components/shop/CartItemsDisplay";
import Contact from "../components/Contact";
import { pubReq } from "../axiosRequest";

import {
  addToCartAction,
  removeFromCartAction,
  resetCartAction,
} from "../redux/action/cartAction";

import "../styles/cart.css";

const s_key =
  "pk_test_51LHvomAmxL4IWWJszSmgVpOujfXu4AcpvwaqTtfSGNzq5X03imIacEqy3qFLGEdwJTqY8I4iH8xHrQ8CTcO4LDQY00EKbdLTjM";

function Cart() {
  //add to cart
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.loggedUser);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const quantityChangeHandler = (id, qty) => {
    dispatch(addToCartAction(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCartAction(id));
  };

  const resetCartHandler = () => {
    dispatch(resetCartAction());
  };

  const itemSummary = () => {
    return cartItems.reduce((count, item) => Number(item.qty) + count, 0);
  };

  //Stripe payment
  const [stripeToken, setStripeToken] = useState(null);
  const [total, setTotal] = useState(0);
  const [logged, setLogged] = useState(null);
  const navigate = useNavigate();

  const ontoken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const subTotal = () => {
      setTotal(
        cartItems.reduce(
          (price, item) => Number(item.price * item.qty) + price,
          0
        )
      );
    };

    setLogged(user ? true : false);


    const request = async () => {
      try {
        const res = await pubReq.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: total * 100,
        });
        console.log(res.data);
        navigate("/success", {
          state: {
            stripeData: res.data,
            products: cartItems, //was cart changed it to cartItems
          },
        });
        dispatch(resetCartAction());
      } catch (err) {
        // console.log(`Error from cart about stripe ${err}`);
        console.log(err.response.data);
      }
    };

    stripeToken && request();
    subTotal();
  }, [dispatch, stripeToken, navigate, total, cartItems, user]);

  const stripDesc = "You are paying $" + total;
  console.log(`logged from cart: ${logged}`);

  return (
    <>
      <section className="container cartitem__container">
        <div className="cart__items">
          <div className="div__title">
            <h3>Item Summary ({itemSummary()})</h3>
            <div className="div__smalls">
              <small>Item</small>
              <small>Price</small>
              <small>Qty</small>
              {cartItems.length > 0 && (
                <span onClick={resetCartHandler}>Reset</span>
              )}
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty__cart">
              <BsHandbag className="bag__icon" />
              <h3>CART IS EMPTY</h3>
              <Link to={"/shop"}>
                <button className="btn btn-primary shop__now">SHOP NOW</button>
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItemsDisplay
                key={item.product}
                item={item}
                quantityChangeHandler={quantityChangeHandler}
                removeFromCartHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="order__submit">
          <h3>Order Summary</h3>
          <div className="order__info">
            <small>Subtotal</small>
            <p>${total}.00</p>
          </div>

          {stripeToken ? (
            <span>
              <AiOutlineLoading3Quarters /> Processing. Please wait...
            </span>
          ) : (
            <>
              {logged === true && cartItems.length > 0 ? (
                <StripeCheckout
                  name="Dream Interior Design"
                  image={logo}
                  billingAddress
                  shippingAddress
                  description={stripDesc}
                  amount={total * 100}
                  token={ontoken}
                  stripeKey={s_key}
                >
                  <button className="btn checkout" disabled={cartItems.length === 0 ? true : false}>Checkout Now</button>
                </StripeCheckout>
              ) : (
                <Link to={"/login"}>
                  <button className="btn checkout" disabled={cartItems.length === 0 ? true : false}>Login to Checkout</button>
                </Link>
              )}
            </>
          )}
        </div>
      </section>
      <Contact />
    </>
  );
}

export default Cart;
