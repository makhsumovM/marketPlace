import React, { useEffect } from 'react'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import { getToken } from '../../utils/token';
import { Badge } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../api/forProductsApi';
const UserCart = () => {
    const {cart}= useSelector((state)=>state.forProductSlice)
    const token = getToken()
    const distpatch = useDispatch();

    useEffect(()=>{
        if(token){
            distpatch(getCart());
        }
          
    },[distpatch]);
   
    console.log(cart)
    if(token){
        return (

             <div>
                    <Link to={"/cart"}>
                    <Badge badgeContent={cart && cart[0]?.productsInCart.length || 0} color='error'>
                        <ShoppingCartOutlinedIcon fontSize="large" />
                    </Badge>

                    </Link>
            </div>
          )
     }else{
        return null;
     }


}

export default UserCart