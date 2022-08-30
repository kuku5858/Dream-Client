import React, { useState } from "react";
import axios from "axios";

function Add({ adminLogout }) {
  const [input, setInput] = useState({
    productName: "",
    description: "",
    price: 0,
    quantity: 0
  });

  const [image, setImage] = useState("");

  const [message, setMessage] = useState("");

  const handleFile = (e) => {
    setImage(e.target.files[0]);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new  FormData();

    formData.append("productName", input.productName);
    formData.append("description", input.description);
    formData.append("price", input.price);
    formData.append("quantity", input.quantity);
    formData.append("image", image);


    setInput({
      productName: "",
      description: "",
      price: 0,
      quantity: 0,
    });

    setImage("");

    axios
      .post("/api/products/add", formData) //was addproducts
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  };

  const logoutHandler = () => {
    adminLogout();
  };

  return (
    <div className="container addform__container">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="add__form"
      >
        <small>{message}</small>
        <input
          type="text"
          name="productName"
          placeholder="Product name"
          required
          onChange={handleChange}
          value={input.productName}
        />
        <input
          type="text"
          name="description"
          placeholder="Product description"
          required
          onChange={handleChange}
          value={input.description}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          required
          onChange={handleChange}
          value={input.price}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          required
          onChange={handleChange}
          value={input.quantity}
        />
        <input
          type="file"
          filename="image"
          required
          onChange={handleFile}
        />
        <button type="submit" className="btn btn-primary">
          Upload Product
        </button>
      </form>
      <button type="submit" className="btn" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
}

export default Add;
