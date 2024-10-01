import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ForDecrementProduct, forGetProductById, ForIncreaserProduct } from '../api/forProductsApi';
import iphone from "../assets/Iphone.png"

import { Button, Flex, Radio } from 'antd';
import Radio1 from '../components/radio/radio';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import deliveryIcon from "../assets/icon-delivery.png"
const ProductById = () => {
    const {id} = useParams();

    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(id)
        if(id){
            dispatch(forGetProductById(id))
            }
    },[id,dispatch])

    const {productById} = useSelector((state)=>state.forProductSlice)
    console.log(productById && productById?.images?.length)
    

  return (
    <div className='flex items-center justify-around flex-wrap py-[50px]'>
       <div className='lg:w-[40%] sm:w-[70%]'>
        <img 
  src={
    productById?.images?.length > 0 
      ? import.meta.env.VITE_APP_FILE_URL + productById.images[0]?.images 
      : 'путь_к_изображению_по_умолчанию'
  } 
  alt="" 
  className='w-[100%] h-[100%] object-cover' 
/>

       </div>
       <div>
          <h2 className='text-[32px] py-[20px]'>{productById?.productName}</h2>
          <div className='text-start'>
            <Radio1/>
          </div>
          <div>
            <p className='font-bold text-[32px]'>${productById?.price}</p>
            <p className='text-[#00000099]'>{productById?.description}</p>
          </div>
          <hr />
          <div>
          <p className='flex items-center gap-4 py-[20px]'>Colors : 
              <span 
                style={{
                  backgroundColor: `${productById?.color}`, 
                  width: "30px", 
                  height: "30px", 
                  borderRadius: "50%", 
                  display: "inline-block"
                }} 
              />
            </p>
            <div className='flex items-center gap-3'>
                SIZE : 
            <Radio.Group defaultValue="a">
                <Radio.Button value="a">XS</Radio.Button>
                <Radio.Button value="b">S</Radio.Button>
                <Radio.Button value="c">M</Radio.Button>
                <Radio.Button value="d">L</Radio.Button>
                <Radio.Button value="e">XL</Radio.Button>
            </Radio.Group>
            </div>
            <div>
              <div className='flex gap-4 items-center py-[20px]'>
                <div className='flex items-center gap-2'>
                  <Button className='py-[20px]' ><RemoveIcon/></Button>
                    <p className='text-[24px]'>{productById?.quantity}</p>
                  <Button className='bg-[#DB4444] py-[20px]' ><AddIcon color='inherit'/></Button>
                </div>
                <Button className='bg-[#DB4444] text-white p-[20px_40px]'>Buy Now</Button>
                <Button className='py-[20px]'><FavoriteBorderIcon fontSize='medium'/></Button>
              </div>
              <div className='flex items-center gap-[20px] border p-[20px]'>
                <div>
                    <img src={deliveryIcon} alt="" />
                </div>
                <div >
                  <h2>Free Delivery</h2>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className='flex items-center gap-[20px] border p-[20px]'>
                <div>
                    <img src={deliveryIcon} alt="" />
                </div>
                <div >
                  <h2>Free Delivery</h2>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default ProductById