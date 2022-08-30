import React from "react";
import jerry from "../../header-asset/Jerry.jpg";
import ava1 from "../../header-asset/ava1.png";
import ava2 from "../../header-asset/ava2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "../../styles/teams.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Teams() {
  return (
    <section>
      <h5>GET TO KNOW US</h5>
      <h2>OUR TEAM</h2>

      <Swiper
        className="container general"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={40}
        // slidePerView={1}
      >
        <SwiperSlide>
          <div className="team__container">
            <article className="team">
              <div className="team__avatar">
                <img src={jerry} alt="" />
              </div>
              <h5 className="team__name">Jerusalem Yilma</h5>
              <small className="info">
                Founder and CEO of Dream interior design. I graduated in
                Architecture and Interior Design from Mekele University and have
                been working in the industry for about 3 years.
              </small>
              <small className="info">www.jerusalem.com</small>
            </article>

            <article className="team">
              <div className="team__avatar">
                <img src={ava2} alt="" />
              </div>
              <h5 className="team__name">Hanna Watchman</h5>
              <small className="info">
                A graduate of the Lodz University of Technology, Faculty of
                Civil Engineering, Architecture and Environmental Engineering,
                major in Architecture and Town Planning, and the College of Art
                and Design in Lodz, major in Interior Design
              </small>
              <small className="info">www.hannawatc.com</small>
            </article>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="team__container">
            <article className="team">
              <div className="team__avatar">
                <img src={ava1} alt="" />
              </div>
              <h5 className="team__name">Julia Rodrigez</h5>
              <small className="info">
                A graduate of the Lodz University of Technology, Faculty of
                Civil Engineering, Architecture and Environmental Engineering,
                major in Architecture and Town Planning, and the College of Art
                and Design in Lodz, major in Interior Design
              </small>
              <small className="info">www.juliarod.com</small>
            </article>

            <article className="team">
              <div className="team__avatar">
                <img src={jerry} alt="" />
              </div>
              <h5 className="team__name">Jerusalem Yilma</h5>
              <small className="info">
                Founder and CEO of Dream interior design. I graduated in
                Architecture and Interior Design from Mekele University and have
                been working in the industry for about 3 years.
              </small>
              <small className="info">www.jerusalem.com</small>
            </article>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Teams;
