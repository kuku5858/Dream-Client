import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import "../styles/productDetail.css";

// Actions
import { getOneProductAction } from "../redux/action/productAction";
import { addToCartAction } from "../redux/action/cartAction";

function ProductDetail() {
  const [quant, setQuant] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useNavigate ();


  const itemDetails = useSelector((state) => state.getOneProduct);
  const { loading, error, product } = itemDetails;

  useEffect(() => {
    if (product && params.id !== product._id) {
      dispatch(getOneProductAction(params.id));
    }
  }, [dispatch, product, params.id]);

  const addToCartHandler = () => {
    dispatch(addToCartAction(product._id, quant));

    history('/cart');
  }

  return (
    <section className="details">
      <div className="container productdetail__container">
        {loading ? (
          <h2>Loading....</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <div className="productdetail__image">
              <img
                src={product.image}
                alt={product.productName}
              />
            </div>
            <div className="productdetail__info">
              <div className="name__description">
                <h4>{product.productName}</h4>
                <h5>$ {product.price}.00</h5>
                <p>Description: {product.description}</p>
              </div>
              <div className="price__qty">
                <div>
                  <p>Price</p>
                  <p>$ {product.price * quant}.00</p>
                </div>
                <div>
                  <p>Status</p>
                  <p>{product.quantity > 0 ? "Available" : "Not Available"}</p>
                </div>
                <div>
                  Quantity
                  <select
                    value={quant}
                    onChange={(e) => setQuant(e.target.value)}
                    className="qty__select"
                  >
                    {[...Array(product.quantity).keys()].map((item) => (
                      <option key={item + 1} value={item + 1}>
                        {item + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="btn btn-primary" onClick={addToCartHandler}>Add To Cart</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ProductDetail;
