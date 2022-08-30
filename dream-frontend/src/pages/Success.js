import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";
import { userReq } from "../axiosRequest";
import success from "../header-asset/success.gif";

function Success() {
  // const userLoc = JSON.parse(localStorage.getItem("persist:root"))?.userLoc;
  // const currUser = userLoc && JSON.parse(userLoc).currUser;
  // const TOKEN = currUser?.accessToken;
  // console.log(`Token: ${TOKEN}`);

  const { state } = useLocation();
  const data = state.stripeData;
  const userCart = state.products;
  const loggedUser = useSelector((state) => state.user.loggedUser);
  console.log(`success logged user: ${loggedUser._id}`)
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userReq.post("/orders/addorder", {
          userId: loggedUser._id,
          products: userCart.map((item) => ({
            productId: item.product,
            itemQuantity: item.qty,
          })),
          amount: userCart.reduce(
            (price, item) => Number(item.price * item.qty) + price,
            0
          ),
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
        console.log(`OrderId: ${res.data}`);
      } catch {}
    };
    data && createOrder();
  }, [userCart, data, loggedUser]);

  return (
    <Section>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : "Successfull. Your order id being prepared..."}
      <Fragment>
        <img
          src={success}
          style={{ display: "block", margin: "auto" }}
          alt="Success"
        />
      </Fragment>
      <Link to="/shop">
        <button className="btn btn-primary">Back to Shop</button>
      </Link>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    display: block;
    margin: 2rem auto;
    font-weight: bold;
    font-size: 1rem;
  }
`;

export default Success;
