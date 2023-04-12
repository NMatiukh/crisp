import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./reducer/productsReducer";
import shopReducer from "./reducer/shopReducer";
import loaderReducer from "./reducer/loaderReducer";

export default configureStore({
    reducer: {
        products: productsReducer,
        shopItems: shopReducer,
        loader: loaderReducer
    }
})