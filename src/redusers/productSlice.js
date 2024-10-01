import { createSlice } from "@reduxjs/toolkit"
import { DeleteALLProductsInCart, DeleteProductInCard, FilterByPrice, ForAddToCart, ForDecrementProduct, ForFilterByBrands, ForGetBrands, forGetProductById, ForIncreaserProduct, ForSearchByProductName, getCart, GetCategory, GetCategotyById, GetProducts } from "../api/forProductsApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const initialState = {
    products:[],
    productById:{},
    cart :null,
    misol:"",
    categories:[],
    categoriesById:{},
    ProducTName:"",
    brands:[],
    isFavorite : false,

   
}

export const forProductSlice = createSlice({
    name:'Products',
    initialState,
    reducers: {
        setIsFavorite1:(state,action)=>{
           
            state.isFavorite=action.payload
        },
        setProductName : (state,action)=>{
            state.ProducTName=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(GetProducts.fulfilled,(state,action)=>{
            state.products=action.payload;
        })
        .addCase(forGetProductById.fulfilled,(state,action)=>{
            state.productById=action.payload;
        })
        .addCase(getCart.pending,(state,action)=>{
            console.log("Pending cart")
        })
        .addCase(getCart.fulfilled,(state,action)=>{
            state.cart=action.payload;
        })
        .addCase(DeleteProductInCard.fulfilled,(state,action)=>{
           toast.success(action.payload.data)
        })
        .addCase(DeleteALLProductsInCart.fulfilled,(state,action)=>{
            toast.success("ALL PRODUCTS CLEAR")
        })
        .addCase(ForIncreaserProduct.fulfilled,(state,action)=>{
            toast.success("Increasing")
        })
        .addCase(ForDecrementProduct.fulfilled,(state,action)=>{
            toast.success("Decreasing")
        })
        .addCase(GetCategory.fulfilled,(state,action)=>{
            state.categories=action.payload;
        })
        .addCase(GetCategotyById.fulfilled,(state,action)=>{
            state.categoriesById= action.payload;
        })
        .addCase(ForAddToCart.fulfilled,(state,action)=>{
          console.log(action.payload)
        })
        .addCase(ForAddToCart.rejected,(state,action)=>{
            console.log(action.payload)

        })
        .addCase(ForSearchByProductName.pending,(state,action)=>{
            console.log("Searching...")
        })
        .addCase(ForSearchByProductName.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.products=action.payload;
        })
        .addCase(ForGetBrands.fulfilled,(state,action)=>{
                state.brands=action.payload;
                
        })
        .addCase(ForFilterByBrands.fulfilled,(state,action)=>{
          state.products = action.payload;
        })
        .addCase(FilterByPrice.fulfilled,(state,action)=>{
            console.log(action.payload ,"Javob")
            state.products = action.payload;
        })

    },
})


export const {setProductName,setIsFavorite1} = forProductSlice.actions;

export default forProductSlice.reducer;