import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './myslices/ColorState';
import productReducer from './myslices/Eachprothemeslice'; 

export  default configureStore({
    reducer:{
        confState: themeReducer ,
        EachproSlice: productReducer,
    }
})

