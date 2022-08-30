import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import "../../styles/products.css";


function OurProducts({ products }) {

  return (
    <section>
      <div className="container product__container">
        {products.map((product, key) => (
          <article key={key} className="product__item">
            <div className="image__button">
              <div className="product__item-image">
                <img
                  src={product.image}
                  alt={product.productName}
                />
              </div>

              <div className="addToCart">
                <Link to={`/shop/${product._id}`}>
                <button className="btn btn-secondary">View</button>
                </Link>
              </div>
            </div>

            <Link to={`/product/${product._id}`}>
              <small className="p__name">{product.productName}</small>
            </Link>

            <div>
              {/* <small className="p__description">{product.description}</small> */}
              <h6 className="p__price">$ {product.price}.00</h6>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OurProducts;

// {
//   key, productName, imageUrl, price;
// }

// <div className="container product__container">
//   <article key={key} className="product__item">
//     <div className="image__button">
//       <div className="product__item-image">
//         <img src={`/uploads/${imageUrl}`} alt={productName} />
//       </div>

//       <div className="addToCart">
//         <button className="btn btn-secondary">Add To Cart</button>
//       </div>
//     </div>

//     <Link to={`/product/${1}`}>
//       <small className="p__name">{productName}</small>
//     </Link>

//     <div>
//       <h6 className="p__price">{price} Birr</h6>
//     </div>
//   </article>
// </div>;
