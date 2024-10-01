import React, { useEffect, useState } from 'react'
import Section1Swiper from '../components/swipers/homeSwiper/section1Swiper'
import Countdown from '../components/timer/counDown'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, GetCategory, GetProducts } from '../api/forProductsApi'
import CustomCard from '../components/cards/customCard'
import Section2Swiper from '../components/swipers/homeSwiper/section2Swiper'
import { Button } from 'antd'
import Jbl from "../assets/JBL.png"
import playstation5 from "../assets/playStation5.png"
import dxtarak from "../assets/dxtarak.png"
import kalonki2 from '../assets/kalonki2.png'
import duxi2 from "../assets/duxi2.png"
import delivery1 from "../assets/delivery1.png"
import delivery2 from "../assets/delivery2.png"
import delivery3 from "../assets/delivery3.png"
import { Link, useNavigate } from 'react-router-dom'
import { getToken } from '../utils/token'
const Home = () => {
  const dispatch  = useDispatch();
  const token = getToken()

  useEffect(()=>{
    dispatch(GetProducts())
    dispatch(GetCategory())
    if(token){
      dispatch(getCart());
  }
    // dispatch(getCart())
  },[dispatch]);
  const {products,categories} = useSelector((state)=>state.forProductSlice)
  const endDate = '2024-09-30T23:59:59'


  return (
    <div className='py-[]'>
      <div className='section1  py-[70px] flex items-center justify-around sm:flex-col lg:flex-row sm:gap-[50px]'>
          <div className='flex sm:flex-wrap sm:gap-5 lg:flex-col lg:w-[20%]'>
          {categories.slice(0,9).map((el)=>{
            return <Link to={`/categories/${el.id}`} key={el.id}><p className='sm:p-[10px_20px] sm:bg-[#F5F5F5] lg:p-0 lg:bg-inherit' >{el.categoryName}</p></Link>
          })}
            
          </div>
          <div className=' lg:w-[60%] h-[350px] sm:w-[90%]'>
            <Section1Swiper/>
          </div>
      </div>
      <div className='section2'>
        <h2 className='flex items-center gap-3 text-[#DB4444] w-[95%] m-auto'> <span className='bg-[#DB4444] p-[40px_20px]'></span>Today’s</h2>
        <div className='flex justify-between p-[20px] items-center'>
          <div className='w-[50%] flex justify-between sm:flex-col lg:flex-row'>
            
            <h2 className="text-[48px] font-bold">Flash Sales</h2>
            <Countdown  endDate={endDate}/>
          </div>
        </div>
        <div>
          <Section2Swiper />
        </div>
        <div className='text-center py-[20px] '>
          <Link to={'/categories'}>
            <Button className='bg-[#DB4444]  text-white p-[20px_40px]'>View All Products</Button>
          </Link>
        </div>
      </div>
        {/* secion3 */}
      <div className="w-[100%] pt-[20px] pb-[20px]">
              <div className="w-[80%] m-auto py-[]">
                <div className="w-[100%] m-auto flex gap-[20px] items-center">
                  <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
                  <h1 className="text-[16px] text-[#DB4444] font-[700]">
                    Categories
                  </h1>
                </div>

                <h1  className="text-[36px] text-[black] font-[700]">
                  Browse By Category
                </h1>

                <div className="w-[100%] flex flex-wrap gap-[20px] items-center justify-center py-[40px]">
                  {categories.slice(0,6).map((el)=>{
                    return <Link to={`/categories/${el.id}`} key={el.id}>
                    <div className="group hover:bg-[#DB4444] border-[2px] border-[#91919170] w-[170px] h-[145px] flex flex-col justify-evenly items-center">
                    <img
                      className="w-[50px] h-[50px] group-hover:filter group-hover:invert group-hover:contrast-100"
                      src={import.meta.env.VITE_APP_FILE_URL+el.categoryImage}
                      alt=""
                    />
                    <h1 className="text-[16px] font-[100] group-hover:text-white">
                      {el.categoryName.length>15?el.categoryName.slice(0,15)+
                      '...':el.categoryName}
                    </h1>
                  </div>
                    </Link>
                  })}

                </div>
              </div>
      </div>
      <div className='section4 '>
         <h2 className='flex items-center gap-3 text-[#DB4444] w-[95%] m-auto'> <span className='bg-[#DB4444] p-[40px_20px]'></span>Today’s</h2>
         <div className='flex p-[20px] justify-between items-center sm:flex-col lg:flex-row sm:gap-3'>
            <h2 className="text-[48px] font-bold">Best Selling Products</h2>
            <Link to={'/categories'}>
              <Button className='bg-[#DB4444]  text-white p-[20px_40px]'>View All </Button>
            </Link>
         </div>
            <div className='flex flex-wrap justify-around'>
              {products.slice(0,4).map((product)=>{
               
                return <CustomCard key={product.id}  productName={product.productName} price={product.price} discountPrice={product.discountPrice} image={product.image} ID={product.id}  product={product}/>
              })}
          </div>
      </div>
      <div className='section5 flex bg-black text-white lg:justify-around items-center sm:flex-col-reverse lg:flex-row my-[20px]'>
          <div>
            <p className='text-[#00FF66] py-[20px]'>Categories</p>
            <h2 className='text-[32px] py-[20px]'>Enhance Your Music Experience</h2>
            <div className='py-[20px]'>
              <Countdown endDate={endDate} />
            </div>
            <Button className='p-[20px_40px] bg-[#00FF66]'>Buy Now!</Button>
          </div>
          <div>
            <img src={Jbl} alt="" />
          </div>
      </div>
      <div className='section6'>
        <h2 className='flex items-center gap-3 text-[#DB4444] w-[95%] m-auto'> <span className='bg-[#DB4444] p-[40px_20px]'></span>Our Products</h2>
        <h2 className="text-[48px] font-bold p-[20px]">Explore Our Products</h2>
        <div className='grid lg:grid-cols-3  sm:grid-cols-1 md:grid-cols-2 justify-items-center justify-around gap-[20px] py-[50px]'>
          {products.slice(4).map((product)=>{
             
            return <CustomCard  productName={product.productName} price={product.price} discountPrice={product.discountPrice} image={product.image} ID={product.id}  product={product}  key={product.id}/>
          })}
        </div>
        <div className='text-center py-[20px]'>
          <Link to={'/categories'}>
            <Button className='bg-[#DB4444]  text-white p-[20px_40px]'>View All </Button>
          </Link>
        </div>
      </div>
      <div className='section7 py-[50px]'>
      <div className="flex flex-wrap gap-8 justify-center items-start">
      <div className="flex overflow-hidden flex-col px-7 pt-24 bg-black rounded min-w-[240px] w-[600px] max-md:px-5 max-md:max-w-full">
        <div className="flex relative flex-col items-start px-1 pt-96 pb-8 min-h-[511px] max-md:pt-24 max-md:pr-5 max-md:max-w-full">
          <img
            src={playstation5}
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col max-w-full w-[242px]">
            <div className="flex flex-col w-full text-neutral-50">
              <div className="text-2xl font-semibold tracking-wider leading-none">
                PlayStation 5
              </div>
              <div className="mt-4 text-sm leading-5">
                Black and White version of the PS5 coming out on sale.
              </div>
            </div>
            <div className="flex flex-col mt-4 text-base font-medium text-white w-[81px]">
              <div>Shop Now</div>
              <img       
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center min-w-[240px] w-[700px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-end px-14 max-w-full rounded bg-stone-950 w-[570px] max-md:pl-5">
          <div className="flex relative flex-col items-start pt-36 pb-6 w-full min-h-[284px] max-md:pt-24 max-md:pr-5">
            <img
                src={dxtarak}
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col max-w-full w-[255px]">
              <div className="flex flex-col w-full text-neutral-50">
                <div className="text-2xl font-semibold tracking-wider leading-none">
                  Women’s Collections
                </div>
                <div className="mt-4 text-sm leading-5">
                  Featured woman collections that give you another vibe.
                </div>
              </div>
              <div className="flex flex-col mt-4 text-base font-medium text-white w-[81px]">
                <div>Shop Now</div>
                <img
                  className="object-contain w-full aspect-[83.33]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-center items-center mt-8 max-md:max-w-full">
          <img
            src={kalonki2}
            className="object-contain self-stretch my-auto aspect-[0.95] min-w-[240px] w-[270px]"
          />
          <img
              src={duxi2}
          />
        </div>
      </div>
    </div>
    
    <div className="w-[100%] m-auto flex justify-center items-center py-[100px]">
          <div className="w-[80%] m-auto flex flex-wrap justify-center items-center gap-[20px]">
                <div className="w-[270px] h-[161px] flex flex-col items-center gap-[5px]">
                    <img src={delivery1} alt="" />
                    <h1 className="text-[20px] text-black font-[700]">FREE AND FAST DELIVERY</h1>
                    <p className="text-[14px]">Free delivery for all orders over $140</p>
                </div>

                <div className="w-[270px] h-[161px] flex flex-col items-center gap-[5px]">
                    <img src={delivery2} alt="" />
                    <h1 className="text-[20px] text-black font-[700]">FREE AND FAST DELIVERY</h1>
                    <p className="text-[14px]">Free delivery for all orders over $140</p>
                </div>
                <div className="w-[270px] h-[161px] flex flex-col items-center gap-[5px]">
                    <img src={delivery3} alt="" />
                    <h1 className="text-[20px] text-black font-[700]">FREE AND FAST DELIVERY</h1>
                    <p className="text-[14px]">Free delivery for all orders over $140</p>
                </div>
          </div>
      </div>


      </div>
    </div>
  )
}

export default Home