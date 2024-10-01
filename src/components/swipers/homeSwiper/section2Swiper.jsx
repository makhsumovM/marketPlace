import React, { useEffect, useRef } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomCard from '../../cards/customCard';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetProducts } from '../../../api/forProductsApi';
const Section2Swiper = () => {
  const swiperRef = useRef(null)
  const dispatch  = useDispatch();
  useEffect(()=>{
    dispatch(GetProducts())
  },[]);
  const {products} = useSelector((state)=>state.forProductSlice)
  
  return (
    <>
    <div className='w-[100%] flex justify-end items-center p-4 gap-2'>
      <Button onClick={() => swiperRef.current.swiper.slidePrev()}><ArrowBackRoundedIcon/></Button>
      <Button onClick={() => swiperRef.current.swiper.slideNext()}><ArrowForwardRoundedIcon /></Button>
    </div>
    <Swiper
    ref={swiperRef}
    slidesPerView={3}
    breakpoints={{
           
      425: {
          slidesPerView: 1, // 
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2, // 
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3, // 
          spaceBetween: 30,
        },

    }}
    >
      {products.map(product=>(
        <SwiperSlide key={product.id}>
          <CustomCard productName={product.productName} price={product.price} discountPrice={product.discountPrice} image={product.image}/>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  )
}

export default Section2Swiper