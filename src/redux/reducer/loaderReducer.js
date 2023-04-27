import {LOADER} from "../types/products";

const initialState = {
    loader: true,
}

export default function loaderReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
        case LOADER:
            return {...state, loader: action.payload}

    }
}