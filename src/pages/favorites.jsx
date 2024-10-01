import React, { useEffect, useState } from 'react';
import Radio1 from '../components/radio/radio';
import { Button, Card } from 'antd';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetProducts } from '../api/forProductsApi';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const Favorites = () => {
    
    const [myFavorites, setMyFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

    const dispatch = useDispatch();
    const {products}=useSelector((state)=>state.forProductSlice)
    useEffect(()=>{
        dispatch(GetProducts())
       
    },[dispatch])

    
    const handleDeleteClick = (id) => {
        const updatedFavorites = myFavorites.filter(item => item.id !== id);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setMyFavorites(updatedFavorites); 
    };


    
    if (!myFavorites.length) {
        return <p>You have no favorite products yet.</p>;
    }

    return (
        <div>
            <div className='flex justify-between p-[20px] flex-wrap items-center'>
                <h2 className='text-[24px]'>Wishlist({myFavorites.length})</h2>
                <Button className='p-[20px]'>Move All To Bag</Button>
            </div>
            <div className='flex justify-start flex-wrap gap-[20px] p-[20px]'>
                {myFavorites.map((el) => {
                    return (
                        <div className="relative w-fit group" key={el?.id}>
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <img src={import.meta.env.VITE_APP_FILE_URL + el?.image} style={{ objectFit: "cover", height: "250px" }} />
                                }
                            >
                                <h2 className="text-start font-bold text-[24px]">{el?.productName}</h2>
                                <p className="text-start text-red-700 flex gap-[20px] text-[20px]">${el?.price} <span className="text-[grey] line-through">${el?.discountPrice}</span></p>
                                <div className="flex justify-start">
                                    <Radio1 />
                                </div>
                            </Card>
                            <div className="flex flex-col items-start absolute top-[5%] right-[5%] gap-[10px]">
                                <Button onClick={() => handleDeleteClick(el.id)}><DeleteIcon /></Button>
                            </div>
                            <div className="absolute flex left-[0] right-0 justify-center top-[53%] w-[100%]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                <Button className="text-white w-[100%] bg-black ">Add To Cart</Button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='flex p-[20px] justify-between items-center sm:flex-col lg:flex-row sm:gap-3'>
                <h2 className="text-[48px] font-bold">Best Selling Products</h2>
                <Link to={'/categories'}>
                    <Button className='bg-[#DB4444]  text-white p-[20px_40px]'>View All </Button>
                </Link>
             </div>
             <div className='flex flex-wrap justify-around'>
             {products.slice(4,8).map((el)=>{
               return <div className="relative w-fit group" key={el.id}>
               <Card
                   style={{ width: 300 }}
                   cover={
                       <img src={import.meta.env.VITE_APP_FILE_URL + el.image} style={{ objectFit: "cover", height: "250px" }} />
                   }
               >
                   <h2 className="text-start font-bold text-[24px]">{el.productName}</h2>
                   <p className="text-start text-red-700 flex gap-[20px] text-[20px]">${el.price} <span className="text-[grey] line-through">${el.discountPrice}</span></p>
                   <div className="flex justify-start">
                       <Radio1 />
                   </div>
               </Card>
               <div className="flex flex-col items-start absolute top-[5%] right-[5%] gap-[10px]">
               <Link to={`/${el.id}`}>
            <Button>
              <RemoveRedEyeOutlinedIcon />
            </Button>
          </Link>
               </div>
               <div className="absolute flex left-[0] right-0 justify-center top-[53%] w-[100%]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                   <Button className="text-white w-[100%] bg-black ">Add To Cart</Button>
               </div>
           </div>
             })}
             </div>
        </div>
    );
};

export default Favorites;
