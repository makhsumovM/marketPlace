import axios from "axios";
import { jwtDecode } from "jwt-decode";
export function saveToken(token){
    localStorage.setItem("token", token);
}



export const axiosRequest = axios.create({
    baseURL: import.meta.env.VITE_APP_API,
})

axiosRequest.interceptors.request.use(
    config=>{
        const Token = localStorage.getItem("token")
        if(Token){
            config.headers.Authorization = `Bearer ${Token}`
        }
        return config
    },
    error =>{
        return Promise.reject(error)
    }
)