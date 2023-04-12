import {CREATE_SHOP_ITEM, DELETE_SHOP_ITEM, EDIT_SHOP_ITEM, GET_SHOP_ITEMS, GET_SHOP_ITEM} from "../types/SHOP_ITEM";

const initialState = {
    data: [],
    item: {}
}

export default function shopReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
        case GET_SHOP_ITEMS: {
            return {...state, data: action.payload}
        }
        case GET_SHOP_ITEM: {
            return {...state, item: action.payload}
        }
        case CREATE_SHOP_ITEM: {
            return {...state, data: [...state.data, action.payload]}
        }
        case EDIT_SHOP_ITEM: {
            return {
                ...state, data: state.data.map(value => {
                    if (value.id === action.payload.id) {
                        return action.payload
                    } else {
                        return value
                    }
                })
            }
        }
        case DELETE_SHOP_ITEM: {
            return {...state, data: state.data.filter(value => value.id !== action.payload.id)}
        }
    }
}