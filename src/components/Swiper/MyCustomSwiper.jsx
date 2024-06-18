import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./MyCustomSwiper.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const MyCustomSwiper = () => {
  return (
    <div className="MyCustomSwiper">
      <h2 className="MyCustomSwiper_h2">Галерея</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/empty-hallway-background_23-2149408808.jpg?t=st=1717948844~exp=1717952444~hmac=1478f7c4f16840898cc6d1e6d0951b20202a6030e2444b2ea1ae569cd4188c0e&w=900"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/little-adorable-girl-childs-ophthalmology-optometrist-checking-eyesight_274719-435.jpg?w=1060"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/friendly-doctor-doing-high-five-with-child-sitting-desk-healthcare-physician-specialist-medicine-providing-health-care-services-radiographic-treatment-examination-hospital-cabinet_482257-4255.jpg?w=1060"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://t4.ftcdn.net/jpg/06/19/18/59/240_F_619185904_tOzmsxSLi0eTS4dP7xmsf25FsJiuixlr.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.tildacdn.com/tild3764-3136-4666-b230-313064303830/18_Jakshybaeva.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyCustomSwiper;
