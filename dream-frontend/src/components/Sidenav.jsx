import React from "react";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Sidenav({ logged, show, click }) {
  const sideNavClass = ["sidenav__container"];

  if (show) {
    sideNavClass.push("show");
  }

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const itemSummary = () => {
    return cartItems.reduce((count, item) => Number(item.qty) + count, 0);
  };

  return (
    <div className={sideNavClass.join(" ")}>
      <ul className="sidenav__navlinks" onClick={click}>
        <li>
          <NavigationLink to={"/"}>Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to={"/interior"}>Interior</NavigationLink>
        </li>
        <li>
          <NavigationLink to={"/about"}>About Us</NavigationLink>
        </li>
        <li>
          <NavigationLink to={"/shop"}>Shop</NavigationLink>
        </li>
        <li>
          <NavigationLink to={"/cart"}>
            Cart <span>{itemSummary()}</span>
          </NavigationLink>
        </li>
        {logged ? (
          <Li>
            Logout
          </Li>
        ) : (
          <>
            <li>
            <NavigationLink to={"/login"}>Login</NavigationLink>
            </li>
            <li>
            <NavigationLink to={"/register"}>Register</NavigationLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

const NavigationLink = styled(NavLink)`
  background: transparent;
  padding: 0.7rem;
  display: flex;
  color: var(--color-gold);
  font-weight: bold;
  font-family: "Montserrat", sans-serif;

  &.hover {
    color: var(--color-baige);
    font-size: 1.1rem;
  }

  &.active {
    color: var(--color-baige);
  }

  span {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--color-green-collection);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-item: center;
    text-align: center;
    font-size: 0.7rem;
    margin: 1px;

    &.active {
      color: var(--color-baige);
    }
  }
`;

const Li = styled.li`
background: transparent;
padding: 0.7rem;
display: flex;
color: var(--color-gold);
font-weight: bold;
font-family: "Montserrat", sans-serif;
cursor: pointer;

&.hover {
  color: var(--color-baige);
  font-size: 1.1rem;
}

&.active {
  color: var(--color-baige);
}
`;

export default Sidenav;
