import {  TextField } from '@mui/material'
import { Button } from 'antd'
import React, { useState } from 'react'
import { axiosRequest, saveToken } from '../utils/axiosRequest'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../utils/token'



const SignUp = () => {
  const [isLogin,setIsLogin]= useState(false)
  const navigate = useNavigate()

  const toggleForm =()=>{
    setIsLogin(!isLogin)
  }

  const handleRegisterSubmit = (e)=>{
    e.preventDefault();
    let newUser = {
      userName: e.target["userName"].value,
      email: e.target["email"].value,
      password: e.target["password"].value,
      confirmPassword: e.target["confirmPassword"].value,
      phoneNumber: e.target["phoneNumber"].value,
    }
    console.log(newUser)
    handleRegister(newUser)
  }

  
async function handleRegister(newUser){
  try {
    const {data}= await axiosRequest.post("/Account/register",newUser)
    console.log(data)
    if(data.statusCode == 200){
      toast.success(data.data)
      setIsLogin(!isLogin)
      // saveToken(data.data)

    }
  } catch (error) {
    toast.error("Error")
    console.error(error)
  }
}


async function handleLoginClick(e){
  e.preventDefault();
  const user = {
    userName:e.target["userName"].value,
    password: e.target["password"].value,
  }
  console.log(user)
  try {
    const {data} = await axiosRequest.post('/Account/login',user)
    console.log(data)
    if(data.statusCode == 200)
      {
        saveToken(data.data)
        getToken(data.data)
        navigate("/")

      }
  } catch (error) {
    console.error(error)
  }
}



  return (
    <div>
      <Toaster/>
      {!isLogin? (
        <div className='lg:w-[25%] py-[100px] m-auto  sm:w-[90%] '>
          <div className='py-[20px]'>
            <h1 className='text-[32px] py-[px]'>Log in to Exclusive</h1>
            <p className='pb-[20px]'>Enter your details below</p>
          </div>
          <form  className='flex flex-col gap-[15px]' onSubmit={handleLoginClick}>
            <TextField label='Name' variant='outlined'  name='userName' size='medium'  />
            <TextField label='Password' variant='outlined' name='password'  size='medium'  />
            <div>
              <Button type='submit' htmlType='submit' className='bg-[#DB4444] p-[20px] w-[100%] text-white'>Log In</Button>
            </div>
          </form>
          <p className='py-[20px] justify-center gap-[10px] flex'>Dont have account? <span onClick={toggleForm} className='cursor-pointer underline'>Register</span></p>
        </div>
      ):(
        <div className=' lg:w-[25%] py-[100px] m-auto  sm:w-[90%] '>
          <div className='py-[20px]'>
            <h1 className='text-[32px] py-[px]'>Create an account</h1>
            <p className='pb-[20px]'>Enter your details below</p>
          </div>
          <form  className='flex flex-col gap-[15px]' onSubmit={handleRegisterSubmit}>
              <TextField label='Name' variant='outlined'  name='userName' size='medium'/>
              <TextField label='Phone' variant='outlined'  name='phoneNumber' size='medium'/> 
              <TextField label='Email' variant='outlined'  name='email' size='medium'  />
              <TextField label='Password' variant='outlined' name='password' size='medium'  />
              <TextField label='Confirm Password' variant='outlined' name='confirmPassword' size='medium'  />
              
            <div>
              <Button type=''  htmlType='submit' className='bg-[#DB4444] p-[20px] w-[100%] text-white'>Create Account</Button>
            </div>
          </form>
          <p className='py-[20px] justify-center gap-[10px] flex'>Already have account? <span onClick={toggleForm} className='cursor-pointer underline'>Log in</span></p>
        </div>
      )}
    </div>
  )
}

export default SignUp