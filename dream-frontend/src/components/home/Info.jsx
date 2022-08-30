import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import couch from "../../header-asset/couch.png";
import logoGreen from "../../header-asset/logo-green.png";
import newCollectiton from "../../header-asset/New collection.png";
import contact from "../../header-asset/contact us.png";
import "../../styles/Info.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Pagination, Navigation, EffectFade } from "swiper";

const images = [
  { id: 1, image: logoGreen, name: "Couch" },
  { id: 2, image: couch, name: "Logo" },
  { id: 3, image: newCollectiton, name: "New collection" },
  { id: 4, image: contact, name: "Contact us" },
];

function Info() {
  return (
    <section>
      <Swiper
        effect={"fade"}
        navigation={true}
        pagination={{clickable: true}}
        modules={[Pagination, Navigation, EffectFade]}
        className="info__container"
      >
        {images.map((item) => {
          return (
            <SwiperSlide key={item.id} className="dots">
              <img className="info__image" src={item.image} alt={item.name} />
            </SwiperSlide>
          );
        })}

      </Swiper>
    </section>
  );
}

export default Info;
