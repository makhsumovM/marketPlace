import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken,  romoveToken } from '../../utils/token'
import { Button, Popover } from 'antd'
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { Badge } from '@mui/material';
const User = () => {
    const navigate = useNavigate()
    const token = getToken();
    const forLogOut = ()=>{
        romoveToken();
        navigate('/signUp')
    }
    const userInfo = (
        <div>
         {token ? (
        <div className="flex flex-col items-stretch justify-center gap-2">
          <Button iconPosition="start" onClick={forLogOut} icon={<LogoutIcon />}>Log Out</Button>
        </div>
      ) : (
        null
      )}
        </div>
    )
    if(token){
        return (
          <div className='cursor-pointer'>
              <Popover content={userInfo} trigger='click'>
                    <PersonOutlinedIcon fontSize="large" />
                </Popover>
          </div>
        )
    }
    else{
        return null
    }
}

export default User