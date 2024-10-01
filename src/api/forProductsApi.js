import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";



export const GetProducts = createAsyncThunk("Products/GetProducts", async()=>{
    try {
        const {data} = await  axiosRequest.get("/Product/get-products")    
        return data.data.products;   
    } catch (error) {
        console.error(error);
    }
})



export const forGetProductById = createAsyncThunk("Products/forGetProductById",async(id)=>{
    try {
        const {data} = await axiosRequest.get(`/Product/get-product-by-id?id=${id}`);
        return data.data;
    } catch (error) {
        console.error(error)
    }
})

export const getCart = createAsyncThunk('Products/getCart', async()=>{
    try {
        const {data} = await axiosRequest.get("Cart/get-products-from-cart")
        return data.data
    } catch (error) {
        console.error(error)
    }
})


  export const ForAddToCart = createAsyncThunk('Products/ForAddToCart',async(id,{dispatch})=>{
    try {
        const {data} = await axiosRequest.post(`/Cart/add-product-to-cart?id=${id}`)
        dispatch(getCart())
        toast.success("Product added to cart successfully")
        return data;
    } catch (error) {
        console.error(error)
        toast.error("Product allready added successfully")
    }
  })


  export  const DeleteProductInCard = createAsyncThunk('Products/DeleteProductInCard',async(id,{dispatch})=>{
    try {
        const {data} = await axiosRequest.delete(`/Cart/delete-product-from-cart?id=${id}`)
        dispatch(getCart())
        return data;
    } catch (error) {
        console.error(error)
    }
  })


  export const DeleteALLProductsInCart = createAsyncThunk('Products/DeleteALLProductsInCart',async(_,{dispatch})=>{
    try {
        const {data} = await axiosRequest.delete("/Cart/clear-cart")
        dispatch(getCart())
        return data
    } catch (error) {
        console.error(error)
    }
  })

export const ForIncreaserProduct = createAsyncThunk('Products/ForIncreaserProduct',async(id,{dispatch})=>{
    try {
        const {data} = await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`)
        dispatch(getCart())
        return data
    } catch (error) {
        console.error(error)
    }
})


export const ForDecrementProduct = createAsyncThunk('Products/ForDecrementProduct',async(id,{dispatch})=>{
    try {
        const {data} = await axiosRequest.put(`/Cart/reduce-product-in-cart?id=${id}`)
        dispatch(getCart())
        return data
    } catch (error) {
        console.error(error)
    }
})

export const GetCategory = createAsyncThunk('Products/GetCategory',async()=>{
    try {
        const {data} = await axiosRequest('/Category/get-categories')
        return data.data
    } catch (error) {
        console.error(error)
    }
})


export const GetCategotyById = createAsyncThunk('Products/GetCategotyById',async(id)=>{
    try {
        const { data }=  await axiosRequest(`/Category/get-category-by-id?id=${id}`)
        return data
    } catch (error) {
        console.error(error)
    }
})


export const ForSearchByProductName = createAsyncThunk('Products/ForSearchByProductName',async(value,{dispatch})=>{
    try {
        const {data}= await axiosRequest(`/Product/get-products?ProductName=${value}`)
        console.log(data.data.products)
        return data.data.products
    } catch (error) {
        console.error(error)
    }
})


export const ForGetBrands = createAsyncThunk('Products/ForGetBrands',async()=>{
    try {
        const  {data} = await axiosRequest('/Brand/get-brands')
        return data.data
    } catch (error) {
        console.error(error)
    }
})


export const ForFilterByBrands = createAsyncThunk('Products/ForFilterByBrands', async(id)=>{
        try {
             const  {data} = await axiosRequest(`/Product/get-products?BrandId=${id}`)
             console.log(data.data.products,"filterByBrands")
             return data.data.products
        } catch (error) {
            console.error(error)
        }
})

export const FilterByPrice = createAsyncThunk('Products/FilterByPrice', async({min,max})=>{
    console.log(min)
    console.log(max)
    try {
        const {data} = await axiosRequest(`/Product/get-products?MinPrice=${min}&MaxPrice=${max}`)
        console.log(data.data.products,"filterByPrice")
        return data.data.products
    } catch (error) {
        console.error(error)
    }
})