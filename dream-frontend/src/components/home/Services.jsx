import React from "react";
import { BiCheck } from "react-icons/bi";
import "../../styles/services.css";

function Services() {
  return (
    <section>
      <h5>WHAT CAN WE OFFER</h5>
      <h2>OUR SERVICES</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Interior design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Space planning and interior architecture</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Architectural details and drawings</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Construction floor plans and elevations</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Coordination with architects and contractors</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Indoor spaces safety and functionality</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Home staging / decore</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Selection of furniture and accessories (decorativ  crafts)</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom furniture and textile design</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Concierge purchasing management</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Personalized interior planning and design</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Delivery and installation</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Consultation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Budget planning</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Color palette consultation</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Space and design consultation</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lighting and material design consultation</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Interior start up consultation and collaboration </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
