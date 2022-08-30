import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'

function Nav() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const itemSummary = () => {
    return cartItems.reduce((count, item) => Number(item.qty) + count, 0)
  }

  return (
    <Navig>
      <NavigationLink to={"/"}>
        <h4>Home</h4>
      </NavigationLink>
      <NavigationLink to={"/interior"}>
        <h4>Interior</h4>
      </NavigationLink>
      <NavigationLink to={"/about"}>
        <h4>About Us</h4>
      </NavigationLink>
      <NavigationLink to={"/shop"}>
        <h4>Shop</h4>
      </NavigationLink>
      <NavigationLink to={"/cart"}>
        <h4>Cart</h4>
        <ItemCount>{itemSummary()}</ItemCount>
      </NavigationLink>
    </Navig>
  );
}

const Navig = styled.nav`
  background: rgba(66, 96, 86, 0.8);
  width: max-content;
  display: block;
  padding: 0.7rem 1.5rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(10px);

  @media screen and (max-width: 600px) {
  display: none;
}
`;

const NavigationLink = styled(NavLink)`
  background: transparent;
  padding: 0.7rem;
  display: flex;
  color: var(--color-gold);
  font-size: 1.1rem;
  font-family: "Montserrat", sans-serif;

  &:hover {
    color: var(--color-baige);
  }

  &.active {
    color: var(--color-baige);
  }
`;

const ItemCount = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: transparent;
  color: var(--color-gold);
  display: flex;
  justify-content: center;
  align-item: center;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 1px;

  &:hover {
    color: var(--color-baige);
  }

  &:active {
    color: var(--color-baige);
  }
`;

export default Nav;
