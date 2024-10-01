import React from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../../../App.css"
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import krossi3 from '../../../assets/krossi3.jpg'
import krossi4 from '../../../assets/krossi4.jpg'
import krossi5 from '../../../assets/krossi5.jpg'
import krossi6 from '../../../assets/krossi6.jpg'
import krossi7 from '../../../assets/krossi7.jpg'
 

const Section1Swiper = () => {
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
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
                 <SwiperSlide >
                    <img src={krossi6} alt="krossi1"  />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={krossi3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={krossi7} alt="" />
                </SwiperSlide>
                <SwiperSlide><img src={krossi5} alt="" /></SwiperSlide>
 
        </Swiper>
    </>
  )
}

export default Section1Swiper