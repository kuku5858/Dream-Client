import React from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { logoutAction } from "../redux/action/userAction";
import "../styles/logo.css";

function Logo({ logged, setLogged, click }) {

  const dispatch = useDispatch();

 
    const handleClick = (e) => {
      e.preventDefault();
      //sending data to our api using redux
      logoutAction(dispatch);

      const user = JSON.parse(localStorage.getItem("persist:root")).loggedUser;
      console.log(`user: ${user?true:false}`);

      setLogged(user ? true : false);
  
      <Navigate to="/"/>

      window.location.reload();
    };

    console.log(`logged: ${logged}`)
  

  return (
    <>
      <div className="logo__container">
        <Link className="dream" to={"/"}>
          <h2>DREAM DESIGN</h2>
          <small>Life</small>
          <small>.</small>
          <small>Interior</small>
          <small>.</small>
          <small>Decor</small>
        </Link>

        {logged ? (
          <div className="logout">
            <button className="btn log" onClick={handleClick}>logout</button>
          </div>
        ) : (
          <div className="login">
            <Link to="/login"><button className="btn log">login</button></Link>
            <Link to="/register"><button className="btn log">register</button></Link>
          </div>
        )}

        <div className="lines" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Logo;
