import axios from "axios";
import {CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_PRODUCT, GET_PRODUCTS, LOADER} from "../types/products";
import {CREATE_SHOP_ITEM} from "../types/SHOP_ITEM";

const URL = 'http://localhost:3000/products'

export function createProduct(product) {
    return dispatch => {
        axios
            .post(URL, product)
            .then(response => dispatch(
                {
                    type: CREATE_PRODUCT,
                    payload: response.data
                }
            ))
    }
}

export function getProducts() {
    return dispatch => {
        dispatch({
            type: LOADER,
            payload: true
        })
        axios
            .get(URL)
            .then(response => dispatch(
                {
                    type: GET_PRODUCTS,
                    payload: response.data
                }
            )).then(() => {
            dispatch({
                type: LOADER,
                payload: false
            })
        })
    }
}

export function deleteProduct(product) {
    return dispatch => {
        axios
            .delete(`${URL}/${product.id}`)
            .then(response => dispatch(
                {
                    type: DELETE_PRODUCT,
                    payload: product
                }
            ))
    }
}

export function editProduct(product) {
    return dispatch => {
        axios
            .put(`${URL}/${product.id}`, product)
            .then(response => dispatch(
                {
                    type: EDIT_PRODUCT,
                    payload: response.data
                }
            ))
    }
}


export function createShopItem(shopItem) {
    return {
        type: CREATE_SHOP_ITEM,
        payload: shopItem
    }
}