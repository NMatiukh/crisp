import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./reducer/productsReducer";

export default configureStore({
    reducer: {
        products: productsReducer
    }
})