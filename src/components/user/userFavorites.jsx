import React, { useEffect, useState } from 'react'
import { getToken } from '../../utils/token'
import { useDispatch } from 'react-redux';
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
const UserFavorites = () => {
   
    
    // const isFavorite1=useSelector((store)=>store.forProductSlice.isFavorite)
   
    // console.log(a)
//  let a=[]
const [myFavorites, setMyFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);


    const token = getToken()
    const distpatch = useDispatch();

    useEffect(()=>{
        if(token){
           console.log("build..")
        }
          
    },[distpatch]);

    

    if(token){
        return (
            <Link to={'/favorites'}>
                    <div>
                        <Badge badgeContent={myFavorites && myFavorites?.length} color='error'>
                            <FavoriteBorderRoundedIcon fontSize='large'/>
                        </Badge>
                    </div>
            </Link>

          )
    }
    else{
        return null;
    }

}

export default UserFavorites