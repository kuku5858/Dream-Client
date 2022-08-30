import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/interior.css";
import { MdAddCircle } from "react-icons/md";

function Samples({ images, setSelectedImage }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Slider {...settings}>
      {images.map((item) => {
        return (
          <div key={item.id} className="samples__container">
            <div className="samples">
              <img src={item.image} alt="" />
            </div>
            <div
              className="plus__icon"
              onClick={() => setSelectedImage(item.image)}
            >
              <MdAddCircle className="icon" />
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default Samples;

{
  /* <div className="green">
            <h3>1</h3>
          </div>
          <div className="red">
            <h3>2</h3>
          </div>
          <div className="blue">
            <h3>3</h3>
          </div>
          <div className="yellow">
            <h3>4</h3>
          </div> */
}
