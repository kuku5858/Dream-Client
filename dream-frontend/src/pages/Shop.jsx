import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OurProducts from "../components/shop/OurProducts";

// Actions
import { getProductsAction } from "../redux/action/productAction";

function Shop() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get("/addproducts")
  //   .then(res => setPosts(res.data))
  //   .catch(err => console.log(err));
  // });

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProducts;
  console.log(`shop prdo ${products}`)

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  console.log(`from shop products: ${loading}`)
  return (
    <section>
      <h5>Shop with us</h5>
      <h2>Our Products</h2>


      <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <OurProducts products={products} />
      )}
    </div>

    </section>
    
  );
}

export default Shop;

{
  /* <section>
      <h5>Shop with us</h5>
      <h2>Our Products</h2>
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products?.map((item) => (
            <Product
              key={item._id}
              productId={item._id}
              imageUrl={item.image}
              productName={item.productName}
              price={item.price}
            />
          ))
        )}
      </div>
    </section> */
}
