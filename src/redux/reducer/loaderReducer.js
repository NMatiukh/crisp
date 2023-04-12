import {LOADER} from "../types/products";

const initialState = {
    loader: false,
}

export default function loaderReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
        case LOADER:
            return {...state, loader: action.payload}

    }
}