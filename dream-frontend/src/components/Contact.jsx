import React from "react";
import MapContainer from "./MapContainer";
import { ImLocation } from "react-icons/im";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact__section">
      <h5>GET IN TOUCH</h5>
      <h2>CONTACT US</h2>

      <div className="contact__container">
        <article className="contact__info">
          <div className="flexing">
            <ImLocation className="icons" />
            <h3>Dream Interior Design</h3>
          </div>
          <small>Bethel B146, Addis Ababa, Ethiopia</small>

          <div className="flexing">
            <AiFillPhone className="icons" />
            <h3>Telephone</h3>
          </div>
          <small>+251910910028</small>
          <small>+251920342267</small>

          <div className="flexing">
            <MdEmail className="icons" />
            <h3>Email</h3>
          </div>
          <small>dreaminteriordesign20@gmail.com</small>
        </article>

        <MapContainer className="map__container"/> 

      </div>
    </div>
  );
}


export default Contact;
