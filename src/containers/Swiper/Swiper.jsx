import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import images from '../../assets/images';

const Carrusel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"

      >
        <SwiperSlide><img src={images.img0} alt="" className='swiper-slide img ' /></SwiperSlide>
        <SwiperSlide><img src={images.img1} alt="" className='swiper-slide img ' /></SwiperSlide>
        <SwiperSlide><img src={images.img2} alt="" className='swiper-slide img ' />op 2</SwiperSlide>
        <SwiperSlide><img src={images.img3} alt="" className='swiper-slide img ' /></SwiperSlide>
        <SwiperSlide><img src={images.img4} alt="" className='swiper-slide img ' /></SwiperSlide>

      </Swiper>
    </>
  );
}
export default Carrusel