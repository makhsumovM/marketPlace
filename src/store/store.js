import { configureStore } from "@reduxjs/toolkit";
import forProductSlice  from "../redusers/productSlice";

export const store = configureStore({
    reducer:{
        forProductSlice,
    }
})