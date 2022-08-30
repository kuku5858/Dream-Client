import React, { useState } from "react";
import AdminLogin from "../components/shop/AdminLogin";
import Add from "../components/shop/Add";

function AddProduct() {
  const adminUser = {
    userName: "admin",
    email: "admin@admin.com",
    password: "admin123",
    secretKey: "34453",
  };

  console.log(adminUser)

  const [admin, setAdmin] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const adminLogin = (details) => {
    console.log(details);

    if (
      details.userName === adminUser.userName &&
      details.email === adminUser.email &&
      details.password === adminUser.password &&
      details.secretKey === adminUser.secretKey
    ) {
      console.log("Logged in");
      setAdmin({
        name: details.userName,
        email: details.email
      })
    } else {
      console.log("details don't match")
    }
  };

  const adminLogout = () => {
    console.log("logout");

    setAdmin({ name: "", email: "" });
  };

  return (
    <div>
      {admin.email !== "" ? (
        <Add adminLogout={adminLogout}/>
      ) : (
        <AdminLogin adminLogin={adminLogin} error={error} />
      )}
    </div>
  );
}

export default AddProduct;
