import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

import "../styles/footer.css";

const date = new Date();

function Footer() {
  return (
    <div className="footer__container">
      <a href="https://instagram.com/dreaminteriordesign20?igshid=YmMyMTA2M2Y=" target="_blank"><AiFillInstagram className="footer__icons" /></a>
      <a
        href="https://www.facebook.com/groups/1966331703624685"
        target="_blank"
      >
        <AiFillFacebook className="footer__icons" />
      </a>
      <a href="https://t.me/dreaminteriordesign" target="_blank">
        <BsTelegram className="footer__icons" />
      </a>
      <p>&copy; Dream Interior Design {date.getFullYear()}</p>
    </div>
  );
}

export default Footer;
