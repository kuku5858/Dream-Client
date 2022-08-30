import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";

import "../../styles/cart.css";

function CartItemsDisplay({ item, quantityChangeHandler, removeFromCartHandler }) {
  return (
    <>
      <div className="cartitem__content">
        <img src={item.imageUrl} alt={item.productName} />

        <Link to={`/shop/${item.product}`} className="cartitem__name">
          <p>{item.productName}</p>
        </Link>

        <p className="cartitem__price">${item.price}.00</p>

        <div className="qty__control">
          <select
            value={item.qty}
            onChange={(e) => quantityChangeHandler(item.product, e.target.value)}
            className="qty__select"
          >
            {[...Array(item.quantity).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </div>
        
        <RiDeleteBin5Fill onClick={() => removeFromCartHandler(item.product)} className="delete__icon"/>

      </div>
    </>
  );
}

export default CartItemsDisplay;
