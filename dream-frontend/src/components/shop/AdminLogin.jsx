import React, {useState} from "react";
import "../../styles/addProduct.css";

function AdminLogin( {adminLogin, error}) {

    const [details, setDetails] = useState({userName: "", email: "", password: "", secretKey: ""})

    const submitHandler = (e) => {

        e.preventDefault();
        adminLogin(details);

    }

  return (
    <section>
        <h5>Please login to add product</h5>
        <h2>ADMIN ONLY</h2>
      <div className="container adimnlogin__container">
        <form action="" onSubmit={submitHandler} className="admin__form">
          <input type="text" name="userName" placeholder="User name" required onChange={e => setDetails({...details, userName: e.target.value})} value={details.userName}/>
          <input type="email" name="email" placeholder="Email" required onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={e => setDetails({...details, password: e.target.value})} value={details.password}
          />
          <input
            type="password"
            name="secretKey"
            placeholder="Secret Key"
            required
            onChange={e => setDetails({...details, secretKey: e.target.value})} value={details.secretKey}
          />
          <button type="submit" className="btn btn-primary">
            Pass
          </button>
        </form>
        <div className="notice">
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            ipsam ratione illum corrupti. Magni officiis non debitis adipisci
            odio assumenda exercitationem facere, doloremque possimus,
            distinctio, sit nihil dicta fugit omnis.
          </small>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;
